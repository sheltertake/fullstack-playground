# dotnet

```bash
PS C:\GITHUB\fullstack-playground\recipes\dotnet> dotnet

Usage: dotnet [options]
Usage: dotnet [path-to-application]

Options:
  -h|--help         Display help.
  --info            Display .NET information.
  --list-sdks       Display the installed SDKs.
  --list-runtimes   Display the installed runtimes.

path-to-application:
  The path to an application .dll file to execute.
PS C:\GITHUB\fullstack-playground\recipes\dotnet> dotnet --version
6.0.102

PS C:\GITHUB\fullstack-playground\recipes\dotnet> dotnet --list-sdks
2.2.207 [C:\Program Files\dotnet\sdk]
5.0.405 [C:\Program Files\dotnet\sdk]
6.0.102 [C:\Program Files\dotnet\sdk]
6.0.200 [C:\Program Files\dotnet\sdk]

PS C:\GITHUB\fullstack-playground\recipes\dotnet> dotnet --list-runtimes
Microsoft.AspNetCore.All 2.2.8 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.All]
Microsoft.AspNetCore.App 2.2.8 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
Microsoft.AspNetCore.App 3.1.22 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
Microsoft.AspNetCore.App 5.0.14 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
Microsoft.AspNetCore.App 6.0.2 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
Microsoft.NETCore.App 2.0.9 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
Microsoft.NETCore.App 2.2.8 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
Microsoft.NETCore.App 3.1.22 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
Microsoft.NETCore.App 5.0.14 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
Microsoft.NETCore.App 6.0.2 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
Microsoft.WindowsDesktop.App 3.1.22 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
Microsoft.WindowsDesktop.App 5.0.14 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
Microsoft.WindowsDesktop.App 6.0.2 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]

PS C:\GITHUB\fullstack-playground\recipes\dotnet> dotnet new --list
These templates matched your input:

Template Name                                 Short Name           Language    Tags
--------------------------------------------  -------------------  ----------  -------------------------------------
ASP.NET Core Empty                            web                  [C#],F#     Web/Empty
ASP.NET Core gRPC Service                     grpc                 [C#]        Web/gRPC
ASP.NET Core Web API                          webapi               [C#],F#     Web/WebAPI
ASP.NET Core Web App                          webapp,razor         [C#]        Web/MVC/Razor Pages
ASP.NET Core Web App (Model-View-Controller)  mvc                  [C#],F#     Web/MVC
ASP.NET Core with Angular                     angular              [C#]        Web/MVC/SPA
ASP.NET Core with React.js                    react                [C#]        Web/MVC/SPA
ASP.NET Core with React.js and Redux          reactredux           [C#]        Web/MVC/SPA
Blazor Server App                             blazorserver         [C#]        Web/Blazor
Blazor WebAssembly App                        blazorwasm           [C#]        Web/Blazor/WebAssembly/PWA
Class Library                                 classlib             [C#],F#,VB  Common/Library
Console App                                   console              [C#],F#,VB  Common/Console
dotnet gitignore file                         gitignore                        Config
Dotnet local tool manifest file               tool-manifest                    Config
EditorConfig file                             editorconfig                     Config
global.json file                              globaljson                       Config
MSTest Test Project                           mstest               [C#],F#,VB  Test/MSTest
MVC ViewImports                               viewimports          [C#]        Web/ASP.NET
MVC ViewStart                                 viewstart            [C#]        Web/ASP.NET
NuGet Config                                  nugetconfig                      Config
NUnit 3 Test Item                             nunit-test           [C#],F#,VB  Test/NUnit
NUnit 3 Test Project                          nunit                [C#],F#,VB  Test/NUnit
Protocol Buffer File                          proto                            Web/gRPC
Razor Class Library                           razorclasslib        [C#]        Web/Razor/Library/Razor Class Library
Razor Component                               razorcomponent       [C#]        Web/ASP.NET
Razor Page                                    page                 [C#]        Web/ASP.NET
Solution File                                 sln                              Solution
Web Config                                    webconfig                        Config
Windows Forms App                             winforms             [C#],VB     Common/WinForms
Windows Forms Class Library                   winformslib          [C#],VB     Common/WinForms
Windows Forms Control Library                 winformscontrollib   [C#],VB     Common/WinFo


PS C:\GITHUB\fullstack-playground\recipes\dotnet> dotnet new console -f net5.0 -n consoleapp5 -o ./02-consoleapp5
The template "Console Application" was created successfully.

Processing post-creation actions...
Running 'dotnet restore' on C:\GITHUB\fullstack-playground\recipes\dotnet\02-consoleapp5\consoleapp5.csproj...
  Determining projects to restore...
  Restored C:\GITHUB\fullstack-playground\recipes\dotnet\02-consoleapp5\consoleapp5.csproj (in 89 ms).
Restore succeeded.

PS C:\GITHUB\fullstack-playground\recipes\dotnet> dotnet new console -n consoleapp6 -o ./01-consoleapp
The template "Console App" was created successfully.

Processing post-creation actions...
Running 'dotnet restore' on C:\GITHUB\fullstack-playground\recipes\dotnet\01-consoleapp\consoleapp6.csproj...
  Determining projects to restore...
  Restored C:\GITHUB\fullstack-playground\recipes\dotnet\01-consoleapp\consoleapp6.csproj (in 90 ms).
Restore succeeded.

PS C:\GITHUB\fullstack-playground\recipes\dotnet> dotnet new webapi -n BookApi -o ./03-restapi
The template "ASP.NET Core Web API" was created successfully.

Processing post-creation actions...
Running 'dotnet restore' on C:\GITHUB\fullstack-playground\recipes\dotnet\03-restapi\BookApi.csproj...
  Determining projects to restore...#
  Restored C:\GITHUB\fullstack-playground\recipes\dotnet\03-restapi\BookApi.csproj (in 253 ms).
  Restore succeeded.


PS C:\GITHUB\fullstack-playground\recipes\dotnet> dotnet new webapi -minimal -n BookApi -o ./06-restapi-min
The template "ASP.NET Core Web API" was created successfully.

Processing post-creation actions...
Running 'dotnet restore' on C:\GITHUB\fullstack-playground\recipes\dotnet\06-restapi-min\BookApi.csproj...
  Determining projects to restore...
  Restored C:\GITHUB\fullstack-playground\recipes\dotnet\06-restapi-min\BookApi.csproj (in 200 ms).
Restore succeeded.

```