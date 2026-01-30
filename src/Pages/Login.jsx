// import React, { useState } from "react";

// const Login = () => {
//   const [isSignup, setIsSignup] = useState(false);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center mb-6">
//           {isSignup ? "Sign Up" : "Login"}
//         </h2>

//         {/* Login Form */}
//         {!isSignup && (
//           <form>
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full p-2 mb-4 border rounded"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full p-2 mb-4 border rounded"
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//             >
//               Login
//             </button>
//           </form>
//         )}

//         {/* Signup Form */}
//         {isSignup && (
//           <form>
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full p-2 mb-4 border rounded"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full p-2 mb-4 border rounded"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full p-2 mb-4 border rounded"
//             />
//             <button
//               type="submit"
//               className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
//             >
//               Sign Up
//             </button>
//           </form>
//         )}

//         {/* Toggle Link */}
//         <p className="text-center mt-4 text-sm">
//           {isSignup ? (
//             <>
//               Already have an account?{" "}
//               <button
//                 className="text-blue-500 underline"
//                 onClick={() => setIsSignup(false)}
//               >
//                 Login
//               </button>
//             </>
//           ) : (
//             <>
//               Don’t have an account?{" "}
//               <button
//                 className="text-blue-500 underline"
//                 onClick={() => setIsSignup(true)}
//               >
//                 Sign Up
//               </button>
//             </>
//           )}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;









import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Handle Signup
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users/signup", {
        fullName,
        email,
        password,
      });
      alert(res.data.message);
      console.log("✅ Signup Response:", res.data);
    } catch (err) {
      console.error("Signup Error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  // ✅ Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });
      alert(res.data.message);
      console.log("✅ Login Response:", res.data);
    } catch (err) {
      console.error("Login Error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isSignup ? "Sign Up" : "Login"}
        </h2>

        {/* Login Form */}
        {!isSignup && (
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        )}

        {/* Signup Form */}
        {isSignup && (
          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 mb-4 border rounded"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
            >
              Sign Up
            </button>
          </form>
        )}

        {/* Toggle Link */}
        <p className="text-center mt-4 text-sm">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <button
                className="text-blue-500 underline"
                onClick={() => setIsSignup(false)}
              >
                Login
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <button
                className="text-blue-500 underline"
                onClick={() => setIsSignup(true)}
              >
                Sign Up
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
