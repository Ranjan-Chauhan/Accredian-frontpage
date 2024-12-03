"use client"
import React, { useState } from 'react';
import Modal from '@/app/Screens/modals/page';
import Image from 'next/image';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="flex w-full items-center justify-center h-full p-5">
      <div className="bg-white w-1/2 h-full p-10 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-2"> Let&apos;s Learn </h1>
        <h1 className="text-4xl font-bold mb-4">&amp; Earn</h1>
        <p className="text-lg font-medium">Get a chance to win </p>
        <p className="text-lg mb-8 font-medium">upto <span className="text-blue-800 text-lg font-bold">Rs. 15,000</span></p>
        <button
          className="bg-blue-500 hover:bg-blue-800 text-white py-2 px-4 rounded-lg"
          onClick={handleOpenModal}
        >
          Refer Now
        </button>
      </div>
      <div className="w-1/2">
        <Image
          src="/reffer.avif"
          width={500}
          height={500}
          className="w-full rounded-lg"
          alt="Picture of the author"
        />
      </div>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
};

export default App;
