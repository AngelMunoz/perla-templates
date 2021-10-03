module Main

open Feliz
open App
open Browser.Dom
open Fable.Core.JsInterop

ReactDOM.render(
    Components.Router(),
    document.getElementById "feliz-app"
)