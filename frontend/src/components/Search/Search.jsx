"use client";


import { getAllDoctors } from "@/libs/react-query/query/DoctorsQuery";

import {DoctorCard} from "../DoctorCard/DoctorCard"

const Doctors = () => {
  console.log("doctors search")
  const { data: resData } = getAllDoctors();

  console.log("Data", resData);
  return (
    <div>
      <h1>Search</h1>
      <DoctorCard/>
    </div>
  );
};

export default Doctors;

// {error && <p>Error: {error}</p>}
// {user ? (
//   <div>
//     <p>Name: {user.name}</p>
//     <p>Email: {user.email}</p>
//     {/* Render more user details as needed */}
//   </div>
// ) : (
//   <p>Loading...</p>
// )}
