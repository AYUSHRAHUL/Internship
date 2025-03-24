import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md h-screen flex flex-col justify-end">
          <h1 className="text-4xl font-bold mb-4">Welcome to PopX</h1>
          <p className="text-lg text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit;
          </p>
          <Link to="/register">

          <button className="w-full bg-purple-600 text-white py-3 rounded-lg mb-4 text-lg">
            Create Account
          </button>
          </Link>
          <Link to="/login">

          <button className="w-full bg-purple-200 text-purple-600 py-3 rounded-lg text-lg">
            Already Registered? Login
          </button>
          </Link>
        </div>
      </div>
    );
  };
  
 
  

export default LandingPage;
