import { useEffect, useState } from "react";
import { customFetch } from "./customFetch";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    customFetch(
      `
    query Sam($limit:Int!){
  samuraiList (pageParams:{limit: $limit, offset: 2}) {
    id name nickname age
  }
}
    `,
      { limit: 1 }
    ).then((result) => {
      setData(result);
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
