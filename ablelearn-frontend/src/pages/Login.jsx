import { useState } from "react";
import "../styles/Login.css";
import { speak } from "../utils/speech";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email === "student@test.com" && password === "123456") {
      speak("Login successful. Welcome to AbleLearn.");
      onLogin(); // 🔑 THIS NAVIGATES TO DASHBOARD
    } else {
      speak("Invalid credentials");
      setError("Invalid demo credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>AbleLearn</h2>
        <p>Adaptive Learning Suite</p>

        <input
          type="email"
          placeholder="student@test.com"
          value={email}
          onFocus={() => speak("Enter email")}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="123456"
          value={password}
          onFocus={() => speak("Enter password")}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onFocus={() => speak("Press to login")}
          onClick={handleLogin}
        >
          Sign in
        </button>

        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}
