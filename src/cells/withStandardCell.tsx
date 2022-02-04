import { useQuery } from "../hooks/useQuery";

export const withStandardCell = (cell: any) => (props: any) => {
  const { data, error, loading } = useQuery(cell.QUERY, { limit: 2 });

  if (loading) return <cell.Loading />;
  if (error) return <cell.Error error={error} />;

  return <cell.Success data={data} />;
};

/*
const SamuraiRealCell = (function (cell) {
  return function (props) {
    const { data, error, loading } = useQuery(cell.QUERY, { limit: 2 });

    if (loading) return <cell.Loading />;
    if (error) return <cell.Error error={error} />;

    return <cell.Success data={data} />;
  };
})(SamuraiCell);
*/
