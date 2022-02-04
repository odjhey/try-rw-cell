export const customFetch = async (
  query: string,
  variables: Record<string, any>
) => {
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
