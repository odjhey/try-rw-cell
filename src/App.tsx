import { useQuery } from "./hooks/useQuery";

import SamuraiCell from "./SamuraiCell";

function App() {
  return (
    <div>
      <h1>Hello world</h1>

      <SamuraiCell variables={{ limit: 4, offset: 2 }} />
    </div>
  );
}

export default App;
