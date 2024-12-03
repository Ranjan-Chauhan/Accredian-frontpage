

'use client'; // Add this if needed, make sure it's before any imports

import Modal from '@/app/Screens/modals/page';
import React, { useState } from 'react';

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="relative min-h-screen bg-blue-50 flex flex-col justify-center items-center mb-2">
      <img
        src="/reffer4.jpg"
        alt="Random"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full rounded-md mt-2 object-cover opacity-75"
      />
      <div className="absolute bottom-0 left-0 w-full flex justify-center p-4">
        <button
          onClick={handleOpenModal}
          className="z-10 px-6 py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Refer Now
        </button>
      </div>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
};

export default Page; // Corrected to start with uppercase "P"
