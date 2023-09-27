import { useContext, useEffect } from "react";
import Context from "../context/Context";
import { MoonLoader } from "react-spinners";
import "./Profile.css";
const Profile = () => {
    const { user, ploader } = useContext(Context);
    
   
    return (
        
        <div >
            <div className="bg-blue-200 py-2 text-center">
                USERS DETAILS
            </div>
            {ploader && <MoonLoader color="#36d7b7" className="m-auto" />}
            {user ? (
                <div className="m-auto w-[70%]">
                    <div className=" relative my-2 h-[12rem] border-[1px] rounded-full">
                        {/* <img className="backimg m-auto absolute  -z-[1]  left-[6.9rem]  my-2 w-[10rem] rounded-full" src="https://s3-alpha-sig.figma.com/img/07cc/91a0/2d7dfefdef2a26a5e2aae42f44491f3f?Expires=1696809600&Signature=BV9y7tiYFp~PJ0YN8yVMUIbGz7YRwp83GkRjSfwq61-Z3FtARHk7uMniNIWFOKFsDlJi0JLbW2PgU931bzQwm54e7YSg0e8Ai34b9iH33kTs1iDliaAIkuioGhxfK2UG6MpfxSNJHVBVtSdcsKZ6O0nX5XAfhQZFqv6MfzneIiWcCcKevVARS1F44pnsz2YWTQ5F1vGu7LCiv7C1loC5AMa8EZxOf1mqh-PnKU2YdBNuv3Y2kZ4aUnYU4DgmnzcRqwYa4tYeI8oVemYZSIA6WetqjkxUejdtKXaYQYapch79QXglPk79-bCcC~QDi2iQlzuUBZK3A4dxC6BXdKofPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" /> */}

                        <img className="m-auto my-2 pt-2 w-[10rem] rounded-full" src={user.avatar} alt="" />
                    </div>
                
                <h2 className="my-1 text-center">{user.profile.username}</h2>
                <p className=" bg-[#ECECEC] my-1 p-2 border-[1px] rounded border-[#6C6C6C]">{user.Bio}</p>
                <h1 className="mt-2">Full Name</h1>
                <h1 className=" bg-[#ECECEC] my-1 p-2 border-[1px] rounded border-[#6C6C6C]">{user.profile.firstName}{" "}{user.profile.lastName}</h1>
                <h1 className="mt-2">Job Title</h1>
                <h1 className=" bg-[#ECECEC] my-1 p-2 border-[1px] rounded border-[#6C6C6C]">{user.jobTitle}</h1>
                <h1 className="mt-2">Email</h1>
                <h1 className=" bg-[#ECECEC] my-1 p-2 border-[1px] rounded border-[#6C6C6C]">{user.profile.email}</h1>
            </div>) :
                ("Please select a user to view details")
            }
        </div>
    )
}

export default Profile;