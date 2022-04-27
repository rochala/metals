"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9820],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=l,h=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2365:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(7462),l=a(3366),i=(a(7294),a(3905)),r=["components"],s={id:"getting-started",title:"Contributing to Metals"},o=void 0,u={unversionedId:"contributors/getting-started",id:"contributors/getting-started",title:"Contributing to Metals",description:"Whenever you are stuck or unsure, please open an issue or [ask us on",source:"@site/target/docs/contributors/getting-started.md",sourceDirName:"contributors",slug:"/contributors/getting-started",permalink:"/metals/docs/contributors/getting-started",editUrl:"https://github.com/scalameta/metals/edit/main/docs/contributors/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Contributing to Metals"},sidebar:"docs",previous:{title:"Project Goals",permalink:"/metals/docs/contributors/project-goals"},next:{title:"Contributing to the website",permalink:"/metals/docs/contributors/updating-website"}},p=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Project structure",id:"project-structure",children:[],level:2},{value:"Related projects",id:"related-projects",children:[],level:2},{value:"Common development workflow",id:"common-development-workflow",children:[{value:"Debugging through logging",id:"debugging-through-logging",children:[],level:3},{value:"Classic debugging",id:"classic-debugging",children:[],level:3}],level:2},{value:"Unit tests",id:"unit-tests",children:[{value:"Manually testing a <code>LspSuite</code>",id:"manually-testing-a-lspsuite",children:[],level:3}],level:2},{value:"Cross tests",id:"cross-tests",children:[],level:2},{value:"Manual tests",id:"manual-tests",children:[{value:"Visual Studio Code",id:"visual-studio-code",children:[],level:3},{value:"Vim/Neovim",id:"vimneovim",children:[],level:3}],level:2},{value:"Workspace logs",id:"workspace-logs",children:[],level:2},{value:"JSON-RPC trace",id:"json-rpc-trace",children:[],level:2},{value:"JVM Debugging",id:"jvm-debugging",children:[],level:2},{value:"Updating sbt-launcher",id:"updating-sbt-launcher",children:[],level:2},{value:"Git hooks",id:"git-hooks",children:[],level:2}],c={toc:p};function m(e){var t=e.components,a=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Whenever you are stuck or unsure, please open an issue or ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/DwTc8xbNDd"},"ask us on\nDiscord"),". This project follows ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalameta/scalameta/blob/master/CONTRIBUTING.md"},"Scalameta's\ncontribution\nguidelines"),"\nand the ",(0,i.kt)("a",{parentName:"p",href:"https://scala-lang.org/conduct/"},"Scala CoC"),"."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"You will need the following applications installed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Java 17, 11 or 8 - Make sure ",(0,i.kt)("inlineCode",{parentName:"li"},"JAVA_HOME")," points to a Java 17, 11 or 8 installation.\nMetals will need to build and run on ",(0,i.kt)("em",{parentName:"li"},"all of them"),", with support for 8\nprobably being dropped in the near future."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sbt")," (for building a local version of the server)")),(0,i.kt)("h2",{id:"project-structure"},"Project structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"metals")," the main project with sources of the Metals language server."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mtags")," Scala version specific module used to interact with the Scala\npresentation compiler. It's a dependency of the ",(0,i.kt)("inlineCode",{parentName:"li"},"metals")," project and can\nadditionally be used by via ",(0,i.kt)("inlineCode",{parentName:"li"},"mtags-interfaces")," to support multiple Scala\nversions inside the Metals server. It's also used by other projects like\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metabrowse"},"Metabrowse"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mtags-interfaces")," - java interfaces for the presentation compiler."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tests/unit")," moderately fast-running unit tests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tests/cross")," - tests targeting cross builds for common features such as\nhover, completions, signatures etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tests/input")," example Scala code that is used as testing data for unit tests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tests/slow")," slow integration tests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sbt-metals")," the sbt plugin used when users are using the BSP support from\nsbt to ensure semanticDB is being produced by sbt."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"docs")," documentation markdown for the Metals website."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"metals-docs")," methods used for generating documentation across multiple pages\nin ",(0,i.kt)("inlineCode",{parentName:"li"},"docs"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"website")," holds the static site configuration, style and blogs posts for the\nMetals website.")),(0,i.kt)("p",null,"Below diagram shows project structure and dependencies among modules. Note that\n",(0,i.kt)("inlineCode",{parentName:"p"},"default-<suffix>")," is a ",(0,i.kt)("a",{parentName:"p",href:"https://www.scala-sbt.org/1.x/docs/Multi-Project.html#Default+root+project"},"default root project"),"\ncreated implicitly by sbt.\n",(0,i.kt)("img",{parentName:"p",src:"https://imgur.com/oIhXd5l.png",alt:"Projects diagram"})),(0,i.kt)("h2",{id:"related-projects"},"Related projects"),(0,i.kt)("p",null,"The improvement you are looking to contribute may belong in a separate\nrepository:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals-vscode/"},"scalameta/metals-vscode"),": the\nVisual Studio Code extension for Metals."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/nvim-metals/"},"scalameta/nvim-metals"),": the Neovim\nextension for Metals using the built-in LSP support of Neovim."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/scalameta/"},"scalameta/scalameta"),": SemanticDB,\nparsing, tokenization."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/munit/"},"scalameta/munit"),": Test framework used in\nthe main Metals repository"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalacenter/bloop/"},"scalacenter/bloop"),": build server for\ncompilation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala/scala/"},"scala/scala"),": Scala 2 presentation compiler."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/lampepfl/dotty"},"lampepfl/dotty"),": Scala 3 presentation\ncompiler."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/scalafmt/"},"scalameta/scalafmt"),": code formatting."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalacenter/scalafix/"},"scalacenter/scalafix"),": code\nrefactoring and linting.")),(0,i.kt)("h2",{id:"common-development-workflow"},"Common development workflow"),(0,i.kt)("p",null,"Most of the time development in Metals looks like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"do some changes"),(0,i.kt)("li",{parentName:"ul"},"write tests which check if your changes work"),(0,i.kt)("li",{parentName:"ul"},"publish Metals server locally and test changes manually")),(0,i.kt)("p",null,"When diving into part of the code without any prior knowledge it might be hard to comprehend what's going on\nand what part of the code is responsible for specific behavior. There are several ways to debug Metals,\nbut most popular are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"debugging through logging (recommended option)"),(0,i.kt)("li",{parentName:"ul"},"classic debugging with breakpoints")),(0,i.kt)("h3",{id:"debugging-through-logging"},"Debugging through logging"),(0,i.kt)("p",null,"This approach provides very quick iterations and short feedback loop.\nIt depends on placing multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"pprint.log()")," calls which will log\nmessages in ",(0,i.kt)("inlineCode",{parentName:"p"},".metals.log")," file. Logged output can be watched by ",(0,i.kt)("inlineCode",{parentName:"p"},"tail -f .metals/metals.log"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'MetalsLanguageServer.scala:1841 params: DebugSessionParams [\n  targets = SingletonList (\n    BuildTargetIdentifier [\n      uri = "file:/HappyMetalsUser/metals/#metals/Compile"\n    ]\n  )\n  dataKind = "scala-attach-remote"\n  data = {}\n]\n')),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#workspace-logs"},"workspace logs")," for more information."),(0,i.kt)("p",null,"This approach can be used in 2 variants:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"together with ",(0,i.kt)("a",{parentName:"li",href:"#manual-tests"},"manual testing")," when it's hard to write test\nfor some changes."),(0,i.kt)("li",{parentName:"ul"},"with ",(0,i.kt)("a",{parentName:"li",href:"#unit-tests"},"unit tests"))),(0,i.kt)("h3",{id:"classic-debugging"},"Classic debugging"),(0,i.kt)("p",null,"Classic debugging is possible by the ",(0,i.kt)("a",{parentName:"p",href:"#jvm-debugging"},"JVM debugging mechanism"),".\nPublish Metals locally, open a new project and configure debug settings.\nThen you can attach IDE with opened Metals repository to the debugged instance:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"VSCode - add attach configuration to yours ",(0,i.kt)("a",{parentName:"p",href:"../editors/vscode#via-a-launchjson-configuration"},"launch.json")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'{\n  "version": "0.2.0",\n  "configurations": [\n    // Attach debugger when running via:\n    // `-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=localhost:5005`\n    {\n      "type": "scala",\n      "request": "attach",\n      "name": "Attach debugger to Metals server",\n      "buildTarget": "metals",\n      "hostName": "localhost",\n      "port": 5005\n    }\n  ]\n}\n')),(0,i.kt)("p",{parentName:"li"},"Then pick such a defined configuration and run debug."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://imgur.com/ySAo6Um.png",alt:"Attach debugger"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"IntelliJ - Select Attach to the process and pick proper process from the list"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://imgur.com/lHSl57l.png",alt:"Attach to the process"})))),(0,i.kt)("h2",{id:"unit-tests"},"Unit tests"),(0,i.kt)("p",null,"To run the unit tests open an sbt shell and run ",(0,i.kt)("inlineCode",{parentName:"p"},"unit/test"),". However, this command will\nrun all of the unit tests declared in ",(0,i.kt)("inlineCode",{parentName:"p"},"unit")," module."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sbt\n\n# (recommended) run a specific test suite, great for edit/test/debug workflows.\n> unit/testOnly tests.DefinitionSuite\n\n# run a specific test case inside the suite.\n> unit/testOnly tests.DefinitionSuite -- <exact-test-name>\n\n# run unit tests, moderately fast but still a bit too slow for edit/test/debug workflows.\n> unit/test\n\n# run slow integration tests, takes several minutes.\n> slow/test\n\n# (not recommended) run all tests, slow. It's better to target individual projects.\n> test\n")),(0,i.kt)("h3",{id:"manually-testing-a-lspsuite"},"Manually testing a ",(0,i.kt)("inlineCode",{parentName:"h3"},"LspSuite")),(0,i.kt)("p",null,"Every test suite that extends ",(0,i.kt)("inlineCode",{parentName:"p"},"LspSuite")," generates a workspace directory under\n",(0,i.kt)("inlineCode",{parentName:"p"},"tests/unit/target/e2e/<suitename>/<testname>"),". To debug why a ",(0,i.kt)("inlineCode",{parentName:"p"},"LspSuite")," might be\nfailing, run the test once and then open it directly in the editor. For\nexample, for the test case ",(0,i.kt)("inlineCode",{parentName:"p"},'"deprecated-scala"')," in ",(0,i.kt)("inlineCode",{parentName:"p"},"WarningsLspSuite")," run the\nfollowing command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"code tests/unit/target/e2e/warnings/deprecated-scala\n")),(0,i.kt)("p",null,"This will open Visual Studio Code in directory with test project and it'll be\npossible to investigate why test is failing manually."),(0,i.kt)("h2",{id:"cross-tests"},"Cross tests"),(0,i.kt)("p",null,"These tests checks common features such as hover, completions or signatures for\ndifferent scala version."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sbt\n\n# run presentation compiler tests, these are the quickest tests to run.\n> cross/test\n\n run presentation compiler tests for all Scala versions.\n> +cross/test\n")),(0,i.kt)("h2",{id:"manual-tests"},"Manual tests"),(0,i.kt)("p",null,"Some functionality is best to manually test through an editor. A common workflow\nwhile iterating on a new feature is to run ",(0,i.kt)("inlineCode",{parentName:"p"},"publishLocal")," and then open an\neditor in a small demo build."),(0,i.kt)("p",null,"It's important to note that ",(0,i.kt)("inlineCode",{parentName:"p"},"sbt publishLocal")," will create artifacts only for\nthe Scala version currently used in Metals and trying to use the snapshot\nversion with any other Scala version will not work. In that case you need to run\na full cross publish with ",(0,i.kt)("inlineCode",{parentName:"p"},"sbt +publishLocal"),", however this will take quite some\ntime, so you may want to target a specific version to publish like ",(0,i.kt)("inlineCode",{parentName:"p"},"++3.1.1 mtags/publishLocal"),"."),(0,i.kt)("h3",{id:"visual-studio-code"},"Visual Studio Code"),(0,i.kt)("p",null,'Install the Metals extension from the Marketplace by searching for "Metals".'),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"vscode:extension/scalameta.metals"},"Click here to install the Metals VS Code plugin")),(0,i.kt)("p",null,'Next, update the "Server version" setting under preferences to point to the\nversion you published locally via ',(0,i.kt)("inlineCode",{parentName:"p"},"sbt publishLocal"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/ogVWI1t.png",alt:"Metals server version setting"})),(0,i.kt)("p",null,"When you make changes in the Metals Scala codebase"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"run ",(0,i.kt)("inlineCode",{parentName:"li"},"sbt publishLocal")),(0,i.kt)("li",{parentName:"ul"},'execute the "Metals: Restart server" command in Visual Studio Code (via\ncommand palette)')),(0,i.kt)("h3",{id:"vimneovim"},"Vim/Neovim"),(0,i.kt)("p",null,"If using ",(0,i.kt)("inlineCode",{parentName:"p"},"nvim-metals"),":"),(0,i.kt)("p",null,"You'll want to make sure to read the docs\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalameta/nvim-metals/blob/main/doc/metals.txt"},"here")," and\ntake a look at the example configuration\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalameta/nvim-metals/discussions/39"},"here")," if you haven't\nalready set everything up."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"run ",(0,i.kt)("inlineCode",{parentName:"li"},"sbt publishLocal")),(0,i.kt)("li",{parentName:"ul"},"set the ",(0,i.kt)("inlineCode",{parentName:"li"},"serverVersion")," in your ",(0,i.kt)("inlineCode",{parentName:"li"},"settings")," table that you pass in to your\nmetals config."),(0,i.kt)("li",{parentName:"ul"},"Open your workspace and trigger a ",(0,i.kt)("inlineCode",{parentName:"li"},":MetalsUpdate")," followed by a\n",(0,i.kt)("inlineCode",{parentName:"li"},":MetalsRestart"),". NOTE: that every time you publish locally you'll want to\ntrigger this again.")),(0,i.kt)("p",null,"If using ",(0,i.kt)("inlineCode",{parentName:"p"},"coc-metals"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"after the publish local set your ",(0,i.kt)("inlineCode",{parentName:"li"},"metals.serverVersion")," in your\n",(0,i.kt)("inlineCode",{parentName:"li"},":CocConfig"),"."),(0,i.kt)("li",{parentName:"ul"},"execute the ",(0,i.kt)("inlineCode",{parentName:"li"},"metals.restartServer command"))),(0,i.kt)("p",null,"If you are using another Vim client, write a ",(0,i.kt)("inlineCode",{parentName:"p"},"new-metals-vim")," script that builds\na new ",(0,i.kt)("inlineCode",{parentName:"p"},"metals-vim")," bootstrap script using the locally published version."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"coursier bootstrap \\\n  --java-opt -Dmetals.client=<<NAME_OF_CLIENT>> \\\n  org.scalameta:metals_2.12:0.11.5-SNAPSHOT \\ # double-check version here\n  -r bintray:scalacenter/releases \\\n  -o /usr/local/bin/metals-vim -f\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE")," if you're able to configure your client using initialization options,\nthen the ",(0,i.kt)("inlineCode",{parentName:"p"},"client")," property is not necessary. You can see all the options\n",(0,i.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/docs/integrations/new-editor#initializationoptions"},"here"),"."),(0,i.kt)("p",null,"Finally, start Vim with the local Metals version"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd test-workspace # any directory you want to manually test Metals\nnew-metals-vim && vim build.sbt # remember to have the script in your $PATH\n")),(0,i.kt)("p",null,"When you make changes in the Metals Scala codebase, run ",(0,i.kt)("inlineCode",{parentName:"p"},"sbt publishLocal"),", quit\nvim and re-run ",(0,i.kt)("inlineCode",{parentName:"p"},"new-metals-vim && vim build.sbt"),"."),(0,i.kt)("h2",{id:"workspace-logs"},"Workspace logs"),(0,i.kt)("p",null,"Metals logs workspace-specific information to the\n",(0,i.kt)("inlineCode",{parentName:"p"},"$WORKSPACE/.metals/metals.log")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"tail -f .metals/metals.log\n")),(0,i.kt)("p",null,"These logs contain information that may be relevant for regular users."),(0,i.kt)("h2",{id:"json-rpc-trace"},"JSON-RPC trace"),(0,i.kt)("p",null,"To see the trace of incoming/outgoing JSON communication with the text editor\nor build server, create empty files in ",(0,i.kt)("inlineCode",{parentName:"p"},"$WORKSPACE/.metals/")," or your machine cache\ndirectory."),(0,i.kt)("p",null,"However, we do not recommend using your machine cache directory because\ntrace files located there are shared between all Metals instances, hence multiple\nservers can override the same file. Using ",(0,i.kt)("inlineCode",{parentName:"p"},"$WORKSPACE/.metals/")," solves this issue and\nalso allows user to have more precise control over which metals instances log\ntheir JSON-RPC communication."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# Linux and macOS\ntouch $WORKSPACE/.metals/lsp.trace.json # text editor\ntouch $WORKSPACE/.metals/bsp.trace.json # build server\ntouch $WORKSPACE/.metals/dap-server.trace.json # debug adapter\ntouch $WORKSPACE/.metals/dap-client.trace.json # debug adapter\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# Windows\ntype nul > $WORKSPACE/.metals/lsp.trace.json # text editor\ntype nul > $WORKSPACE/.metals/bsp.trace.json # build server\ntype nul > $WORKSPACE/.metals/dap-server.trace.json # debug adapter\ntype nul > $WORKSPACE/.metals/dap-client.trace.json # debug adapter\n")),(0,i.kt)("p",null,"Next when you start Metals, watch the logs with ",(0,i.kt)("inlineCode",{parentName:"p"},"tail -f"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# Linux and macOS\ntail -f $WORKSPACE/.metals/lsp.trace.json\n")),(0,i.kt)("p",null,"The traces are very verbose so it's recommended to delete the files if you are\nnot interested in debugging the JSON communication."),(0,i.kt)("h2",{id:"jvm-debugging"},"JVM Debugging"),(0,i.kt)("p",null,"To debug the JVM with the Metals server, add a property to your\n",(0,i.kt)("inlineCode",{parentName:"p"},"Server Properties")," with the usual Java debugging flags, making sure you have\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"quiet")," option on. It's important to remember about the flag, as the server\nuses standard input/output to communicate with the client, and the default\noutput of the debuggee interferes with that."),(0,i.kt)("p",null,"This property will make your server run in debug mode on port 5005 without\nwaiting for the debugger to connect:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005,quiet=y\n")),(0,i.kt)("h2",{id:"updating-sbt-launcher"},"Updating sbt-launcher"),(0,i.kt)("p",null,"The easiest way to update the sbt-launcher is with the following coursier\ncommand:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'cp "$(cs fetch org.scala-sbt:sbt-launch:<version>)" sbt-launch.jar\n')),(0,i.kt)("p",null,"This will allow you to not have to do some of the manual steps with the launcher\nproperties file listed ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sbt/launcher"},"here"),"."),(0,i.kt)("h2",{id:"git-hooks"},"Git hooks"),(0,i.kt)("p",null,"This git repository has a pre-push hook to run Scalafmt."),(0,i.kt)("p",null,"The CI also uses Scalafix to assert that there a no unused imports. To\nautomatically remove unused imports run ",(0,i.kt)("inlineCode",{parentName:"p"},"sbt scalafixAll"),". We don't run Scalafix\nas a pre-push git hook since starting sbt takes a long time."))}m.isMDXComponent=!0}}]);