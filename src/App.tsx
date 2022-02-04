import { useEffect, useState } from "react";
import { customFetch } from "./customFetch";

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

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
    )
      .then((result) => {
        console.log("result", result);
        if (result.errors) {
          throw result.errors;
        }
        setData(result);
      })
      .catch((e) => {
        setError(e || e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Hello world</h1>
      {loading && <p>...loading</p>}
      {error && <pre>E {JSON.stringify(error, null, 2)}</pre>}
      {data && <pre>D {JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default App;
