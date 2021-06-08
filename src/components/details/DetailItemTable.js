import styles from "../../styles/details.module.scss";
import classNames from "classnames";
import CardCorner from "../card/CardCorner";
import DetailItemRow from "./DetailItemRow";

const DetailItemTable = ({ character }) => (
  <details className={styles.details} open>
    <summary className={classNames(styles.header, styles.summary)}>
      <CardCorner {...character} isCard />
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
          character.details.map((detail) =>
            typeof detail !== "string" ? (
              <DetailItemRow
                key={"detail-" + detail.face + "-" + detail.suit}
                detail={detail}
              />
            ) : (
              <tr>{detail}</tr>
            )
          )}
      </tbody>
    </table>
  </details>
);
export default DetailItemTable;
