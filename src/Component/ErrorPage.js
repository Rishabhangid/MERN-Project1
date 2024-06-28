import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] ">
         <div className="font-extrabold text-[150px]  opacity-50">
            404
        </div>
        <p className="font-black text-[50px] z-30 ">WE ARE SORRY, PAGE NOT FOUND!</p>
        <p className="font-medium text-[20px] z-30 ">THE PAGE YOU ARE LOOKING FOR MIGHT HAVE REMOVED, HAD ITS NAME CHANGED OR ITS TEMPORALY UNAVAILABLE.</p>
        <Nav.Link as={Link} to="/"> <button className="bg-blue-500 pt-2  z-35 pb-2 pl-4 pr-4  text-white rounded-lg mt-3">Back To HomePage</button> </Nav.Link>

       
    </div>
  )
}
