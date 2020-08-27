import { React } from "./deps.ts";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      span: any;
      p: any;
      h1: any;
      h2: any;
      button: any;
    }
  }
}

const App = () => {
  const wrapper = {
    margin: "40px 0 0 40px",
  };

  const garden = {
    height: "60px",
    fontSize: "30px",
    maxWidth: "400px",
    padding: "20px 5px",
    width: "100%",
  };
  const [count, setCount] = React.useState(0);
  return (
    <div style={wrapper}>
      <h2>🦕App</h2>
      <button onClick={() => setCount(count + 1)}>
        ボタンを押すと 🦕 が増えるよ!
      </button>
      <p style={garden}>{Array(count).fill(<span>🦕</span>)}</p>
    </div>
  );
};

export default App;
