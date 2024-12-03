"use client"
import Head from 'next/head';
import Modal from '@/app/Screens/modals/page';
import React, { useState } from 'react';

export default function ReferralBenefitsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Sample data for referral benefits
  const referralBenefits = [
    { id: 1, name: 'Referral Bonus', description: 'Get $10 for each friend you refer.', terms: 'Terms apply.' },
    { id: 2, name: 'Discount on Next Purchase', description: 'Receive a 20% discount on your next purchase.', terms: 'Terms apply.' },
    { id: 3, name: 'Free Product', description: 'Get a free product on your 5th referral.', terms: 'Terms apply.' },
    { id: 4, name: 'Exclusive Access', description: 'Gain exclusive access to new features.', terms: 'Terms apply.' },
    // Add more referral benefits as needed
  ];

  return (
    <div className="h-max p-2 ml-10 mr-10 mt-10">
      <Head>
        <title>Referral Benefits</title>
      </Head>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Referral Benefits</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg ">
            <thead>
              <tr>
                <th className="py-2 px-4  bg-blue-400 text-white text-start border-r-2 border-blue-300">Benefit Name</th>
                <th className="py-2 px-4 bg-blue-400 text-white text-start border-r-2 border-blue-300">Description</th>
                <th className="py-2 px-4 bg-blue-400 text-white text-start border-r-2 border-blue-300">Terms</th>
              </tr>
            </thead>
            <tbody>
              {referralBenefits.map((benefit) => (
                <tr key={benefit.id} className="border-b">
                  <td className="py-2 px-4 border-r-2 border-blue-300">{benefit.name}</td>
                  <td className="py-2 px-4 border-r-2 border-blue-300">{benefit.description}</td>
                  <td className="py-2 px-4 ">{benefit.terms}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="bg-blue-500 hover:bg-blue-800 text-white py-2 px-4 rounded-lg"
            onClick={handleOpenModal}
          >
            Refer Now
          </button>
        </div>
      </div>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
}
