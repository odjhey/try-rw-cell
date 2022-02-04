import { useQuery } from "./hooks/useQuery";

import * as SamuraiCell from "./SamuraiCell";

function App() {
  const { data, error, loading } = useQuery(SamuraiCell.QUERY, { limit: 2 });

  return (
    <div>
      <h1>Hello world</h1>
      {loading && <SamuraiCell.Loading />}
      {error && <SamuraiCell.Error error={error} />}
      {data && <SamuraiCell.Success {...data} />}
    </div>
  );
}

export default App;
