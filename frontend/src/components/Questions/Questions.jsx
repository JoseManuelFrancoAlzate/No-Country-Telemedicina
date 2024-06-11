"use client"
import { useState } from 'react';

const Modals = ({ onClose, title, content }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mt-4">
          <p className="text-lg">{title}</p>
          <p>{content}</p>
          <div className="mt-4">
            <button onClick={onClose} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Questions = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalId) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const modalsData = [
    {
      id: 1,
      title: 'LAS PREGUNTAS FRECUENTES',
      content: 'Contenido del modal 1',
      bgColor: 'bg-pink-200',
      mt:'mt-40'
    },
    {
      id: 2,
      title: 'LAS PREGUNTAS FRECUENTES 2',
      content: 'Contenido del modal 2',
      bgColor: 'bg-blue-200',
      mt:'mt-10'
    },
    {
      id: 3,
      title: 'LAS PREGUNTAS FRECUENTES 3',
      content: 'Contenido del modal 3',
      bgColor: 'bg-green-200',
      mt: 'my-10'
    },
  ];

  return (
    <div className='mt-32'>
      <center className='mt-10'>
        <div className="relative bg-blue-300  rounded-lg text-center w-3/5">
          <h1 className="relative top-[-25px] font-black text-5xl">Frequent questions</h1>
        </div>
        {modalsData.map((modal) => (
          <div
            key={modal.id}
            onClick={() => openModal(modal.id)}
            className={`relative mt-10 ${modal.mt}  ${modal.bgColor} w-5/6 p-4 rounded-3xl cursor-pointer`}
          >
            <p className="relative font-black text-3xl">{modal.title}</p>
          </div>
        ))}
      </center>

      {activeModal && (
        <Modals
          onClose={closeModal}
          title={modalsData.find((modal) => modal.id === activeModal)?.title}
          content={modalsData.find((modal) => modal.id === activeModal)?.content}
        />
      )}
    </div>
  );
};

export default Questions;

//Modal