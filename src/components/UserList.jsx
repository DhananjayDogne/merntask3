import { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import { MoonLoader } from "react-spinners";

const UserList = () => {
    const { users,getUser, getUsers } = useContext(Context);
    const [loader, setLoader] = useState(false);
   

    useEffect(() => {
        setLoader(true);
        getUsers(setLoader);
    }, [])
    
    return (
        <> <div className="bg-blue-200 py-2 text-center">
                USERS LIST
            </div>
        <div className="h-[80vh] overflow-y-scroll" >
           

            <div className="w-[100%]">{loader && <MoonLoader color="#36d7b7" className="m-auto"/>}</div>
            {users.length > 0 ? (
               
                users.map((user,key) => {
                    
                    return ( <div key={key}  className = "flex bg-[#ECECEC] my-1 py-1 px-4 cursor-pointer" onClick={()=>{getUser(user.id)}}>
                        <img className="rounded-full mr-2 w-[2rem]" src={user.avatar} alt="" />

                        <div className=" my-auto">{user.profile.firstName}{" "}{user.profile.lastName}</div>
                  
                         </div>)
                }))
                :
                ( "No users found")
                
            }
            
            </div>
        </>
    )
}

export default UserList;