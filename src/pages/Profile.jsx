import { useState } from "react";

export default function Profile() {
  const [formData, setFormData] = useState({
    name: "Laurie",
    email: "laurieroy.dev@gmail.com",
  });

  const { name, email } = formData;

  return (
    <>
      <section className="max-w-6xl mx-auto flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            {/* Name input */}
            <input
              disbled
              type="text"
              name="name"
              id="name"
              value={name}
              className="w-full px-4 py-2 text-xl mb-6 text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />
            {/* Email input */}
            <input
              disbled
              type="email"
              name="email"
              id="email"
              value={email}
              className="w-full px-4 py-2 text-xl mb-6 text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="flex items-center mb-6">
                Do you want to change your name?
                <span className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1 cursor-pointer">
                  Edit
                </span>
              </p>
              <p className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer">
                Sign out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
