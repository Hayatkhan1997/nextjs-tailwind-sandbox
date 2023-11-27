import create from "zustand";

const useFormStore = create((set) => ({
  employees: [],
  setEmployees: (data) => set({ employees: data }),
  formData: {
    name: "",
    salary: "",
    age: "",
  },
  setFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),
}));

export default useFormStore;
