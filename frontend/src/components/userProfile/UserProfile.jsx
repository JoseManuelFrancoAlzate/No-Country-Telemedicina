"use client";

import Image from "next/image";
import profilePic from "/public/Elliot.svg"; // Ajusta el path a tu imagen
import doctorPic from "/public/Andrea.svg";
import { useParams } from "next/navigation";
import { getUserByDni, getUserById, getDoctorById } from "@/libs/react-query/query/UserQuery";
import { useLogin } from "@/libs/react-query/query-mutation/AuthMutation";

const UserProfile = () => {
  let { id } = useParams();
  const { data: resData } = getDoctorById(id);
  console.log(id,"first")

  console.log("Datosssssssssssss", resData);

  return (
    <div>
      <div className="min-h-screen bg-gray-100">
        {/* Header Superior */}
        <header className="bg-gray-900 text-white py-4 px-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-10 w-10 relative">
              <Image
                src="/logo.svg"
                alt="Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <nav className="space-x-6">
              <a href="#" className="hover:underline">
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
            <a href="/updateDataUser">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Ask to edit
            </button>
            </a>
            <div className="h-10 w-10 relative rounded-full overflow-hidden">
              <Image
                src={profilePic}
                layout="fill"
                objectFit="cover"
                alt="Profile picture"
              />
            </div>
          </div>
        </header>

        {/* Contenido Principal */}
        <div className="bg-white shadow rounded-lg p-6 max-w-screen-lg mx-auto mt-8">
          <header className="flex items-center justify-between border-b pb-4 mb-6">
            <div className="flex items-center">
              <div className="h-20 w-20 relative rounded-full overflow-hidden border-4 border-white">
                <Image
                  src={profilePic}
                  layout="fill"
                  objectFit="cover"
                  alt="Profile picture"
                />
              </div>
              <div className="ml-4">
                <h1 className="text-3xl font-bold text-gray-800">
                  My Dashboard, Eliakim
                </h1>
                <h2 className="text-xl text-gray-600">Patient Profile</h2>
              </div>
            </div>
          </header>

          <main className="grid grid-cols-2 gap-6">
            <section className="bg-green-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-bold text-gray-800">
                Login Information
              </h2>
              <p className="mt-2">
                Your Email:{" "}
                <span className="text-gray-600">
                  Eliakim.flores.Gamo@gmail.com
                </span>
              </p>
              <p className="mt-2">
                Your Phone Number:{" "}
                <span className="text-gray-600">5563236019</span>
              </p>
            </section>

            <section className="bg-green-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-bold text-gray-800">
                Personal Information
              </h2>
              <p className="mt-2">
                Your Name:{" "}
                <span className="text-gray-600">Eliakim Floress</span>
              </p>
              <p className="mt-2">
                Your Gender: <span className="text-gray-600">Male</span>
              </p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                View All
              </button>
            </section>

            <section className="col-span-2 bg-blue-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-bold text-gray-800">Vital signs</h2>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="flex flex-col items-center">
                  <p className="text-2xl text-gray-800">Body Temperature</p>
                  <p className="text-3xl text-blue-600">36.6°C</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-2xl text-gray-800">Heart rate</p>
                  <p className="text-3xl text-blue-600">80 BPM</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-2xl text-gray-800">Blood pressure</p>
                  <p className="text-3xl text-blue-600">120/80 mmHg</p>
                </div>
              </div>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                View All
              </button>
            </section>

            <section className="bg-pink-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-bold text-gray-800">Notes</h2>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="bg-white p-2 rounded shadow">
                  <p className="text-center text-gray-800">Note 1</p>
                </div>
                <div className="bg-white p-2 rounded shadow">
                  <p className="text-center text-gray-800">Note 2</p>
                </div>
                <div className="bg-white p-2 rounded shadow">
                  <p className="text-center text-gray-800">Note 3</p>
                </div>
              </div>
            </section>

            <section className="bg-orange-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-bold text-gray-800">Doctor(s)</h2>
              <div className="flex items-center mt-4">
                <div className="h-16 w-16 relative rounded-full overflow-hidden border-4 border-white">
                  <Image
                    src={doctorPic}
                    layout="fill"
                    objectFit="cover"
                    alt="Doctor picture"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-gray-800">Meredith Grey</p>
                  <p className="text-gray-600">General Medic</p>
                  <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                    View All
                  </button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

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

//Necesito la informacion de quien se logeo y enviarla a la ruta que me dara la informacion de tal usuario.
//para que asi esta ruta me de aquella informacion y asi poder implementarla
