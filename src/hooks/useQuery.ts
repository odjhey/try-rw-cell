import { useEffect, useState } from "react";
import { customFetch } from "../customFetch";

export const useQuery = (query: string, variables: Record<string, any>) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    customFetch(query, variables)
      .then((result) => {
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

  return { loading, data, error };
};
