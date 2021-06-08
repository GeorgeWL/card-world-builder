import CardCorner from "../card/CardCorner";
import Header from "../Headers";
import List from "../List";
import DetailItemTable from "./DetailItemTable";

const DetailListReadOnly = ({ characters }) => (
  <List
    type="ul"
    listStyle="none"
    items={
      characters.length > 0 &&
      characters.map((character) => (
        <>
          <DetailItemTable character={character} />
          {character.connection && (
            <>
              <Header>
                <small>Connection</small>
                {character.connection.aspect}
                <CardCorner {...character.connection} isCard />
              </Header>
            </>
          )}
        </>
      ))
    }
  />
);
export default DetailListReadOnly;
