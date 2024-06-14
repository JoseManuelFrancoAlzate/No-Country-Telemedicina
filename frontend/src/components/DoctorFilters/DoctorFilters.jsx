'use client'

import Link from "next/link";
import { getAllDoctors } from "@/libs/react-query/query/DoctorsQuery";
import { getAllSpecialities } from "@/libs/react-query/query/SpecialitiesQuery";
import { useState } from "react";

const DoctorFilters = () => {
  const [newDoctors, setNewDoctors] = useState([]); // Cambio: Usa un estado para almacenar los doctores filtrados
  const { data: doctors, error, isLoading } = getAllDoctors();
  const { data: specialities, error: errorS, isLoading: isLoadingS } = getAllSpecialities();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading doctors</div>;

  if (isLoadingS) return <div>Loading...</div>;
  if (errorS) return <div>Error loading specialities</div>;
  // Filtra los doctores según la especialidad seleccionada
  const handlerFilterSpecialities = (e) => {
    e.preventDefault();
    const selectedSpecialityId = e.target.value;

    if (selectedSpecialityId === "All") {
      setNewDoctors(doctors); // Mostrar todos los doctores
    } else {
      const filteredDoctors = doctors.filter((doctor) => doctor.speciality_id === selectedSpecialityId);
      setNewDoctors(filteredDoctors); // Mostrar los doctores de la especialidad seleccionada
    }
  };
  console.log(specialities);
  console.log(doctors);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Listado de Doctores</h1>
        <p className="text-gray-700">Encuentra el doctor adecuado para ti</p>
		<select onChange={handlerFilterSpecialities}>
					<option value="All">All</option>
					{specialities.map((specialitie) => {
						return (
							<option value={specialitie.id} key={specialitie.name}>{specialitie.name}</option>
						)
					})}
				</select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {newDoctors.map(doctor => (
          <Link href={`doctorsProfile/${doctor.id}`} key={doctor.id}>
            <div className="border-2 border-pink-950 p-8 w-80 flex flex-col items-center rounded-lg bg-white shadow-lg">
              <img
                src='https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg'
                className="rounded-full h-32 w-32 object-cover mb-4"
                alt={doctor.email}
              />
              <div className="text-center">
                {doctor.name ? (
                  <p className="text-lg font-bold mb-1">{doctor.name}</p>
                ) : (
                  <p className="text-lg font-bold mb-1">Null Name</p>
                )}
                <p className="text-gray-600">Terapeuta</p>
                <p>{doctor.email}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DoctorFilters;


//src="https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg" 

/*

  const [newDoctors, setNewDoctors] = useState([]); // Cambio: Usa un estado para almacenar los doctores filtrados
  const { data: doctors, error, isLoading } = getAllDoctors();
  const { data: specialities, error: errorS, isLoading: isLoadingS } = getAllSpecialities();

  if (isLoading || isLoadingS) return <div>Loading...</div>;
  if (error || errorS) return <div>Error loading data</div>;

  // Filtra los doctores según la especialidad seleccionada
  const handlerFilterSpecialities = (e) => {
    e.preventDefault();
    const selectedSpecialityId = e.target.value;

    if (selectedSpecialityId === "All") {
      setNewDoctors(doctors); // Mostrar todos los doctores
    } else {
      const filteredDoctors = doctors.filter((doctor) => doctor.speciality_id === selectedSpecialityId);
      setNewDoctors(filteredDoctors); // Mostrar los doctores de la especialidad seleccionada
    }
  };

*/