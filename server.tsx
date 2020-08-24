import React from "https://dev.jspm.io/react@16.13.1";
import ReactDOMServer from "https://dev.jspm.io/react-dom@16.13.1/server";
import { Application } from "https://deno.land/x/oak/mod.ts";

function App() {
  return (
    <div>
      Hello <span>World</span>
    </div>
  );
}

const body = ReactDOMServer.renderToString(<App />);
const app = new Application();

app.use((ctx) => {
  ctx.response.body = `
        <!DOCTYPE html>
        <html>
            <body>
                <div id=root >${body}</div>
            </body>
        </html>
    `;
});

await app.listen({ port: 8000 });
