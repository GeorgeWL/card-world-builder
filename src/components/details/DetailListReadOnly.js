import styles from "../../styles/details.module.scss";
import classNames from "classnames";
import DetailItem from "./DetailItem";
import CardCorner from "../card/CardCorner";

const DetailListReadOnly = ({ characters }) => (
  <ul className={classNames(styles.list, styles.listInline)}>
    {characters.length > 0 &&
      characters.map((character) => (
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
                {character?.details?.length &&
                  character.details.map((detail) => (
                    <DetailItem
                      key={"detail-" + detail.face + "-" + detail.suit}
                      detail={detail}
                    />
                  ))}
              </tbody>
            </table>
          </details>
        </li>
      ))}
  </ul>
);
export default DetailListReadOnly;
