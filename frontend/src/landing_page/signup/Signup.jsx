import { useState } from "react";
import axios from "axios";
function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handelChange = async (e) => {
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
        "https://main.d2nd08dk4frp54.amplifyapp.com/signup",//or we use simple your url localhost:8080
        formData
      );

      if (response.data.success) {
        setSuccessMsg("Account created successfully! Redirecting to login...");
        setTimeout(() => {
          window.location.href = "/login";
        }, 1500);
      }
    } catch (err) {
      console.log(err);
      if (err.response && err.response.data && err.response.data.message) {
        setErrorMsg(err.response.data.message);
      } else {
        setErrorMsg("Network error. Make sure your backend server is running.");
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
          <h2 className="fw-bold text-primary">Create Account</h2>
          <p className="text-muted">
            Start investing with Zerodha
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
              onChange={handelChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">
              Email
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handelChange}
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
              onChange={handelChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg w-100"
          >
            Sign Up
          </button>

          <p className="text-center text-muted mt-3 mb-0">
            Already have an account?
            <a href="/login" className="text-decoration-none ms-1">
              Login
            </a>
          </p>

        </form>
      </div>
    </div>
    )
}
export default SignUp;