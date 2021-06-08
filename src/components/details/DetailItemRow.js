import CardCorner from "../card/CardCorner";

const DetailItemRow = ({ detail }) => (
  <tr>
    <td colSpan="2">
      <small>{detail.aspect}</small>
      <CardCorner {...detail} isCard style={{ margin: "auto" }} />
      {detail.label}
    </td>
    <td>
      <p>{detail.description}</p>
    </td>
  </tr>
);
export default DetailItemRow;
