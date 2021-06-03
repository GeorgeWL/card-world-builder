import { useEffect, useState } from "react";
import { drawCardsFromDeck } from "../../helpers/drawCards";
import styles from "../../styles/details.module.scss";
import CardCorner from "../card/CardCorner";
import DetailItem from "./DetailItem";
import classNames from "classnames";
const DetailList = ({ character, existingCards }) => {
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
    }
  }, [details, character.value, existingCards]);
  return (
    <li className={styles.listItem}>
      <details className={styles.details}>
        <summary className={classNames(styles.header, styles.summary)}>
          <CardCorner {...character} align="row" isCard />
          Character Details
        </summary>
        <ul className={styles.list}>
          {details?.length &&
            details.map((detail) => (
              <DetailItem
                key={"detail-" + character.face + "-" + character.suit}
                detail={detail}
              />
            ))}
        </ul>
      </details>
    </li>
  );
};
export default DetailList;
