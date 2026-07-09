import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");
    };

    return (

        <div style={{ padding: "30px" }}>

            <h1>AI Interview Dashboard</h1>

            <h2>
                Welcome, {user?.name} 👋
            </h2>

            <p>Email: {user?.email}</p>

            <hr />

           <button onClick={() => navigate("/create-interview")}>
    Start Interview
</button>

            <button
                onClick={logout}
                style={{ marginLeft: "20px" }}
            >
                Logout
            </button>

        </div>

    );
}

export default Dashboard;