import { useCallback, useState } from "react";

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const handleChangeForm = useCallback((event) => {
    const { name, value } = event.target;

    setForm((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);

  const changeField = useCallback((name, value) => {
    setForm((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);

  const resetForm = useCallback(() => {
    setForm(initialState);
  }, []);

  return [form, handleChangeForm, changeField, resetForm];
};

export default useForm;
