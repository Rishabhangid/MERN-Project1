import React, { useEffect, useState } from 'react'

export const Contact = () => {

  const [cdata, setCdata] = useState({ name: "", email: "", phone: "", message: "" });

  const SetData = async () => {
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
      setCdata({ ...cdata, name: data.name, email: data.email, phone: data.phone });

    } catch (error) {
      console.log(error);

    }
  };

  useEffect(() => {
    SetData();
  }, []);


  const handleChange = (e) => {
    setCdata({ ...cdata, [e.target.name]: e.target.value });
  }

  const sendMsg = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = cdata;
    const res = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        message: message

      })
    });

    if (!res.ok) {
      throw new Error('Failed to register');
    }

    const data = await res.json();

    if(!data){
      console.log("message not send.");
    }
    else{
      console.log("message sent.");
      window.alert("Messeage Sent.");
      setCdata({message:""});
    }
  }





  return (
    <div className=" p-10  bg-gray-100">



      <div className=" grid grid-cols-3 w-[70%] m-auto">

        <div className="border-2 border-grey-400  m-2  rounded-xl flex items-center p-2 bg-white">
          <i class="zmdi zmdi-phone  zmdi-hc-3x mdc-text-light-blue text-blue-500"></i>
          <div className="ml-5">
            <p className="font-bold m-0 ">Phone</p>
            <p className="m-0">+91 7073109971</p>
          </div>

        </div>

        <div className="border-2 border-grey-400 m-2 p-3  rounded-xl  flex items-center bg-white">
          <i class="zmdi zmdi-email  zmdi-hc-3x mdc-text-light-blue text-blue-500"></i>
          <div className="ml-5">
            <p className="m-0 font-bold">Email</p>
            <p className="m-0">riishabhjangid@gmail.com</p>
          </div>
        </div>

        <div className="border-2 border-grey-400 m-2 p-3  rounded-xl  flex items-center bg-white">
          <i class="zmdi zmdi-account zmdi-hc-3x mdc-text-light-blue text-blue-500"></i>
          <div className="ml-5">
            <p className="m-0 font-bold">Address</p>
            <p className="m-0">Nathdwara, Rajasthan</p>
          </div>
        </div>

      </div>

      <form method="POST">

        <div className="border-2 border-grey-400 rounded-xl  w-[70%] m-auto bg-white">

          <p className="font-bold text-[30px] p-3 text-center">Get in Touch</p>
          <div className="grid grid-cols-3 p-2">
            <input type="text" name="name" placeholder="Your Name" value={cdata.name} className="font-medium border-2 p-2 ml-2 rounded-md m-4" onChange={handleChange} />
            <input type="text" name="email" placeholder="Your Email" value={cdata.email} className="font-medium border-2 p-2 ml-2 rounded-md m-4" onChange={handleChange} />
            <input type="text" name="phone" placeholder="Your Mobile Number" value={cdata.phone} className="font-medium border-2 p-2 ml-2 rounded-md m-4" onChange={handleChange} />
          </div>

          <div className="p-4 flex flex-col justify-center items-center">
            <textarea rows="8" cols="50" placeholder="Message" name="message" className="rounded-md border-2 p-1 ml-2 w-[950px] resize-y" onChange={handleChange} ></textarea>
            <button type="submit" className="bg-blue-500 pt-2 pb-2 pl-4 pr-4 w-[80%] m-3 text-white rounded-lg mt-3" onClick={sendMsg}>Send Message</button>
          </div>

        </div>

      </form>

    </div>
  )
}
