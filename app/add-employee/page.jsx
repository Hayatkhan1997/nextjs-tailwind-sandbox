"use client";
import MainLayout from "@/components/layout/MainLayout";
import { useState } from "react";
import useFormStore from "../store";

const AddEmployeePage = () => {
  const [formData, setFormData] = useState(
    useFormStore((state) => state.formData)
  );
  console.log("form data");
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addEmployeeData = {
      name: formData.name,
      salary: formData.salary,
      age: formData.age,
    };

    try {
      const response = await fetch(
        "https://dummy.restapiexample.com/api/v1/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addEmployeeData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <MainLayout>
      <div className="flex items-center justify-center h-screen">
        <div className="max-w-md p-6 bg-white rounded-md shadow-md">
          <h1 className="text-2xl font-semibold mb-6">Add Employee</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Salary:
              </label>
              <input
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                pattern="[0-9]*" // Allow only numeric values
                min="0" // Set minimum value to 0
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Age:
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                pattern="[0-9]*" // Allow only numeric values
                min="0" // Set minimum value to 0
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Profile Image:
              </label>
              <input
                type="file"
                name="profileImage"
                accept="image/*"
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default AddEmployeePage;
