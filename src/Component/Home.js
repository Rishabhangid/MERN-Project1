import React, { useEffect, useState } from 'react'

export const Home = () => {

  const [dydata, setDydata] =useState("");

  const GetName = async () => {
    try {
      const res = await fetch("/getdata", {
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
      setDydata(data.name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetName();
  }, []);

  return (
    <div className="w-[100%] h-[100vh] bg-blue-500 flex flex-col justify-center items-center">
        <h1 className="font-extrabold text-[60px]" >WELCOME</h1>
        <p className="font-semibold text-[30px]"> { dydata } </p>
        <p className="font-semibold text-[30px]"> { (dydata)? "Welcome Back." : "We are the MERN Developers." } </p>
    </div>
  )
}
