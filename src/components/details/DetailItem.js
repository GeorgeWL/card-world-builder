import styles from "../../styles/details.module.scss";
import CardCorner from "../card/CardCorner";
import Header from "../Headers";

const DetailItem = ({ detail }) => (
  <li className={styles.listItem}>
    <div className={styles.header}>
      <Header type="h2" headerStyle="secondary">
        <CardCorner {...detail} align="row" isCard />
      </Header>
      <Header type="h3" headerStyle="secondary">
        {detail.label}
        <small>{detail.aspect}</small>
      </Header>
    </div>
    <p>{detail.description}</p>
  </li>
);
export default DetailItem;
