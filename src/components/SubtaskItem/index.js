import { useDispatch } from "react-redux";
import { memo } from "react";
import { Badge, Checkbox, ListItem, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

import ButtonDelete from "components/ButtonDelete";

import { deleteSubtask, toggleCompletedSubtask } from "pages/Home/reducer";

import styles from "components/SubtaskItem/styles.module.scss";

const SubtaskItem = ({ text, id, todoId, type, completed }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteSubtask({ id, todoId, type }));
  };

  const toggleCompleted = () => {
    dispatch(toggleCompletedSubtask({ id, todoId, type }));
  };

  return (
    <ListItem className={styles.wrapper}>
      <Checkbox onChange={toggleCompleted} isChecked={completed} />
      <Text className={styles.subtaskText}>{text}</Text>
      <Badge colorScheme="green">subtask</Badge>
      <ButtonDelete onClick={handleDelete} />
    </ListItem>
  );
};

SubtaskItem.propTypes = {
  completed: PropTypes.bool,
  type: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.string,
  todoId: PropTypes.string,
};

export default memo(SubtaskItem);
