import useTodos from "hooks/useTodos";
import InfoAlert from "components/Alert";
import TodosLayout from "components/TodosLayout";
import TodoItem from "components/TodoItem";
import ModalWindow from "components/ModalWindow";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const TypeContainer = () => {
  const { typename } = useParams();
  const todos = useSelector((state) => state.todoList.types[typename]);
  const todosVariables = useTodos(typename);

  const onFormChange = (event) => {
    if (event.target.name !== "type") {
      todosVariables.onFormChange(event);
    }
  };

  return (
    <>
      <InfoAlert
        isVisible={todosVariables.isVisibleAlert}
        status="error"
        title="Client error!"
        message='Press text in "Add a new task" field'
      />
      <TodosLayout
        title={typename}
        inputValue={todosVariables.form.todo}
        onCreateTodo={todosVariables.onCreateTodo}
        onFormChange={todosVariables.onFormChange}
      >
        {todos?.map((todo) => (
          <TodoItem
            text={todo.text}
            subtasks={todo.subtasks}
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
            type={todo.type}
          />
        ))}
      </TodosLayout>
      <ModalWindow
        isOpen={todosVariables.isOpenModal}
        onClose={todosVariables.onCloseModal}
        onFormChange={onFormChange}
        typeInput={todosVariables.form.type}
        subtaskInput={todosVariables.form.subtask}
        subtasks={todosVariables.subtasks}
        handleAddSubtask={todosVariables.handleAddSubtask}
        onSubmit={todosVariables.handleSubmit}
      />
    </>
  );
};

export default TypeContainer;
