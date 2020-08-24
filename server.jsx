import React from "https://dev.jspm.io/react@16.13.1";
import ReactDOMServer from "https://dev.jspm.io/react-dom@16.13.1/server";
import { Application } from "https://deno.land/x/oak/mod.ts";

function App() {
  return (
    <div>
      Hello <span>World</span>
      <Lists />
    </div>
  );
}

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      text: "false",
    };
  }

  render() {
    console.log(this.state.toggle);
    return (
      <ul>
        <button
          onClick={() => {
            console.log("click");
            this.setState(() => ({ state: true, text: "hoge" }));
          }}
        >
          {this.state.text}
        </button>
        <li>list1: </li>
        <li>list2: </li>
        <li>list3: </li>
        <li>list4: </li>
      </ul>
    );
  }
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
