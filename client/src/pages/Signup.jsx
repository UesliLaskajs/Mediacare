import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/signup",
        { ...inputValue },
        { withCredentials: true }
      );

      const { success } = data;
      if (success) {
        console.log("Success");
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.error(error);
    }

    // Clear form fields after submission
    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-semibold mb-4">Signup Account</h2>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            className="mt-1 p-2 w-64 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
            className="mt-1 p-2 w-64 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            className="mt-1 p-2 w-64 border rounded-md"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit
        </button>
        <span className="mt-2">
          Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;
