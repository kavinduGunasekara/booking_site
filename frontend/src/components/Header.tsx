import {Link} from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
    const { isLoggedIn } = useAppContext();

    return ( 
    <div className="bg-green-800 py-6">
        <div className="container mx-auto flex justify-between"> 
        <span className="text-3xl text-white font-bold tracking-tight">
            <Link to="/">TravelGuide.com</Link>
        </span>
        <span className="flex space-x-2">
            {isLoggedIn ? (
             <>
            <Link 
             className="flex items-center text-white px-3 font-bold hover:bg-green-600 rounded-md"
            to="/my-bookings"
            >
                My Bookings
                </Link>

            <Link 
             className="flex items-center text-white px-3 font-bold hover:bg-green-600 rounded-md"
            to="/my-hotels"
            >
                My Hotels</Link>
            <SignOutButton />
            </> 
            ) : ( 
                   <Link
             to="/sign-in" 
             className="flex bg-white items-center text-green-500 px-3 font-bold hover:bg-gray-100 rounded "
            >

             Sign in
            </Link>
            )}
         
        </span>
        
        </div>

        </div>
    );
   
};

export default Header;