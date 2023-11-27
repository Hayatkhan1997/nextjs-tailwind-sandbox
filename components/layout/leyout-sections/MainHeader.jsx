// Import React correctly
import React from "react";
import Link from "next/link";

const MainHeader = () => {
  return (
    <div
      className="bg-white flex justify-between items-center px-4 h-12 mb-4"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000, // Adjust the zIndex as needed
      }}
    >
      <Link href="/add-employee">
        <span>
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
            Employee Management System
          </h1>
        </span>
      </Link>

      <div className="flex justify-center items-center gap-3">
        <nav>
          <ul className="flex flex-row gap-4">
            <li>
              <Link href="/add-employee">
                <span
                  className={`btn ${"/add-employee" ? " text-black" : ""}`}
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    boxShadow: "/add-employee"
                      ? "0 2px 4px rgba(0, 0, 0, 0.1)"
                      : "",
                  }}
                >
                  Add Employee
                </span>
              </Link>
            </li>
            <li>
              <Link href="/edit-employee">
                <span
                  className={`btn ${"/edit-employee" ? " text-black" : ""}`}
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    boxShadow: "/edit-employee"
                      ? "0 2px 4px rgba(0, 0, 0, 0.1)"
                      : "",
                  }}
                ></span>
              </Link>
            </li>
            <li>
              <Link href="/view-employee">
                <span
                  className={`btn ${"/view-employee" ? " text-black" : ""}`}
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    boxShadow: "/view-employee"
                      ? "0 2px 4px rgba(0, 0, 0, 0.1)"
                      : "",
                  }}
                >
                  View Employee
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MainHeader;
