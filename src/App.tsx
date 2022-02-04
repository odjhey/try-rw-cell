import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:3003/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: "query { samuraiList { id name } }",
      }),
    })
      .then((d) => {
        return d.json();
      })
      .then((d) => {
        setData(d);
        console.log(d);
      });
  }, []);

  return (
    <div>
      <h1>Hello world</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
