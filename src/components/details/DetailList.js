import classNames from "classnames";
import { useEffect, useState } from "react";
import { drawCardsFromDeck } from "../../helpers/drawCards";
import styles from "../../styles/details.module.scss";
import CardCorner from "../card/CardCorner";
import DetailItem from "./DetailItem";
const DetailList = ({ character, existingCards, onLoadItem }) => {
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
  return (
    <li className={styles.listItem}>
      <details className={styles.details}>
        <summary className={classNames(styles.header, styles.summary)}>
          <CardCorner {...character} align="row" isCard />
          Character Details
        </summary>
        <table className={styles.list}>
          <thead>
            <tr>
              <th colSpan={2}>Aspect</th>
              <th>Prompt</th>
            </tr>
          </thead>
          <tbody>
            {details?.length &&
              details.map((detail) => (
                <DetailItem
                  key={"detail-" + detail.face + "-" + detail.suit}
                  detail={detail}
                />
              ))}
          </tbody>
        </table>
      </details>
    </li>
  );
};
export default DetailList;
