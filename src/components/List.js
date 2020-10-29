import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import classes from "../styles/list.module.scss";
const List = ({ items, align = "column", type = "ul", listStyle }) => {
  const classItems = classNames(classes.items, classes[align]);
  return type === "ul" ? (
    <ul style={{ listStyle }} className={classItems}>
      <ListChildren items={items} />
    </ul>
  ) : (
    <ol style={{ listStyle }} className={classItems}>
      <ListChildren items={items} />
    </ol>
  );
};

const ListChildren = ({ items }) => (
  <>
    {items?.map((item, key) => (
      <li key={key} className={classes.item}>
        {item}
      </li>
    ))}
  </>
);
List.propTypes = {
  items: PropTypes.array,
  type: PropTypes.oneOf(["ul", "ol"])
};
export default List;
