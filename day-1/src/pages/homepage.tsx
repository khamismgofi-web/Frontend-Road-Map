import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="pt-5 px-4 py-2">
        <header className="flex justify-between flex-row items-center">
            <h2 className="font-bold text-3xl ">Dekio.</h2>
            <nav className="flex gap-2 ">
                <Link to={"/login"} className="bg-green-300 px-4 py-2 font-bold rounded-lg ">Login</Link>
                <Link to={"/register"} className="bg-green-300 px-4 py-2 font-bold rounded-lg ">Register</Link>
            </nav>
        </header>
      
    </div>
  )
}

export default Homepage;