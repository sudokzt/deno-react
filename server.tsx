import {
  Application,
  Context,
  React,
  ReactDOMServer,
  Router,
} from "./deps.ts"; // dependencies modules

import App from "./App.tsx";

const PORT = 8000;

const app = new Application();
const jsBundle = "/main.js"; // after bundling ts files

const js = `import React from "https://jspm.dev/react@16.13.1";
 import ReactDOM from "https://jspm.dev/react-dom@16.13.1";
 const App = ${App};
 ReactDOM.hydrate(React.createElement(App), document.getElementById('app'));`;

const html = `
<html>
<head>
  <script type="module" src="${jsBundle}"></script>
</head>
<body>
  <div id="app">${ReactDOMServer.renderToString(<App />)}</div>  
</body>
</html>`;

/**
  * define routing
  */
const router = new Router(); // oak that the middleware framework for Deno's http server
router
  // will serve our HTML page that contains the rendered app.
  .get("/", (context: Context) => {
    context.response.type = "text/html";
    context.response.body = html;
  })
  // will serve our application code that is needed to hydrate the client side React application.
  .get(jsBundle, (context: Context) => {
    context.response.type = "application/javascript";
    context.response.body = js;
  });
app.use(router.routes());
// app.use(router.allowedMethods());

console.log(`Listening port: ${PORT}`);

// can use top level await
await app.listen({ port: PORT });
