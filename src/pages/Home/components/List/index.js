import { List } from "@chakra-ui/react";
import PropTypes from "prop-types";

import TodoType from "pages/Home/components/TodoType";

import styles from "pages/Home/components/List/styles.module.scss";

const ListOfTodos = ({ types }) => {
  return (
    <List className={styles.wrapper} sx={{ flexGrow: "1", maxWidth: "1072px" }}>
      {types &&
        types.map(([typeName]) => {
          return <TodoType typeName={typeName} key={typeName} />;
        })}
    </List>
  );
};

ListOfTodos.propTypes = {
  types: PropTypes.array,
};

export default ListOfTodos;
