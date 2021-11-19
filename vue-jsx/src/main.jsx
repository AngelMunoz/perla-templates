import { createApp } from "vue";
import { App } from "./app.jsx";
import "./index.css";

const app = createApp({
  render() {
    return <App />;
  },
});
app.mount("#app");
