"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MainLayout from "@/components/layout/MainLayout";
import useFormStore from "../store";
import { useRouter } from "next/navigation";
import { TableContainer, Paper } from "@mui/material";
import { EmployeeList } from "@/components/EmployeeTable/employeeTable";

const ViewEmployeePage = () => {
  const employees = useFormStore((state) => state.employees);
  const setEmployees = useFormStore((state) => state.setEmployees);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dummy.restapiexample.com/api/v1/employees"
        );
        setEmployees(response.data.data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchData();
  }, [setEmployees]);

  const handleEdit = (employeeId) => {
    router.push(`/edit-employee/${employeeId}`);
  };

  async function deleteEmployee(employeeId) {
    try {
      const response = await axios.delete(
        `https://dummy.restapiexample.com/api/v1/delete/${employeeId}`
      );
      console.log(`Employee with ID ${employeeId} deleted successfully.`);
      return response;
    } catch (error) {
      console.error(
        `Failed to delete employee with ID ${employeeId}. Error:`,
        error.message
      );
      throw error;
    }
  }

  return (
    <MainLayout>
      <div
        style={{
          background: "#FFC0CB",
          padding: "16px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          float: "left",
          marginTop: "7rem",
        }}
      >
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "16px",
            width:"20rem"
          }}
        >
          View Employees
        </h1>

        {employees.length === 0 ? (
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            ...loading{" "}
          </h1>
        ) : (
          <TableContainer
            component={Paper}
            sx={{ maxHeight: 400, overflowY: "auto" }}
          >
            <EmployeeList
              employees={employees}
              onEdit={handleEdit}
              onDelete={deleteEmployee}
            />
          </TableContainer>
        )}
      </div>
    </MainLayout>
  );
};

export default ViewEmployeePage;
