import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="pt-5 px-4 min-h-screen flex flex-col justify-center items-center">
            <form action="" className="flex flex-col gap-3 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center" >Login</h2>

                <div className="flex flex-col gap-3">
                    <input
                    type="text"
                    placeholder="Enter username or email"
                    className="border border-gray-950 rounded-md px-4 py-1 w-full"
                    />
                    <input
                    type="password"
                    placeholder="Enter your password"
                    required
                    className="border border-gray-950 rounded-md px-4 py-1 w-full"
                    />
                </div>

                <Link to ={"/dashboard"}type="submit" className="border text-center px-2 py-1 bg-green-300 font-bold rounded-lg">Login</Link>

            </form>
        </div>
    )
}

export default Login;