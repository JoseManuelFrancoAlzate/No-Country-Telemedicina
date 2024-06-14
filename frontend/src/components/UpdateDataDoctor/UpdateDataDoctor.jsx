"use client";

import { useState } from "react";
import { putUpdate } from '@/libs/react-query/query/UpdateQuery';

const UpdateDataDoctor = () => {
  const { mutateAsync: updateData } = putUpdate();
  const [data, setData] = useState({
    id: 9,
    email: "pepa123@gmail.com",
    licenceNumber: "1234",
    active: false,
    identification_number: "4321",
    name: "Pepa",
    biography: "Soy la mejor",
    speciality_id: 2
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    try {
      await updateData(data);
      alert("Actualizado");
      // Optionally, you can reset the form or perform other actions here
    } catch (error) {
      alert("Error durante el inicio de sesión");
      console.error("Error durante el inicio de sesión", error);
      // Optionally, handle errors here
    }
  };

  console.log(data)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Editar Datos</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="id">
            ID de especialidad
          </label>
          <input
            type="number"
            name="id"
            id="id"
            value={data.id}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={data.email}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="licenceNumber">
            Número de licencia
          </label>
          <input
            type="text"
            name="licenceNumber"
            id="licenceNumber"
            value={data.licenceNumber}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="identification_number">
            Número de identificación
          </label>
          <input
            type="text"
            name="identification_number"
            id="identification_number"
            value={data.identification_number}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="biography">
            Biografía
          </label>
          <textarea
            name="biography"
            id="biography"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            value={data.biography}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="speciality_id">
            ID de especialidad
          </label>
          <input
            type="number"
            name="speciality_id"
            id="speciality_id"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            value={data.speciality_id}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default UpdateDataDoctor;

/*
		{
    "id": 19,
		"licenceNumber": "12345",
		"identification_number": "10928",
		"name": "perro",
		"last_name": "jjdk",
		"phone_number": 1234567899,
		"email": "perru123@gmail.com",
		"active": false,
		"licence_photo": "https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg",
		"profile_picture": "https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg",
		"genre": "male",
		"birth_date": null,
		"biography": "Soy severo perru doctor",
		"speciality_id": 4
		}*/