import { useState } from 'react';

const PostHouseForm = ({ addHouse }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [image, setImage] = useState(null);


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Post Your House</h2>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter property name"
            className="w-full px-3 py-2 border border-black rounded-lg outline-none placeholder-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Enter property description"
            className="w-full px-3 py-2 border border-black rounded-lg outline-none placeholder-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            placeholder="Enter property address"
            className="w-full px-3 py-2 border border-black rounded-lg outline-none placeholder-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">State:</label>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
            className="w-full px-3 py-2 border border-black rounded-lg outline-none placeholder-gray-500"
          >
            <option value="" disabled>Select state</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Karnataka">Karnataka</option>
            {/* Add more states */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">City:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            placeholder="Enter city"
            className="w-full px-3 py-2 border border-black rounded-lg outline-none placeholder-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Bedrooms:</label>
          <input
            type="number"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            min="1"
            required
            placeholder="Number of bedrooms"
            className="w-full px-3 py-2 border border-black rounded-lg outline-none placeholder-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Bathrooms:</label>
          <input
            type="number"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
            min="1"
            required
            placeholder="Number of bathrooms"
            className="w-full px-3 py-2 border border-black rounded-lg outline-none placeholder-gray-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-gray-700">Image:</label>
          <input
            type="file"
            onChange={handleImageChange}
            required
            className="w-full px-3 py-2 border border-black rounded-lg outline-none"
          />
        </div>
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
          Post
        </button>
      </form>
    </div>
  );
};

export default PostHouseForm;
