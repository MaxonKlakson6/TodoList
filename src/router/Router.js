import { Navigate, Route, Routes } from "react-router-dom";

import TodosContainer from "pages/Home/container/TodosContainer";
import TypeContainer from "pages/TypePage/container/TypeContainer";

const Router = () => {
  return (
    <Routes>
      <Route path="/home" element={<TodosContainer />} />
      <Route path="/home/:typename" element={<TypeContainer />} />
      <Route path="/" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default Router;
