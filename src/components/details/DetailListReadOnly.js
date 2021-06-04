import List from "../List";
import DetailItemTable from "./DetailItemTable";

const DetailListReadOnly = ({ characters }) => (
  <List
    type="ul"
    listStyle="none"
    items={
      characters.length > 0 &&
      characters.map((character) => <DetailItemTable character={character} />)
    }
  />
);
export default DetailListReadOnly;
