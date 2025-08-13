import React, { useContext, useState } from "react";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
<<<<<<< HEAD
import { authDataContext } from "../context/AuthDataContext.jsx";
import { UserDataContext } from "../context/userContext.jsx";
=======
import { authDataContext } from "../Context/AuthDataContext.jsx";
import { UserDataContext } from "../Context/userContext.jsx";
>>>>>>> 6264aebd76817d72211ac64910b49d0d89812154
import axios from "axios";

function SignUp() {
  let [show, setshow] = useState(false);
  let navigate = useNavigate();
  let {userData, setUserData} = useContext(UserDataContext);  
  let { serverUrl } = useContext(authDataContext);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const handleSignUP = async (e) => {
    try {
      e.preventDefault()
      let result =await axios.post(serverUrl + "/api/auth/signup", {
        name,
        email,
        password,
      },{withCredentials:true})
      setUserData(result.data);
      navigate("/");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center relative">
      <div
        className="w-[50px] h-[50px] bg-[red] rounded-[50%]  cursor-pointer absolute top-[10%] left-[20px] 
      flex items-center justify-center"
        onClick={() => navigate("/login")}
      >
        <FaArrowLeftLong className="h-[20px] w-[20px] text-[white]" />
      </div>
      <form
        action=""
        className="max-w-[900px] w-[90%] h-[600px] flex items-center justify-center flex-col flex-start gap-[10px]"
        onSubmit={handleSignUP}
      >
        <h1>Welcome to Airbnb</h1>
        <div className="w-[90%] flex items-start justify-start flex-col gap-[5px] mt-[10px]">
          <label htmlFor="name" className="text-[20px]">
            UserName
          </label>
          <input
            type="text"
            id="name"
            className="w-[90%] h-[40px] border-[2px] border-[#555656] rounded-full text-[20px] px-[20px]"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
        </div>
        <div className="w-[90%] flex items-start justify-start flex-col gap-[5px]">
          <label htmlFor="email" className="text-[20px]">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="w-[90%] h-[40px] border-[2px] border-[#555656] rounded-full text-[20px] px-[20px]"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </div>
        <div className="w-[90%] flex items-start justify-start flex-col gap-[5px] relative">
          <label htmlFor="password" className="text-[20px]">
            Password
          </label>
          <input
            type={show ? "text" : "password"}
            id="password"
            className="w-[90%] h-[40px] border-[2px] border-[#555656] rounded-full text-[20px] px-[20px]"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
          {!show && (
            <IoMdEye
              className="w-[30px] h-[30px] absolute right-[8%] top-[50%] cursor-pointer"
              onClick={() => setshow((prev) => !prev)}
            />
          )}
          {show && (
            <IoIosEyeOff
              className="w-[30px] h-[30px] absolute right-[8%] top-[50%] cursor-pointer"
              onClick={() => setshow((prev) => !prev)}
            />
          )}
        </div>
        <button className="px-[30px] mt-[20px] py-[10px] bg-[#ec0d0d] text-[white]
         text-[20px]  border-none rounded-[0.75rem] cursor-pointer" onClick={handleSignUP}>
          Sign Up
        </button>
        <p className="text-[18px]">
          Already have an account ?
          <span
            className="text-[19px] text-[red] cursor-pointer"
            onClick={() => navigate("/Login")}
          >
            {" "}
            Log In
          </span>
        </p>
      </form>
    </div>
  );
}
export default SignUp;
