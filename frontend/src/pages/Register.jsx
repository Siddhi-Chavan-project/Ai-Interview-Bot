import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

function Register(){

    const navigate = useNavigate();

    const [user,setUser] = useState({
        name:"",
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

            await API.post("/auth/register",user);

            alert("Registration successful");

            navigate("/login");

        }
        catch(error){

            console.log(error);
            alert("Registration failed");

        }
    };


    return(
        <div>

            <h1>Register</h1>

            <form onSubmit={handleSubmit}>

                <input
                name="name"
                placeholder="Name"
                onChange={handleChange}
                />

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
                    Register
                </button>

            </form>

        </div>
    )
}

export default Register;