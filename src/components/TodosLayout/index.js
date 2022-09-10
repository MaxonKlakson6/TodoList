import { Box, Button, Heading, Input } from "@chakra-ui/react";
import PropTypes from "prop-types";

import SideBar from "components/SideBar";

import styles from "components/TodosLayout/styles.module.scss";

const TodosLayout = ({
  children,
  inputValue,
  onFormChange,
  onCreateTodo,
  title,
}) => {
  return (
    <Box className={styles.wrapper}>
      <SideBar />
      <Box className={styles.contentWrapper}>
        <Box>
          <Heading as="h2">{title}</Heading>
          <form onSubmit={onCreateTodo}>
            <Input
              className={styles.inputCreateTodo}
              placeholder="Add a new task"
              value={inputValue}
              name="todo"
              onChange={onFormChange}
            />
            <Button type="submit" onClick={onCreateTodo}>
              Create task
            </Button>
          </form>
        </Box>
        {children}
      </Box>
    </Box>
  );
};

TodosLayout.propTypes = {
  inputValue: PropTypes.string,
  onFormChange: PropTypes.func,
  onCreateTodo: PropTypes.func,
  title: PropTypes.string,
};

export default TodosLayout;
