'use client';
import React, { useState } from 'react';

interface AddMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddMember: (newMember: unknown) => void; // Define the type of newMember
}

const AddMemberModal: React.FC<AddMemberModalProps> = ({ isOpen, onClose, onAddMember }) => {
  const [name, setName] = useState('');
  const [parentKey, setParentKey] = useState(0); // Default to no parent (root level)
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newMember = { key: Date.now(), name, parent: parentKey, source: imageUrl };
    onAddMember(newMember);
    onClose(); // Close the modal after adding
    // Reset form fields
    setName('');
    setParentKey(0);
    setImageUrl('');
  };

  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 w-96">
        <h2 className="text-xl font-bold mb-4">Add Family Member</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
            <input 
              type="text" 
              id="name" 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="parent" className="block text-gray-700 font-bold mb-2">Parent Key (optional):</label>
            <input 
              type="number" 
              id="parent" 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              value={parentKey} 
              onChange={(e) => setParentKey(parseInt(e.target.value, 10) || 0)} 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="imageUrl" className="block text-gray-700 font-bold mb-2">Image URL:</label>
            <input 
              type="text" 
              id="imageUrl" 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              value={imageUrl} 
              onChange={(e) => setImageUrl(e.target.value)} 
            />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 font-bold rounded hover:bg-gray-400 focus:outline-none focus:shadow-outline">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMemberModal;
