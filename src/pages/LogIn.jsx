import React, { useContext, useState } from "react";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { authDataContext } from "../context/AuthDataContext.jsx";
import { UserDataContext } from "../context/userContext.jsx";
import  axios  from "axios";

function LogIn() {
  let [show, setshow] = useState(false);
  let {userData, setUserData} = useContext(UserDataContext)
  let navigate = useNavigate();
  let {serverUrl} = useContext(authDataContext)
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")

   const handleLogin = async (e) => {
    try {
      e.preventDefault()
      let result =await axios.post(serverUrl + "/api/auth/login", {
        email,
        password,
      },{withCredentials:true})
      setUserData(result.data)
      navigate("/");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center relative">
      <div
        className="w-[50px] h-[50px] bg-[red] rounded-[50%]  cursor-pointer absolute top-[10%] left-[20px] 
            flex items-center justify-center"
        onClick={() => navigate("/")}>
        <FaArrowLeftLong className="h-[20px] w-[20px] text-[white]" />
      </div>
      <form
        action=""
        className="max-w-[900px] w-[90%] h-[600px] flex items-center justify-center flex-col flex-start gap-[10px]"
        onSubmit={handleLogin}
      >
<<<<<<< HEAD
        <h1 >Welcome to Airbnb</h1>
=======
        <h1>Welcome to Airbnb</h1>
>>>>>>> 6264aebd76817d72211ac64910b49d0d89812154
        <div className="w-[90%] flex items-start justify-start flex-col gap-[5px]">
          <label htmlFor="email" className="text-[20px]">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="w-[90%] h-[40px] border-[2px] border-[#555656] rounded-full text-[20px] px-[20px]"
            required
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
          ></input>
        </div>
        <div className="w-[90%] flex items-start justify-start flex-col gap-[5px]  relative">
          <label htmlFor="password" className="text-[20px]">
            Password
          </label>
          <input
            type={show ? "text" : "password"}
            id="password"
            className="w-[90%] h-[40px] border-[2px] border-[#555656] rounded-full text-[20px] px-[20px] "
            required
            onChange={(e)=>setPassword(e.target.value)}
            value={password }
          ></input>
          {!show && (
            <IoIosEyeOff
<<<<<<< HEAD
              className="w-[30px] h-[30px] absolute right-[5%] top-[55%] cursor-pointer"
=======
              className="w-[30px] h-[30px] absolute right-[8%] top-[50%] cursor-pointer"
>>>>>>> 6264aebd76817d72211ac64910b49d0d89812154
              onClick={() => setshow((prev) => !prev)}
            />
          )}
          {show && (
            <IoMdEye
<<<<<<< HEAD
              className="w-[30px] h-[30px] absolute right-[5%] top-[55%] cursor-pointer"
=======
              className="w-[30px] h-[30px] absolute right-[8%] top-[50%] cursor-pointer"
>>>>>>> 6264aebd76817d72211ac64910b49d0d89812154
              onClick={() => setshow((prev) => !prev)}
            />
          )}
        </div>
        <button className="px-[30px] py-[10px] bg-[#ff0000] text-[#ffffff] text-[20px] mt-[20px] border-none rounded-[0.75rem] cursor-pointer">
          Log in
        </button>
        <p className="text-[18px]">
          Create new account ?
          <span
            className="text-[19px] text-[red] cursor-pointer"
            onClick={() => navigate("/SignUp")}
          >
            {" "}
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
}

export default LogIn;