import React from "react";
import { Mail, Lock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { admin_login } from "../../services/authServices";
const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await admin_login({ email, password });
      login(response.access_token);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="w-full max-w-sm p-8 bg-neutral-900 border border-neutral-800 rounded-2xl flex flex-col items-center gap-5">
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-sm text-neutral-400">
            Don't have an account yet?{" "}
            <span className="text-white font-medium cursor-pointer">
              Contact IT team
            </span>
          </p>
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center gap-5"
          >
            <div className="relative w-full">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
                size={18}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-neutral-800 rounded-lg pl-10 pr-3 py-3 text-sm placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Email address"
              />
            </div>
            <div className="relative w-full">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
                size={18}
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-neutral-800 rounded-lg pl-10 pr-3 py-3 text-sm placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Password"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg py-3 font-medium"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
