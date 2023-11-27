// Import necessary modules and components
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import MainLayout from "@/components/layout/MainLayout";
import {
  Button,
  TextField,
  Paper,
  Typography,
  Container,
  Box,
} from "@mui/material";
import useFormStore from "@/app/store";

// EditEmployeePage component
const EditEmployeePage = ({ params }) => {
  const id = params;
  const router = useRouter();

  // Get employees from store
  const employees = useFormStore((state) => state.employees);

  useEffect(() => {
    const searchParams = new URLSearchParams(router.asPath?.split(/\?/)[1]);
    const employeeId = searchParams.get("employeeId");

    if (employeeId) {
      const selectedEmployee = employees.find(
        (employee) => employee.id === parseInt(employeeId)
      );

      setEmployee({
        name: selectedEmployee?.employee_name || "",
        salary: selectedEmployee?.employee_salary || "",
        age: selectedEmployee?.employee_age || "",
        profileImage: selectedEmployee?.profile_image || "",
      });
    }
  }, [router.asPath, employees]);

  const [employee, setEmployee] = useState({
    name: "",
    salary: "",
    age: "",
    profileImage: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Input validation
    if (!employee.name || !employee.salary || !employee.age) {
      console.error("Please fill out all required fields");
      return;
    }

    try {
      // Make API call to update employee data
      const response = await axios.put(
        `https://dummy.restapiexample.com/api/v1/update/${id}`,
        employee
      );

      console.log("Success:", response.data);
      router.push(`/view-employee`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <MainLayout>
      <Container component="main" maxWidth="md">
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center", 
            marginTop: "50px",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", marginBottom: 4 }}
          >
            Edit Employee
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <TextField
              label="Name"
              name="name"
              value={employee.name}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />

            <TextField
              label="Salary"
              name="salary"
              value={employee.salary}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />

            <TextField
              label="Age"
              name="age"
              value={employee.age}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />

            <TextField
              label="Profile Image"
              name="profileImage"
              value={employee.profileImage}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />

            <Box mt={4}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ fontWeight: "bold" }}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </MainLayout>
  );
};

export default EditEmployeePage;
