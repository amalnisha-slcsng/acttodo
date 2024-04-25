import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup(props) {
  const { users, setusers } = props;
  const [eusername, seteusername] = useState("");
  const [epassword, setepassword] = useState("");
  const [econfirmpass, seteconfirmpass] = useState("");
  const navigate = useNavigate();

  function handlUinput(e) {
    seteusername(e.target.value);
  }

  function handlPinput(e) {
    setepassword(e.target.value);
  }

  function handleCPinput(e) {
    seteconfirmpass(e.target.value);
  }

  function adduser() {
    setusers([...users, { username: eusername, password: epassword }]);
    console.log("User added successfully");
    navigate("/"); // Navigate to the login page after signing up
  }

  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi..👋</h1>
        <p>Sign up Here :)</p>
        <div className="flex flex-col gap-2 my-2">
          <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="username"
            onChange={handlUinput}
          />
        </div>
        <div className="flex flex-col gap-2 my-2">
          <input
            type="password"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="password"
            onChange={handlPinput}
          />
        </div>
        <div className="flex flex-col gap-2 my-2">
          <input
            type="password"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="confirm password"
            onChange={handleCPinput}
          />
        </div>

        <button className="bg-[#FCA201] w-24 P-3 rounded-md my-2" onClick={adduser}>
          Sign Up
        </button>
        <p>
          Already have an account?{" "}
          <Link to={"/"} className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
