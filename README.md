# Perla Dev Server samples

[perla]: https://github.com/AngelMunoz/Perla

Playground and samples for [Perla] projects, currently supporting js, jsx, ts, tsx

## Getting Started

If you need to install perla check the [Installation instructions](https://perla-docs.web.app/#/content/install)

You can clone the whole project and restore from the root OR just copy a single folder and run perla from it

Example:

```
cd lit-js
perla serve
```


## .NET Users
```
dotnet tool restore
dotnet perla serve
```

visit [localhost:7331](http://localhost:7331/)

## Build for prod

For prod just run

```
dotnet perla build
```

And then, you are ready to go! The compiled assets should be in the "dist" directory afterwards.
