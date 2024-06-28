import React, { useEffect, useState } from 'react';
import Profile from "../img/profile.jpg";
import { useNavigate } from 'react-router-dom';

export const About = () => {

  const [dydata, setDydata] =useState({});

  const navigate = useNavigate();

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      if (!res.ok) {
        // If the response status is not ok, throw an error
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      console.log(data);
      // You can now use the `data` as needed
      setDydata(data);
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);
  // havnt defined the function in useeffect as we cant use async await i useeffect. 

  return (
    <div className="p-16">

      <form method="GET">

        <div className="border-2 border-grey-300 rounded-xl m-auto flex w-[60%]">


          <div className="b w-[30%] p-3">

            <img src={Profile} className="w-[200px] h-[220px] pl-6" alt="profile" />
            <div className="mt-3">
              <p> <a href="https://tailwindcss.com/docs/text-decoration-style" className="text-black font-semibold pl-6 no-underline">Youtuber</a> </p>
              <p> <a href="https://tailwindcss.com/docs/text-decoration-style" className="text-black font-semibold pl-6 no-underline">Youtuber</a> </p>
              <p> <a href="https://tailwindcss.com/docs/text-decoration-style" className="text-black font-semibold pl-6 no-underline">Youtuber</a> </p>
              <p> <a href="https://tailwindcss.com/docs/text-decoration-style" className="text-black font-semibold pl-6 no-underline">Youtuber</a> </p>
            </div>


          </div>


          <div className=" w-[70%] p-3 relative">

            <p className="font-bold text-[25px] m-0"> {dydata.name} </p>
            <p className="font-medium text-[15px]  text-blue-500"> {dydata.work} </p>
            <bitton type="submit" className="bg-gray-500 pt-2 pb-2 pl-4 pr-4 absolute top-0  right-10  text-white rounded-lg mt-3">Edit Profile</bitton>


            <div className="pt-4">
              <p className="font-bold text-[22px] mt-12">About</p>
              <div className="flex ">

                <div className="w-[40%]">
                  <p className="font-bold">User ID :</p>
                  <p className="font-bold">Name :</p>
                  <p className="font-bold">Email: </p>
                  <p className="font-bold">Phone :</p>
                  <p className="font-bold">Profession :</p>
                </div>

                <div className="w-[60%]">
                  <p className="font-medium text-blue-500"> {dydata._id} </p>
                  <p className="font-medium text-blue-500"> {dydata.name} </p>
                  <p className="font-medium text-blue-500"> { dydata.email } </p>
                  <p className="font-medium text-blue-500"> { dydata.phone } </p>
                  <p className="font-medium text-blue-500"> { dydata.work } </p>
                </div>

              </div>
            </div>

          </div>



        </div>

      </form>

    </div>
  )
}
