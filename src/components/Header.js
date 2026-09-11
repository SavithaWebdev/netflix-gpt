import {signOut ,onAuthStateChanged} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { APP_LOGO_URL } from "../utils/constants";
const Header = () => {
 const dispatch = useDispatch();
 const user = useSelector((state) => state.user);
 const navigate = useNavigate();

const handleSignOut = () => {
   signOut(auth).then(() => {
}).catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   console.log(errorCode + ": " + errorMessage);
});
  }
  useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName,photoURL} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
      navigate("/browse");
    } else {
       dispatch(removeUser());
       navigate("/");
  
    }
  }
  
);
return () => {
      unsubscribe();
    };
  },[]);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img
        className="w-44"
        src={APP_LOGO_URL}
        alt="logo"
      />
      {user&&(
        <div className="flex">
          <img
            className="w-12 h-12 m-2"
            alt="user-icon"
            src={user.photoURL}
          />
          <button className="text-white font-bold hover:text-gray-300" onClick={() => handleSignOut()}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;