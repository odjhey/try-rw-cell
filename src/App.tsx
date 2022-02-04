import { useQuery } from "./hooks/useQuery";

function App() {
  const { data, error, loading } = useQuery(
    `
  query Sam($limit:Int!){
  samuraiList (pageParams:{limit: $limit, offset: 2}) {
    id name nickname age
  }
}`,
    { limit: 2 }
  );

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
