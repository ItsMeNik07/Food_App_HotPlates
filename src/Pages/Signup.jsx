import { SignUp } from "@clerk/clerk-react";

function Signup(){
    return (
        <div className="h-[100vh] flex justify-center items-center bg-[#fff5cf]">
            <SignUp />
        </div>
    )
}

export default Signup;