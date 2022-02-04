import { toast } from "react-toastify";
import { withStandardCell } from "./cells/withStandardCell";

export const QUERY = `
query Mobies {
  nepliksList {
    id title genre duration directedBy
  }
}`;

export const Loading = () => <p>...loading</p>;
export const Error = (error: any) => (
  <pre>{JSON.stringify(error, null, 2)}</pre>
);

export const Success = (props: any) => {
  return <pre>{JSON.stringify(props.data, null, 2)}</pre>;
};

export const onReceiveData = (data: any) => {
  toast("Eto na mga pelikula");
  return data;
};

export default withStandardCell({
  QUERY,
  Loading,
  Error,
  Success,
  onReceiveData,
});
