package scala.meta.internal.decorations

import java.nio.charset.Charset
import java.util.concurrent.atomic.AtomicReference

import scala.collection.mutable
import scala.concurrent.ExecutionContext
import scala.concurrent.Future
import scala.util.Try
import scala.{meta => m}

import scala.meta.inputs.Input
import scala.meta.internal.metals.Buffers
import scala.meta.internal.metals.ClientCommands
import scala.meta.internal.metals.ClientConfiguration
import scala.meta.internal.metals.CommandHTMLFormat
import scala.meta.internal.metals.HoverExtParams
import scala.meta.internal.metals.MetalsEnrichments._
import scala.meta.internal.metals.SemanticdbFeatureProvider
import scala.meta.internal.metals.ServerCommands
import scala.meta.internal.metals.UserConfiguration
import scala.meta.internal.metap.PrinterSymtab
import scala.meta.internal.mtags.Md5Fingerprints
import scala.meta.internal.mtags.SemanticdbPath
import scala.meta.internal.mtags.Semanticdbs
import scala.meta.internal.parsing.TokenEditDistance
import scala.meta.internal.parsing.Trees
import scala.meta.internal.pc.HoverMarkup
import scala.meta.internal.semanticdb.MethodSignature
import scala.meta.internal.semanticdb.Scala.Descriptor.Method
import scala.meta.internal.semanticdb.Scala._
import scala.meta.internal.semanticdb.TextDocument
import scala.meta.internal.semanticdb.TextDocuments
import scala.meta.internal.semanticdb.ValueSignature
import scala.meta.internal.{semanticdb => s}
import scala.meta.io.AbsolutePath
import scala.meta.tokens.Token.RightParen
import scala.meta.tokens.{Token => T}

import org.eclipse.{lsp4j => l}

final class SyntheticsDecorationProvider(
    workspace: AbsolutePath,
    semanticdbs: Semanticdbs,
    buffer: Buffers,
    client: DecorationClient,
    fingerprints: Md5Fingerprints,
    charset: Charset,
    focusedDocument: () => Option[AbsolutePath],
    clientConfig: ClientConfiguration,
    userConfig: () => UserConfiguration,
    trees: Trees,
)(implicit ec: ExecutionContext)
    extends Decorations[DecorationOptions](
      workspace,
      semanticdbs,
      buffer,
      client,
      fingerprints,
      charset,
      focusedDocument,
      clientConfig,
      userConfig,
      trees,
    ) {

  override protected def areSyntheticsEnabled: Boolean =
    !clientConfig.isInlayHintsEnabled() && super.areSyntheticsEnabled

  override protected def toDecoration(
      lspRange: l.Range,
      decorationText: String,
  ): DecorationOptions = {
    // We don't add hover due to https://github.com/microsoft/vscode/issues/105302
    new DecorationOptions(
      lspRange,
      renderOptions = ThemableDecorationInstanceRenderOptions(
        after = ThemableDecorationAttachmentRenderOptions(
          decorationText,
          color = "grey",
          fontStyle = "italic",
          opacity = 0.7,
        )
      ),
    )

  }

  override def onChange(path: AbsolutePath, textDoc: TextDocument): Unit =
    publish(path, decorations(path, textDoc))

  /**
   * Publish synthetic decorations for path.
   * @param path path of the file to publish synthetic decorations for
   * @param isRefresh we don't want to send anything if all flags are disabled unless
   * it's a refresh, in which case we might want to remove decorations.
   */
  def publishSynthetics(
      path: AbsolutePath,
      isRefresh: Boolean = false,
  ): Future[Unit] = Future {
    if (isRefresh && !areSyntheticsEnabled) publish(path, Nil)
    else if (areSyntheticsEnabled) {
      val decorations = syntheticDecorations(path)
      publish(path, decorations)
    }
  }

  override protected def refreshAction(doc: AbsolutePath): Future[Unit] =
    publishSynthetics(doc, isRefresh = true)

  override def refresh(): Future[Unit] =
    focusedDocument() match {
      case Some(doc) => publishSynthetics(doc, isRefresh = true)
      case None => Future.unit
    }
}
