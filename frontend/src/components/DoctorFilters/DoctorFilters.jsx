'use client'

import Link from "next/link";
import { getAllDoctors } from "@/libs/react-query/query/DoctorsQuery"
import { getAllSpecialities} from "@/libs/react-query/query/SpecialitiesQuery";
const DoctorFilters = ()=>{

  const {data: doctors, error, isLoading} = getAllDoctors();
  const {data: specialities, error: errorS, isLoading: isLoadingS} = getAllSpecialities()

  if(isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading doctors</div>;
  
  if(isLoadingS) return <div>Loading...</div>;
  if (errorS) return <div>Error loading specialities</div>;
  console.log(specialities)
  console.log(doctors)



return(
    <div className="flex items-center justify-center h-screen bg-gray-100 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
         {doctors.map(doctor => (
          <Link href={`doctorsProfile/${doctor.email}`}> 
        <div key={doctor.id} className="border-2 border-pink-950 p-8 w-80 flex flex-col items-center rounded-lg bg-white shadow-lg">
          <img 
            src='https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg'
            className="rounded-full h-32 w-32 object-cover mb-4"
            alt={doctor.email}
          />
          <div className="text-center">
           {doctor.name ?  <p className="text-lg font-bold mb-1">{doctor.name}</p> : <p className="text-lg font-bold mb-1">Null Name</p>}
            <p className="text-gray-600">Terapeuta</p>
            <p>{doctor.email}</p>
          </div>
        </div>
        </Link>
      ))}
    </div>
  </div>
  
)
}


export default DoctorFilters


//src="https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg" 
