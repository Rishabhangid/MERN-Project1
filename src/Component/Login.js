import React, { useContext, useState } from 'react'
import RImage from "../img/signup_image.png";
import { Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Google from "../img/google.png";
import { UserContext } from '../App';



export const Login = () => {

  const {state,dispatch} =useContext(UserContext);

  const navigate = useNavigate();

  const [eemail, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginuser = async (e) => {

    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/login", {

        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
          email: eemail,
          password: password
        })


      });
      if (!res.ok) {
        throw new Error('Failed to register');
      }

      const data = await res.json();

      if (data.status === 400 || !data) {
        window.alert("Invalid Registration.");
        console.log("Failed to Register.");
      } else  if (res.status === 200) {
        dispatch({type:"USER", payload: true})
        window.alert("Login Successful.");
        console.log("Login Done.");
        navigate("/home");
      }
    }catch (error) {
      console.error("Error during registration:", error);
      window.alert("An error occurred. Please try again.");
  }


  }


  return (
    <div className="flex justify-center items-center h-[100vh] bg-gray-100">

      <div className=" w-[60%] grid grid-cols-2 border border-gray-700 rounded-xl bg-white ">

        <div className=" h-[500px] p-5 flex flex-col justify-center items-center">

          <img src={RImage} alt="Registration" className="w-[150px] h-auto" />
          <p className="font-semibold mt-2 text-center">New User ? <span className="text-center text-blue-600"><Nav.Link as={Link} to="/signup">Register Now</Nav.Link></span></p>




        </div>


        <form method="POST" className=" flex flex-col justify-center items-center">
          <div >

            <h1 className="font-bold text-center">Log In</h1>

            <div className="border-b-2 border-grey-900 flex mt-4 ">
              <label htmlFor="name">
                <i class="zmdi zmdi-email zmdi-hc-2x"></i>
              </label>
              <input type="text" name="name" placeholder="Your Email" className="w-[100%] p-1 ml-2" onChange={(e) => setEmail(e.target.value)} value={eemail} />
            </div>

            <div className="border-b-2 border-grey-900 flex mt-3 ">
              <label htmlFor="name">
                <i class="zmdi zmdi-lock zmdi-hc-2x"></i>
              </label>
              <input type="text" name="name" placeholder="Your Password" className="w-[100%] p-1 ml-2" onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>

            <button type="submit" className="bg-blue-500 pt-2 pb-2 pl-4 pr-4 w-[100%]  text-white rounded-lg mt-3" onClick={loginuser}>Login</button>

            <p className="mt-5 font-medium text-center">Or Signin with <span> <img src={Google} className="w-[30px] mt-2 text-center m-auto" alt="google" /> </span> </p>



          </div>
        </form>

      </div>

    </div>
  )
}
