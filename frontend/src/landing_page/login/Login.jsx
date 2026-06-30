import { useState } from "react";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const response = await axios.post(
        "https://main.d2nd08dk4frp54.amplifyapp.com//login",
        formData
      );

      if (response.data.success) {
        setSuccessMsg("Logged in successfully! Redirecting to dashboard...");
        
        // Save user to localStorage
        localStorage.setItem("user", JSON.stringify(response.data.user));
        
        // Redirect to dashboard (typically on port 5173 or 5174)
        setTimeout(() => {
          window.location.href = "https://main.d2nd08dk4frp54.amplifyapp.com"; 
        }, 1500);
      }
    } catch (err) {
      console.log(err);
      if (err.response && err.response.data && err.response.data.message) {
        setErrorMsg(err.response.data.message);
      } else {
        setErrorMsg("Network error or invalid credentials. Make sure backend is running.");
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-lg border-0 rounded-4 p-4"
        style={{ width: "430px" }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">Login to Account</h2>
          <p className="text-muted">
            Access your Kite trading dashboard
          </p>
        </div>

        {errorMsg && (
          <div className="alert alert-danger py-2 text-center" role="alert">
            {errorMsg}
          </div>
        )}

        {successMsg && (
          <div className="alert alert-success py-2 text-center" role="alert">
            {successMsg}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Username
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              className="form-control form-control-lg"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg w-100"
          >
            Log In
          </button>

          <p className="text-center text-muted mt-3 mb-0">
            Don't have an account?
            <a href="/signup" className="text-decoration-none ms-1">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
