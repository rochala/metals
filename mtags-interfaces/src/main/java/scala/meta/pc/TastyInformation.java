package scala.meta.pc;

import java.util.List;
import org.eclipse.lsp4j.Location;
import java.util.Optional;
import org.eclipse.lsp4j.Range;

public interface TastyInformation {
    String symbol();

    Optional<String> inTastyJarPath();
    Optional<String> sourcePath();
    Optional<String> tastyJarPath();
    Optional<String> tastyPath();
    Optional<Range>  range();
}
