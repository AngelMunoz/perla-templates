# Feliz Template

This template gets you up and running with a simple web app using [Fable](http://fable.io/), [Elmish](https://fable-elmish.github.io/) and [Feliz](https://github.com/Zaid-Ajaj/Feliz).

## Requirements

* [dotnet SDK](https://www.microsoft.com/net/download/core) 5.0.0 or higher

## Editor

To write and edit your code, you can use either VS Code + [Ionide](http://ionide.io/), Emacs with [fsharp-mode](https://github.com/fsharp/emacs-fsharp-mode), [Rider](https://www.jetbrains.com/rider/) or Visual Studio.


## Development

Before doing anything, start with restoring the perla dotnet tool using `dotnet tool restore`.

Then to start development mode with hot module reloading, run:
```bash
dotnet perla serve
```
This will start the development server after compiling the project, once it is finished, navigate to http://localhost:8080 to view the application .

To build the application and make ready for production:
```
dotnet perla build
```
This command builds the application and puts the generated files into the `deploy` directory (can be overwritten in webpack.config.js).
