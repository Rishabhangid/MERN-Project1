import React, { useState } from 'react'
import RImage from "../img/signup_image.png";
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export const Signup = () => {

    // const history = useHistory();
    const navigate = useNavigate();
    const [user, setUSer] = useState({ name: "", email: "", phone: "", profession: "", password: "", cpassword: "" });

    const handleupdate = (e) => {
        // console.log(e);

        setUSer({ ...user, [e.target.name]: e.target.value });

    }

    const PostData = async (e) => {
        console.log("hy");
        e.preventDefault();

        const { name, email, phone, profession, password, cpassword } = user;

        try {
            const res = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    name: name,
                    email: email,
                    phone: phone,
                    work: profession,
                    password: password,
                    cpassword: cpassword
                })
            });

            if (!res.ok) {
                throw new Error('Failed to register');
            }

            const data = await res.json();

            if (data.status === 422 || !data) {
                window.alert("Invalid Registration.");
                console.log("Failed to Register.");
            } else {
                window.alert("Registration Successful.");
                console.log("Register Done.");
                navigate("/login");
            }
        } catch (error) {
            console.error("Error during registration:", error);
            window.alert("An error occurred. Please try again.");
        }
    }


    return (


        <div className="flex justify-center items-center h-[100vh] bg-gray-100">



            <div className=" w-[60%] grid grid-cols-2 border border-gray-700 rounded-xl bg-white ">

                <form method="POST">

                    <div className=" h-[500px] p-5">

                        <h1 className="font-bold">Sign Up</h1>

                        <div className="border-b-2 border-grey-900 flex mt-4 ">
                            <label htmlFor="name">
                                <i class="zmdi zmdi-account zmdi-hc-2x"></i>
                                {/* Material Design Iconic Font icons */}
                            </label>
                            <input type="text" name="name" placeholder="Your Name" onChange={handleupdate} value={user.name} className=" font-medium w-[100%] p-1 ml-2" />
                        </div>

                        <div className="border-b-2 border-grey-900 flex mt-3 ">
                            <label htmlFor="name">
                                <i class="zmdi zmdi-email zmdi-hc-2x"></i>
                            </label>
                            <input type="text" name="email" placeholder="Your Email" onChange={handleupdate} value={user.email} className="font-medium w-[100%] p-1 ml-2" />
                        </div>

                        <div className="border-b-2 border-grey-900 flex mt-3 ">
                            <label htmlFor="name">
                                <i class="zmdi zmdi-phone zmdi-hc-2x"></i>
                            </label>
                            <input type="text" name="phone" placeholder="Mobile Number" onChange={handleupdate} value={user.phone} className="font-medium w-[100%] p-1 ml-2" />
                        </div>

                        <div className="border-b-2 border-grey-900 flex mt-3 ">
                            <label htmlFor="name">
                                <i class="zmdi zmdi-slideshow zmdi-hc-2x"></i>
                            </label>
                            <input type="text" name="profession" placeholder="Your Profession" onChange={handleupdate} value={user.profession} className="w-[100%] font-medium p-1 ml-2" />
                        </div>

                        <div className="border-b-2 border-grey-900 flex mt-3 ">
                            <label htmlFor="name">
                                <i class="zmdi zmdi-lock zmdi-hc-2x"></i>
                            </label>
                            <input type="text" name="password" placeholder="Password" onChange={handleupdate} value={user.password} className="w-[100%] p-1 ml-2 font-medium" />
                        </div>

                        <div className="border-b-2 border-grey-900 flex mt-3 ">
                            <label htmlFor="name">
                                <i class="zmdi zmdi-lock zmdi-hc-2x"></i>
                            </label>
                            <input type="text" name="cpassword" placeholder="Confirm Password" onChange={handleupdate} value={user.cpassword} className="w-[100%] p-1 ml-2 font-medium" />
                        </div>

                        <button type="submit" className="bg-blue-500 pt-2 pb-2 pl-4 pr-4 text-white rounded-lg mt-3" onClick={PostData} >Register</button>


                    </div>

                </form>


                <div className=" flex flex-col justify-center items-center">
                    <img src={RImage} alt="Registration" className="w-[200px] h-auto" />
                    <p className="font-semibold mt-2">Already a User ? <span className="text-center text-blue-600"><Nav.Link as={Link} to="/login">Login</Nav.Link></span></p>
                </div>

            </div>

        </div >


    )
}