module Main


open Sutil

importSideEffects "./styles.css"

registerAll ()
// Start the app
App.view () |> Program.mountElement "fable-app"
