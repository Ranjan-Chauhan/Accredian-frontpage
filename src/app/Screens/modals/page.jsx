"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Modal = ({ onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async(data) => {
    onClose();
    console.log(data);
    console.log(data.refereeName);
    const response = await axios.post('http://localhost:3500/refferAccount', data);
    console.log('Data successfully submitted:', response);
    
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Referral Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Referrer Name</label>
            <input
              type="text"
              {...register('referrerName', { required: 'Referrer Name is required' })}
              className={`w-full px-3 py-2 border rounded-lg ${errors.referrerName ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.referrerName && <p className="text-red-500 text-sm mt-1">{errors.referrerName.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Referrer Email</label>
            <input
              type="email"
              {...register('referrerEmail', { required: 'Referrer Email is required', pattern: { value: /^\S+@\S+$/, message: 'Invalid email address' } })}
              className={`w-full px-3 py-2 border rounded-lg ${errors.referrerEmail ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.referrerEmail && <p className="text-red-500 text-sm mt-1">{errors.referrerEmail.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Referee Name</label>
            <input
              type="text"
              {...register('refereeName', { required: 'Referee Name is required' })}
              className={`w-full px-3 py-2 border rounded-lg ${errors.refereeName ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.refereeName && <p className="text-red-500 text-sm mt-1">{errors.refereeName.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Referee Email</label>
            <input
              type="email"
              {...register('refereeEmail', { required: 'Referee Email is required', pattern: { value: /^\S+@\S+$/, message: 'Invalid email address' } })}
              className={`w-full px-3 py-2 border rounded-lg ${errors.refereeEmail ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.refereeEmail && <p className="text-red-500 text-sm mt-1">{errors.refereeEmail.message}</p>}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
          >
            Submit
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded-lg w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
