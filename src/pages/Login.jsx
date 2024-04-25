import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate(); // Corrected useNavigate usage

  const [eusername, seteusername] = useState(""); // State for username
  const [epassword, setepassword] = useState(""); // State for password
  const [rusers, setrusers] = useState(true); // State for checking if users are registered
  const users = props.users;
  const setusers = props.setrusers;
  
  // Function to check user credentials
  function checkuser() {
    let isUserRegistered = users.some(
      (item) => item.username === eusername && item.password === epassword
    );
    if (isUserRegistered) {
      console.log("login successful");
      navigate("/landing",{state:{user:eusername}});
    } else {
      console.log("login failed");
      setrusers(false); // Update rusers state to false when login fails
    }
  }

  // Function to handle username input change
  function handlUinput(e) {
    seteusername(e.target.value);
  }

  // Function to handle password input change
  function handlPinput(e) {
    setepassword(e.target.value);
  }

  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi..👋</h1>
        {rusers ? (
          <p>I help you manage your activities after you login :)</p>
        ) : (
          <p className="text-red-500">Please SignUp before You Login</p>
        )}

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
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="password"
            onChange={handlPinput}
          />
        </div>

        <button onClick={checkuser} className="bg-[#8272DA] w-24 p-1 rounded-md my-2">
          Login
        </button>
        <p>
          Don't have an account? <Link to={"/signup"} className="text-blue-500 underline">Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
