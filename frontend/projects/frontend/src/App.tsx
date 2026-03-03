import { useState } from "react";

function App() {
  const [response, setResponse] = useState("");

  const callContract = async () => {
    try {
      // Simulate smart contract call
      await new Promise((res) => setTimeout(res, 1000));

      setResponse("Hello, world 🚀 (Smart contract simulated)");
    } catch (err) {
      console.error(err);
      setResponse("Error ❌");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>My Algorand dApp 🚀</h1>
      <button onClick={callContract}>Call Smart Contract</button>
      <p>{response}</p>
    </div>
  );
}

export default App;
