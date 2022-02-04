import { useEffect, useState } from "react";

const customFetch = async (query: string, variables: Record<string, any>) => {
  const result = await fetch("http://localhost:3003/graphql", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      // query: "query { samuraiList { id name } }",
      query,
      variables,
    }),
  });

  return result.json();
};

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
