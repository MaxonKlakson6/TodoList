import InfoAlert from "components/Alert";
import TodosLayout from "components/TodosLayout";
import TodoItem from "components/TodoItem";
import ModalWindow from "components/ModalWindow";

const WithOneType = ({
  isVisibleAlert,
  onCloseAlert,
  typename,
  form,
  onCreateTodo,
  onFormChange,
  todos,
  isOpenModal,
  onCloseModal,
  subtasks,
  handleAddSubtask,
  handleSubmit,
}) => {
  const formChange = (event) => {
    if (event.target.name !== "type") {
      onFormChange(event);
    }
  };

  return (
    <>
      <InfoAlert
        isVisible={isVisibleAlert}
        onClose={onCloseAlert}
        status="error"
        title="Client error!"
        message='Press text in "Add a new task" field'
      />
      <TodosLayout
        title={typename}
        inputValue={form.todo}
        onCreateTodo={onCreateTodo}
        onFormChange={onFormChange}
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
        isOpen={isOpenModal}
        onClose={onCloseModal}
        onFormChange={formChange}
        typeInput={typename}
        subtaskInput={form.subtask}
        subtasks={subtasks}
        handleAddSubtask={handleAddSubtask}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default WithOneType;
