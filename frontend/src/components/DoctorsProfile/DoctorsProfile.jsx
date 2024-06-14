'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import profilePic from "/public/Elliot.svg"; // Ajusta el path a tu imagen
import doctorPic from "/public/Andrea.svg";
import { getEmailDoctors } from "@/libs/react-query/query/DoctorsQuery";
import {  useParams} from "next/navigation"

const DoctorsProfile = () => {
  const router = useParams()

  console.log(router.email)

    const {data: doctorData, error, isLoading} = getEmailDoctors(router.email)
    if(isLoading) return <div>Loading...</div>
    if(error) return <div>Error loading doctor</div>
    console.log(doctorData)
  const handleContactClick = () => {
    // Aquí puedes implementar la lógica para el contacto con el doctor
    // Por ejemplo, abrir un modal de contacto o redirigir a una página de contacto
    alert("Contactando con el doctor...");
  };


  return (
    <div>
      <div className="min-h-screen bg-gray-100">
        {/* Header Superior */}
        <header className="bg-gray-900 text-white py-4 px-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-10 w-10 relative">
              <Image src="/logo.svg" alt="Logo" layout="fill" objectFit="contain" />
            </div>
            <nav className="space-x-6">
              <a href="/doctorsFilter" className="hover:underline">
                Doctors
              </a>
              <a href="#" className="hover:underline">
                Specialities
              </a>
              <a href="#" className="hover:underline">
                About
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
           <a href="/updateDataDoctor"> <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Ask to edit</button></a>
            <div className="h-10 w-10 relative rounded-full overflow-hidden">
              <Image src={profilePic} layout="fill" objectFit="cover" alt="Profile picture" />
            </div>
          </div>
        </header>

        {/* Contenido Principal */}
        <div className="bg-white shadow rounded-lg p-6 max-w-screen-lg mx-auto mt-8">
          <header className="flex items-center justify-between border-b pb-4 mb-6">
            <div className="flex items-center">
              <div className="h-20 w-20 relative rounded-full overflow-hidden border-4 border-white">
                <Image src={profilePic} layout="fill" objectFit="cover" alt="Profile picture" />
              </div>
              <div className="ml-4">
                <h1 className="text-3xl font-bold text-gray-800">My Dashboard, Eliakim</h1>
                <h2 className="text-xl text-gray-600">Doctor Profile</h2>
              </div>
            </div>
          </header>

          <main className="grid grid-cols-2 gap-6">
            <section className="bg-green-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-bold text-gray-800">Login Information</h2>
              <p className="mt-2">
                Your Email: <span className="text-gray-600">{doctorData.email}</span>
              </p>
              <p className="mt-2">
                Your Phone Number: <span className="text-gray-600">5563236019</span>
              </p>
            </section>

            <section className="bg-green-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-bold text-gray-800">Personal Information</h2>
              <p className="mt-2">
                Your Name: <span className="text-gray-600">{doctorData.name ? doctorData.name : 'Null Name'}</span>
              </p>
              <p className="mt-2">
                Your Gender: <span className="text-gray-600">{doctorData.genre ? doctorData.genre : 'Male'}</span>
              </p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">View All</button>
            </section>

            <section className="col-span-2 bg-pink-100   p-4 rounded-lg shadow">
              <h2 className="text-xl font-bold text-gray-800">Biography</h2>
              <div className="flex flex-col items-center mt-4">
                <p className="text-lg text-gray-800">{doctorData.biography ? doctorData.biography : 'Null Biopgraphy'}</p>
              </div>
            </section>

            <section className="bg-blue-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-bold text-gray-800">Contact Doctor</h2>
              <div className="flex flex-col items-center mt-4">
                <p className="text-lg text-gray-800">If you need assistance, you can contact your doctor:</p>
                <button onClick={handleContactClick} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                  Contact
                </button>
              </div>
            </section>

            <section className="bg-orange-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-bold text-gray-800">Doctor(s)</h2>
              <div className="flex items-center mt-4">
                <div className="h-16 w-16 relative rounded-full overflow-hidden border-4 border-white">
                  <Image src={doctorPic} layout="fill" objectFit="cover" alt="Doctor picture" />
                </div>
                <div className="ml-4">
                  <p className="text-gray-800">Meredith Grey</p>
                  <p className="text-gray-600">General Medic</p>
                  <a href="/doctorsFilter">
                  <button  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">View All</button>
                  </a>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DoctorsProfile;
