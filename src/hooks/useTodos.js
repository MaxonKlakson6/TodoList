import { useDispatch } from "react-redux";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { v4 as uuid } from "uuid";

import useForm from "hooks/useForm";
import { createTodo } from "pages/Home/reducer";

export const useTodos = (typename) => {
  const dispatch = useDispatch();
  const [form, onFormChange, changeField, resetForm] = useForm({
    todo: "",
    type: typename,
    subtask: "",
  });

  const [subtasks, setSubtasks] = useState([]);

  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();
  const {
    isOpen: isVisibleAlert,
    onToggle: onOpenAlert,
    onClose: onCloseAlert,
  } = useDisclosure();

  const onCreateTodo = (event) => {
    event.preventDefault();
    if (form.todo) {
      onOpenModal();
    } else {
      onOpenAlert();
      setTimeout(onCloseAlert, 3000);
    }
  };

  const onChangeSelect = (event) => {
    changeField("type", event.target.value);
  };

  const handleAddSubtask = () => {
    if (form.subtask) {
      const newSubtask = {
        text: form.subtask,
        id: uuid(),
      };
      setSubtasks([...subtasks, newSubtask]);
      changeField("subtask", "");
    }
  };

  const handleSubmit = () => {
    if (form.type.length !== 0) {
      dispatch(createTodo({ type: form.type, subtasks, todo: form.todo }));
    } else {
      dispatch(createTodo({ type: "Without Type", subtasks, todo: form.todo }));
    }

    onCloseModal();
    resetForm();
    setSubtasks([]);
  };

  return {
    form,
    onFormChange,
    isOpenModal,
    isVisibleAlert,
    onCreateTodo,
    onChangeSelect,
    handleAddSubtask,
    handleSubmit,
    onCloseModal,
    subtasks,
  };
};

export default useTodos;
