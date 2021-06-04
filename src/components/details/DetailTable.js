import { useEffect, useState } from "react";
import { drawCardsFromDeck } from "../../helpers/drawCards";
import DetailItemTable from "./DetailItemTable";
const DetailTable = ({ character, existingCards, onLoadItem }) => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    function generateCharacterDetails(value) {
      return drawCardsFromDeck(value, existingCards);
    }
    const characterDetails = generateCharacterDetails(
      character.value
    ).sort((a, b) =>
      a.aspect.toLowerCase() > b.aspect.toLowerCase() ? 0 : -1
    );
    if (details.length === 0) {
      setDetails(characterDetails);
      onLoadItem(character, characterDetails);
    }
  }, [details, character, existingCards, onLoadItem]);
  return <DetailItemTable character={{ ...character, details }} />;
};
export default DetailTable;
