import { React } from "./deps.ts";

const App = () => {
  const [count, setCount] = React.useState(0);

  const garden = {
    backgroundColor: "#44aa44",
    height: "auto",
    fontSize: "30px",
    maxWidth: "400px",
    padding: "20px 5px",
    width: "100%",
  };

  return (
    <div className="pure-g pure-u">
      <h2>React App</h2>
      <button
        className="pure-button"
        onClick={() => setCount(count + 1)}
      >
        Add a 🦕 in the field
      </button>
      <p style={garden}>
        {Array(count).fill(<span>🦕</span>)}
      </p>
    </div>
  );
};

export default App;
