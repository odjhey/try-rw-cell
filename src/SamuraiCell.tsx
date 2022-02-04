export const QUERY = `
  query Sam($limit:Int!){
  samuraiList (pageParams:{limit: $limit, offset: 2}) {
    id name nickname age
  }
}
`;

export const Loading = () => <p>...loading</p>;
export const Error = (error: any) => (
  <pre>{JSON.stringify(error, null, 2)}</pre>
);
export const Success = ({ data }: { data: any }) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
);