import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";


function Login(){

const navigate = useNavigate();


const [user,setUser]=useState({
    email:"",
    password:""
});


const handleChange=(e)=>{

    setUser({
        ...user,
        [e.target.name]:e.target.value
    });

};


const handleSubmit=async(e)=>{

e.preventDefault();


try{

const response = await API.post(
    "/auth/login",
    user
);


localStorage.setItem(
    "token",
    response.data.access_token
);


navigate("/dashboard");


}
catch(error){

console.log(error);
alert("Login failed");

}


};


return(

<div>

<h1>Login</h1>


<form onSubmit={handleSubmit}>


<input
name="email"
placeholder="Email"
onChange={handleChange}
/>


<input
name="password"
type="password"
placeholder="Password"
onChange={handleChange}
/>


<button>
Login
</button>


</form>


</div>

)

}


export default Login;