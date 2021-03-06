import { withStandardCell } from "./cells/withStandardCell";
import { toast } from "react-toastify";

export const QUERY = `
  query Sam($limit:Int!, $offset: Int!){
  samuraiList (pageParams:{limit: $limit, offset: $offset}) {
    id 
    name 
    nickname 
    age
  }
}
`;

export const Loading = () => <p>...loading</p>;
export const Error = (error: any) => (
  <pre>{JSON.stringify(error, null, 2)}</pre>
);
export const Success = (props: any) => {
  return <pre>{JSON.stringify(props.data, null, 2)}</pre>;
};

export const onReceiveData = (data: any) => {
  toast("Andito na mga tropa");
  return data;
};

export default withStandardCell({
  QUERY,
  Loading,
  Error,
  Success,
  onReceiveData,
});
