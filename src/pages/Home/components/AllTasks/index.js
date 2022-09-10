import InfoAlert from "components/Alert";
import TodosLayout from "components/TodosLayout";
import ListOfTodos from "pages/Home/components/List";
import ModalWindow from "components/ModalWindow";

const AllTasks = ({
  isVisibleAlert,
  form,
  onFormChange,
  onCreateTodo,
  typesArray,
  isOpenModal,
  onCloseModal,
  subtasks,
  handleAddSubtask,
  handleSubmit,
  onChangeSelect,
}) => {
  return (
    <>
      <InfoAlert
        isVisible={isVisibleAlert}
        status="error"
        title="Client error!"
        message='Press text in "Add a new task" field'
      />
      <TodosLayout
        inputValue={form.todo}
        onFormChange={onFormChange}
        onCreateTodo={onCreateTodo}
        title="All tasks"
      >
        <ListOfTodos types={typesArray} />
      </TodosLayout>
      <ModalWindow
        isOpen={isOpenModal}
        onClose={onCloseModal}
        onFormChange={onFormChange}
        typeInput={form.type}
        subtaskInput={form.subtask}
        subtasks={subtasks}
        handleAddSubtask={handleAddSubtask}
        onSubmit={handleSubmit}
        types={typesArray}
        onChangeSelect={onChangeSelect}
      />
    </>
  );
};

export default AllTasks;
