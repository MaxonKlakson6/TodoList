import { useDispatch, useSelector } from "react-redux";
import { memo } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

import TodoItem from "components/TodoItem";
import ButtonDelete from "components/ButtonDelete";

import { deleteType } from "pages/Home/reducer";

import styles from "pages/Home/components/TodoType/styles.module.scss";

const TodoType = ({ typeName }) => {
  const dispatch = useDispatch();
  const todosToRender = useSelector((state) => state.todoList.types[typeName]);

  const handleDeleteType = () => {
    dispatch(deleteType(typeName));
  };

  return (
    <Accordion defaultIndex={[]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left" className={styles.todoHolder}>
              <Text className={styles.todoText}>
                {!!typeName ? typeName : "Without type"}
              </Text>
              <Badge colorScheme="red">Type</Badge>
              <ButtonDelete onClick={handleDeleteType} />
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {todosToRender?.map((todo) => {
            return (
              <TodoItem
                text={todo.text}
                subtasks={todo.subtasks}
                key={todo.id}
                id={todo.id}
                completed={todo.completed}
                type={todo.type}
              />
            );
          })}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

TodoType.propTypes = {
  typeName: PropTypes.string,
  typeValue: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      text: PropTypes.string,
      completed: PropTypes.bool,
      id: PropTypes.string,
      subtasks: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string,
          text: PropTypes.string,
          id: PropTypes.string,
          completed: PropTypes.bool,
          todoId: PropTypes.string,
        })
      ),
    })
  ),
};

export default memo(TodoType);
