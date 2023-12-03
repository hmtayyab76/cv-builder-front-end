import React, { useState } from "react";

const CVT0 = () => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    discription: "",
    email: "",
    phone: "",
    location: "",
    linkdin: "",
    skill: "",

    objective: "",
    experience: "",
    education: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center px-10 h-screen mt-5 bg-[#313b47]">
      <div className="w-1/2 p-4   overflow-y-auto">
        <form className="max-w-md">
          <h1 className="text-3xl font-bold mb-4">CV Template</h1>
          <div className="mb-4">
            <label className=" text-white block mb-2 ">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-400 px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className=" text-white block mb-2 ">Position:</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="border border-gray-400 px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className=" text-white block mb-2">Discription:</label>
            <textarea
              name="discription"
              value={formData.discription}
              onChange={handleChange}
              className="border border-gray-400 px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className=" text-white block mb-2">Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border border-gray-400 px-2 py-1 w-full"
            />
          </div>

          <div className="mb-4">
            <label className=" text-white block mb-2">Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-400 px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className=" text-white block mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-400 px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className=" text-white block mb-2">Objective:</label>
            <textarea
              name="objective"
              value={formData.objective}
              onChange={handleChange}
              className="border border-gray-400 px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className=" text-white block mb-2">Experience:</label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="border border-gray-400 px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className=" text-white block mb-2">Education:</label>
            <textarea
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="border border-gray-400 px-2 py-1 w-full"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2">
            Save
          </button>
        </form>
      </div>
      <div className="w-1/2 bg-white shadow-lg  p-4 my-2 rounded-lg overflow-scroll">
        <h2 className="text-xl font-bold mb-2">Live Preview</h2>
        <div className="border border-gray-400 py-2">
          {formData.name && (
            <h1 className="font-medium text-2xl px-5">{formData.name}</h1>
          )}{" "}
          {formData.name && (
            <h1 className="font-medium text-[#529ba1] px-5 text-base">
              {formData.position}
            </h1>
          )}{" "}
          {formData.discription && (
            <div className="  bg-[#313b47] px-5 py-4 rounded-lg mx-1 mt-4">
              <p className=" text-white font-normal text-sm">
                {formData.discription}
              </p>
            </div>
          )}
          {formData.email ||
            formData.phone ||
            (formData.linkdin && <div> </div>)}
          {formData.phone && <p>Phone: {formData.phone}</p>}
          {formData.email && <p>Email: {formData.email}</p>}
          {formData.objective && (
            <div>
              <h3 className="font-bold">Objective:</h3>
              <p>{formData.objective}</p>
            </div>
          )}
          {formData.experience && (
            <div>
              <h3 className="font-bold">Experience:</h3>
              <p>{formData.experience}</p>
            </div>
          )}
          {formData.education && (
            <div>
              <h3 className="font-bold">Education:</h3>
              <p>{formData.education}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CVT0;
