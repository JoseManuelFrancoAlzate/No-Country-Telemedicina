"use client"
import { useState } from "react";
import { putUpdateUser} from '@/libs/react-query/query/UpdateQuery';

 
const UpdateDataUser = ()=>{
    const { mutateAsync: updateData } = putUpdateUser();
    const [data, setData] = useState({
        id: 1,
        name: "hugo",
        lastName: "zapata",
        email: "julia12@gmail.com",
        identificationNumber: "114403151",
        birthDate: "1990-03-22", 
        profilePicture:"https://i.pinimg.com/236x/cf/55/50/cf555078fd5ff74730b84fd9b20e8e78.jpg",
        genre: "MALE",
        countryId: 1,
        identificationType: 1
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
  
    return(
        <div class="bg-gray-100 flex items-center justify-center min-h-screen">
          <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 class="text-3xl font-bold mb-6 text-center">Editar Datos del Usuario</h2>
            <form onSubmit={handleSubmit}>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700" for="id">ID</label>
                <input
                  type="number"
                  id="id"
                  name="id"
                  value={data.id}
                  onChange={handleChange}
                  class="mt-1 p-2 border border-gray-300 rounded w-full"
                  readonly
                />
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700" for="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={data.name}
                  onChange={handleChange}

                  class="mt-1 p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700" for="lastName">Apellido</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={data.lastName}
                  onChange={handleChange}

                  class="mt-1 p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700" for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}

                  class="mt-1 p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700" for="identificationNumber">Número de Identificación</label>
                <input
                  type="text"
                  id="identificationNumber"
                  name="identificationNumber"
                  value={data.identificationNumber}
                  onChange={handleChange}

                  class="mt-1 p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700" for="birthDate">Fecha de Nacimiento</label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  value="1990-03-22"
                  class="mt-1 p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700" for="profilePicture">Foto de Perfil</label>
                <input
                  type="text"
                  id="profilePicture"
                  name="profilePicture"
                  value={data.profilePicture}
                  onChange={handleChange}

                  class="mt-1 p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700" for="genre">Género</label>
                <select
                  id="genre"
                  name="genre"
                  class="mt-1 p-2 border border-gray-300 rounded w-full"
                >
                  <option value="MALE" onChange={handleChange} selected>Masculino</option>
                  <option value="FEMALE">Femenino</option>
                  <option value="OTHER">Otro</option>
                </select>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700" for="countryId">ID de País</label>
                <input
                  type="number"
                  id="countryId"
                  name="countryId"
                  value={data.countryId}
                  onChange={handleChange}
                  class="mt-1 p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <div class="mb-6">
                <label class="block text-sm font-medium text-gray-700" for="identificationType">Tipo de Identificación</label>
                <input
                  type="number"
                  id="identificationType"
                  name="identificationType"
                  value={data.identificationType}
                  onChange={handleChange}
                  class="mt-1 p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200">
                Enviar
              </button>
            </form>
          </div>
        </div>
        
        
    )
}


export default UpdateDataUser