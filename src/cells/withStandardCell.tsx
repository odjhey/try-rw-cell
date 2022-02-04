import { useEffect } from "react";
import { useQuery } from "../hooks/useQuery";

export const withStandardCell = (cell: any) => (props: any) => {
  const { variables = { limit: 2 } } = props;
  const { data, error, loading } = useQuery(cell.QUERY, variables);

  useEffect(() => {
    if (typeof cell.onReceiveData === "function" && data) {
      console.log({ data, error, loading });
      cell.onReceiveData(data);
    }
  }, [data]);

  if (loading) return <cell.Loading />;
  if (error) return <cell.Error error={error} />;

  return <cell.Success {...data} {...props} />;
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
