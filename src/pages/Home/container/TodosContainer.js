import { useSelector } from "react-redux";

import { typesArraySelector } from "pages/Home/selectors";
import InfoAlert from "components/Alert";
import TodosLayout from "components/TodosLayout";
import ListOfTodos from "pages/Home/components/List";
import ModalWindow from "components/ModalWindow";
import useTodos from "hooks/useTodos";

const TodosContainer = () => {
  const typesArray = useSelector(typesArraySelector);

  const todosVariables = useTodos("");

  return (
    <>
      <InfoAlert
        isVisible={todosVariables.isVisibleAlert}
        status="error"
        title="Client error!"
        message='Press text in "Add a new task" field'
      />
      <TodosLayout
        inputValue={todosVariables.form.todo}
        onFormChange={todosVariables.onFormChange}
        onCreateTodo={todosVariables.onCreateTodo}
        title="All tasks"
      >
        <ListOfTodos types={typesArray} />
      </TodosLayout>
      <ModalWindow
        isOpen={todosVariables.isOpenModal}
        onClose={todosVariables.onCloseModal}
        onFormChange={todosVariables.onFormChange}
        typeInput={todosVariables.form.type}
        subtaskInput={todosVariables.form.subtask}
        subtasks={todosVariables.subtasks}
        handleAddSubtask={todosVariables.handleAddSubtask}
        onSubmit={todosVariables.handleSubmit}
        types={typesArray}
        onChangeSelect={todosVariables.onChangeSelect}
      />
    </>
  );
};

export default TodosContainer;
