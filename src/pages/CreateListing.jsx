import { useState } from "react";

export default function CreateListing() {
  const [formData, setFormData] = useState({
    address: "",
    bedrooms: 1,
    bathrooms: 1,
    description: "",
    discountedPrice: 0,
    furnished: false,
    name: "",
    offer: false,
    parking: false,
    regularPrice: 0,
    type: "rent",
  });
  const {
    address,
    bathrooms,
    bedrooms,
    description,
    discountedPrice,
    furnished,
    name,
    offer,
    parking,
    regularPrice,
    type,
  } = formData;

  function onChange() {}

  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">CreateListing</h1>
      <form>
        <p className="text-lg mt-6 font-semibold">Sell / Rent</p>
        <div className="flex">
          <button
            className={`w-full mr-3 px-7 py-3 font-medium uppercase shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg rounded transition duration-150 ease-in-out ${
              type === "rent"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
          >
            sell
          </button>
          <button
            className={`w-full ml-3 px-7 py-3 font-medium uppercase shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg rounded transition duration-150 ease-in-out ${
              type === "sale"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
          >
            rent
          </button>
        </div>
        <p className="mt-6 text-lg font-semibold">Name</p>
        <input
          type="text"
          value={name}
          id="name"
          onChange={onChange}
          placeholder="Property name"
          maxLength="32"
          minLength="10"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <div className="flex space-x-6 justify-start mb-6">
          <div>
            {" "}
            <p className="text-lg font-semibold">Beds</p>
            <input
              type="number"
              value={bedrooms}
              id="bedrooms"
              onChange={onChange}
              min="0"
              max="50"
              required
              className="w-full px-4 py-2 text-xl text-center text-gray-700 bg-white border border-gray-300 transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600"
            />
          </div>
          <div>
            {" "}
            <p className="text-lg font-semibold">Baths</p>
            <input
              type="number"
              value={bathrooms}
              id="bathrooms"
              onChange={onChange}
              min="0"
              max="50"
              required
              className="w-full px-4 py-2 text-xl text-center text-gray-700 bg-white border border-gray-300 transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600"
            />
          </div>
        </div>
        <p className="text-lg mt-6 font-semibold">Furnished</p>
        <div className="flex">
          <button
            className={`w-full mr-3 px-7 py-3 font-medium uppercase shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg rounded transition duration-150 ease-in-out ${
              !furnished ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            type="button"
            id="furnsihed"
            value={true}
            onClick={onChange}
          >
            yes
          </button>
          <button
            className={`w-full ml-3 px-7 py-3 font-medium uppercase shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg rounded transition duration-150 ease-in-out ${
              furnished ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            type="button"
            id="furnsihed"
            value={false}
            onClick={onChange}
          >
            No
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Parking spot</p>
        <div className="flex">
          <button
            className={`w-full mr-3 px-7 py-3 font-medium uppercase shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg rounded transition duration-150 ease-in-out ${
              !parking ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            type="button"
            id="parking"
            value={true}
            onClick={onChange}
          >
            yes
          </button>
          <button
            className={`w-full ml-3 px-7 py-3 font-medium uppercase shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg rounded transition duration-150 ease-in-out ${
              parking ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            type="button"
            id="parking"
            value={false}
            onClick={onChange}
          >
            no
          </button>
        </div>
        <p className="mt-6 text-lg font-semibold">Address</p>
        <textarea
          type="text"
          value={address}
          id="address"
          onChange={onChange}
          placeholder="Address"
          rows="4"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <p className="text-lg font-semibold">Description</p>
        <textarea
          type="text"
          value={description}
          id="description"
          onChange={onChange}
          placeholder="Description"
          rows="4"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <p className="text-lg font-semibold">Offer</p>
        <div className="flex mb-6">
          <button
            className={`w-full mr-3 px-7 py-3 font-medium uppercase shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg rounded transition duration-150 ease-in-out ${
              !offer ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            type="button"
            id="offer"
            value={true}
            onClick={onChange}
          >
            yes
          </button>
          <button
            className={`w-full ml-3 px-7 py-3 font-medium uppercase shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg rounded transition duration-150 ease-in-out ${
              offer ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            type="button"
            id="offer"
            value={false}
            onClick={onChange}
          >
            No
          </button>
        </div>

        <div className="flex items-center mb-6">
          <div>
            {" "}
            <p className="text-lg font-semibold">Regular Price</p>
            <div className="flex w-full justify-center items-center space-x-6">
              <input
                type="number"
                value={regularPrice}
                id="regularPrice"
                onChange={onChange}
                min="1"
                max="500_000_000"
                required
                className="w-full px-4 py-2 text-xl text-center text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600"
              />

              {type === "rent" && (
                <div className="">
                  <p className="text-md whitespace-nowrap">$ /month</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {offer && (
          <div className="flex items-center mb-6">
            <div>
              {" "}
              <p className="text-lg font-semibold">Discounted Price</p>
              <div className="flex w-full justify-center items-center space-x-6">
                <input
                  type="number"
                  value={discountedPrice}
                  id="discountedPrice"
                  onChange={onChange}
                  min="1"
                  max="500_000_000"
                  required={offer}
                  className="w-full px-4 py-2 text-xl text-center text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600"
                />

                {type === "rent" && (
                  <div className="">
                    <p className="text-md whitespace-nowrap">$ /month</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="mb-6">
          <p className="text-lg font-semibold">Images</p>
          <p className="text-gray-600">
            The first image will be the cover (max 6)
          </p>
          <input
            type="file"
            id="images"
            onChange={onChange}
            accept=".jpg,.png,.jpeg"
            multiple
            required
            className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 focus:bg-white focus:border-slate-600 rounded transition duration-150 ease-in-out"
          />
        </div>
        <button
          type="submit"
          className="w-full mb-6 px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:bg-blue-700 active:bg-blue-800 active:shadow-lg transisition duration-150 ease-in-out"
        >
          create listing
        </button>
      </form>
    </main>
  );
}
