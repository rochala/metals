package scala.meta.internal.pc

import scala.meta.pc.PresentationCompiler
import dotty.tools.pc.{ScalaPresentationCompiler as DottyPresentationCompiler}
import scala.meta.pc.AutoImportsResult
import scala.meta.pc.OffsetParams
import org.eclipse.lsp4j.TextEdit
import java.{util as ju}
import org.eclipse.lsp4j.SelectionRange
import org.eclipse.lsp4j.DocumentHighlight
import org.eclipse.lsp4j.CompletionItem
import scala.meta.pc.RangeParams
import scala.meta.pc.SymbolSearch
import scala.meta.pc.PresentationCompilerConfig
import org.eclipse.lsp4j.CompletionList
import scala.meta.pc.DefinitionResult
import org.eclipse.lsp4j.Diagnostic
import scala.meta.pc.VirtualFileParams
import java.net.URI
import org.eclipse.lsp4j.SignatureHelp
import scala.meta.pc.HoverSignature
import java.nio.file.Path
import java.util.concurrent.CompletableFuture
import java.util.concurrent.ExecutorService
import java.util.concurrent.ScheduledExecutorService

/**
 * This is a wrapper around the DottyPresentationCompiler
 * The main purpose is to allow metals developers to iterate
 * faster on new features.
 *
 * All bugfixes should happen directly in dotty repository.
 * https://github.com/lampepfl/dotty/tree/main/presentation-compiler
 *
 * New features can be developed here, and then later moved to dotty.
 */
class ScalaPresentationCompiler(
    underlying: DottyPresentationCompiler = new DottyPresentationCompiler()
) extends PresentationCompiler:

  override def didClose(uri: URI): Unit =
    underlying.didClose(uri)

  override def isLoaded(): Boolean =
    underlying.isLoaded()

  override def autoImports(
      name: String,
      params: OffsetParams,
      isExtension: java.lang.Boolean,
  ): CompletableFuture[ju.List[AutoImportsResult]] =
    underlying.autoImports(name, params, isExtension)

  override def newInstance(
      buildTargetIdentifier: String,
      classpath: ju.List[Path],
      options: ju.List[String],
  ): PresentationCompiler =
    underlying.newInstance(buildTargetIdentifier, classpath, options)

  override def withScheduledExecutorService(
      scheduledExecutorService: ScheduledExecutorService
  ): PresentationCompiler =
    underlying.withScheduledExecutorService(scheduledExecutorService)

  override def hover(
      params: OffsetParams
  ): CompletableFuture[ju.Optional[HoverSignature]] =
    underlying.hover(params)

  override def convertToNamedArguments(
      params: OffsetParams,
      argIndices: ju.List[Integer],
  ): CompletableFuture[ju.List[TextEdit]] =
    underlying.convertToNamedArguments(params, argIndices)

  override def shutdown(): Unit =
    underlying.shutdown()

  override def withWorkspace(workspace: Path): PresentationCompiler =
    underlying.withWorkspace(workspace)

  override def complete(
      params: OffsetParams
  ): CompletableFuture[CompletionList] =
    underlying.complete(params)

  override def withConfiguration(
      config: PresentationCompilerConfig
  ): PresentationCompiler =
    underlying.withConfiguration(config)

  override def insertInferredType(
      params: OffsetParams
  ): CompletableFuture[ju.List[TextEdit]] =
    underlying.insertInferredType(params)

  override def typeDefinition(
      params: OffsetParams
  ): CompletableFuture[DefinitionResult] =
    underlying.typeDefinition(params)

  override def completionItemResolve(
      item: CompletionItem,
      symbol: String,
  ): CompletableFuture[CompletionItem] =
    underlying.completionItemResolve(item, symbol)

  override def prepareRename(
      params: OffsetParams
  ): CompletableFuture[ju.Optional[org.eclipse.lsp4j.Range]] =
    underlying.prepareRename(params)

  override def diagnosticsForDebuggingPurposes(): ju.List[String] =
    underlying.diagnosticsForDebuggingPurposes()

  override def withSearch(search: SymbolSearch): PresentationCompiler =
    underlying.withSearch(search)

  override def scalaVersion(): String =
    underlying.scalaVersion()

  override def definition(
      params: OffsetParams
  ): CompletableFuture[DefinitionResult] =
    underlying.definition(params)

  override def documentHighlight(
      params: OffsetParams
  ): CompletableFuture[ju.List[DocumentHighlight]] =
    underlying.documentHighlight(params)

  override def rename(
      params: OffsetParams,
      name: String,
  ): CompletableFuture[ju.List[TextEdit]] =
    underlying.rename(params, name)

  override def implementAbstractMembers(
      params: OffsetParams
  ): CompletableFuture[ju.List[TextEdit]] =
    underlying.implementAbstractMembers(params)

  override def didChange(
      params: VirtualFileParams
  ): CompletableFuture[ju.List[Diagnostic]] =
    underlying.didChange(params)

  override def semanticdbTextDocument(
      filename: URI,
      code: String,
  ): CompletableFuture[Array[Byte]] =
    underlying.semanticdbTextDocument(filename, code)

  override def signatureHelp(
      params: OffsetParams
  ): CompletableFuture[SignatureHelp] =
    underlying.signatureHelp(params)

  override def selectionRange(
      params: ju.List[OffsetParams]
  ): CompletableFuture[ju.List[SelectionRange]] =
    underlying.selectionRange(params)

  override def extractMethod(
      range: RangeParams,
      extractionPos: OffsetParams,
  ): CompletableFuture[ju.List[TextEdit]] =
    underlying.extractMethod(range, extractionPos)

  override def getTasty(
      targetUri: URI,
      isHttpEnabled: Boolean,
  ): CompletableFuture[String] =
    underlying.getTasty(targetUri, isHttpEnabled)

  override def restart(): Unit =
    underlying.restart()

  override def withExecutorService(
      executorService: ExecutorService
  ): PresentationCompiler =
    underlying.withExecutorService(executorService)
end ScalaPresentationCompiler
