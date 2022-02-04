export const QUERY = `
  query Ninja($limit:Int!){
  ninjaList (pageParams:{limit: $limit, offset: 2}) {
    id 
    name 
    nickname 
    age
  }
}
`;

export const Loading = () => <p>...loading</p>;
export const Error = () => <p>Error</p>;
export const Success = ({ data }: { data: any }) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
);
