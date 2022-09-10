import { useDispatch } from "react-redux";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Checkbox,
  CircularProgress,
  CircularProgressLabel,
  List,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

import ButtonDelete from "components/ButtonDelete";
import SubtaskItem from "components/SubtaskItem";

import { deleteTodo, toggleCompletedTodo } from "pages/Home/reducer";
import { getPercent } from "helpers/functions/getPersent";

import styles from "components/TodoItem/styles.module.scss";

const TodoItem = ({ text, subtasks, type, id, completed }) => {
  const dispatch = useDispatch();

  const subtasksCompleted = subtasks.map((subtask) => subtask.completed);

  const allChecked = subtasksCompleted.every(Boolean);
  const isIndeterminate = subtasksCompleted.some(Boolean) && !allChecked;

  const handleDeleteTodo = () => {
    dispatch(deleteTodo({ type, id }));
  };

  const toggleCompleted = () => {
    dispatch(toggleCompletedTodo({ type, id }));
  };

  const progress = getPercent(subtasksCompleted);

  return (
    <>
      {subtasks.length !== 0 ? (
        <Accordion className={styles.wrapper} defaultIndex={[]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" className={styles.todoHolder}>
                  <Checkbox
                    onChange={toggleCompleted}
                    isChecked={completed}
                    isIndeterminate={isIndeterminate}
                  />
                  <Text className={styles.todoText}>{text}</Text>
                  <CircularProgress value={progress}>
                    <CircularProgressLabel>{progress}%</CircularProgressLabel>
                  </CircularProgress>
                  <Badge colorScheme="purple">Task</Badge>
                  <ButtonDelete onClick={handleDeleteTodo} />
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <List className={styles.subtasksList}>
                {subtasks.map((subtask) => {
                  return (
                    <SubtaskItem
                      completed={subtask.completed}
                      type={type}
                      text={subtask.text}
                      key={subtask.id}
                      id={subtask.id}
                      todoId={subtask.todoId}
                    />
                  );
                })}
              </List>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ) : (
        <Box flex="1" textAlign="left" className={styles.todoWithoutSubtasks}>
          <Checkbox onChange={toggleCompleted} isChecked={completed} />
          <Text className={styles.todoText}>{text}</Text>
          <Badge colorScheme="purple">Task</Badge>
          <ButtonDelete onClick={handleDeleteTodo} />
        </Box>
      )}
    </>
  );
};

TodoItem.propTypes = {
  text: PropTypes.string,
  subtasks: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      text: PropTypes.string,
      id: PropTypes.string,
      completed: PropTypes.bool,
      todoId: PropTypes.string,
    })
  ),
  id: PropTypes.string,
  completed: PropTypes.bool,
  type: PropTypes.string,
};

export default TodoItem;
