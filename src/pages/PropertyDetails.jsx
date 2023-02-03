import React from "react";

// import data
import { housesData } from "../data";

// import use params
import { useParams } from "react-router-dom";

// import icons
import { BiBed, BiBath, BiArea } from "react-icons/bi";

// import link
import { Link } from "react-router-dom";

const PropertyDetails = () => {
  // get the house id
  const { id } = useParams();

  // get the house based on id
  const activeHouse = housesData.find((item) => item.id === parseInt(id));

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{activeHouse.name}</h2>
            <h3 className="text-lg mb-4">{activeHouse.address}</h3>
          </div>

          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-green-500 text-white px-3 rounded-full">
              {activeHouse.type}
            </div>
            <div className="bg-violet-500 text-white px-3 rounded-full">
              {activeHouse.country}
            </div>
          </div>

          <div className="text-3xl font-semibold text-violet-600">
            $ {activeHouse.price}
          </div>
        </div>

        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img src={activeHouse.imageLg} alt="house" />
            </div>
            <div className="flex gap-x-6 text-violet-700 mb-6">
              <div className="flex gap-x-2 items-center">
                <BiBed className="text-2xl" />
                <div>{activeHouse.bedrooms}</div>
              </div>

              <div className="flex gap-x-2 items-center">
                <BiBath className="text-2xl" />
                <div>{activeHouse.bathrooms}</div>
              </div>

              <div className="flex gap-x-2 items-center">
                <BiArea className="text-2xl" />
                <div>{activeHouse.surface}</div>
              </div>
            </div>

            <div>{activeHouse.description}</div>
          </div>

          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
            <div className="flex  items-center gap-x-5 mb-8">
              <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                <img src={activeHouse.agent.image} alt="agent" />
              </div>
              <div>
                <div className="font-bold text-lg">
                  {activeHouse.agent.name}
                </div>
                <Link to="/" className="text-violet-700 text-sm">
                  View Listings
                </Link>
              </div>
            </div>

            {/* form  */}
            <form className="flex flex-col gap-y-4">
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Name*"
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Email*"
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Phone*"
              />
              <textarea
                className="border border-gray-300 w-full focus:border-violet-700 outline-none resize-none rounded p-4 h-36 text-sm text-gray-400"
                placeholder="Message*"
                defaultValue="Hello, I am interested in [Modern appartment]"
              ></textarea>
              <div className="flex items-center gap-x-2">
                <button className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition">
                  Send message
                </button>
                <button className="border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 rounded  p-4 text-sm w-full transition">
                  Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
