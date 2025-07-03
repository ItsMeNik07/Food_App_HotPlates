import { SignIn } from "@clerk/clerk-react";

function Signin(){
    return (
        <div className="h-[100vh] flex justify-center items-center bg-[#fff5cf]">
            <SignIn forceRedirectUrl="/"/>
        </div>
    )
}

export default Signin;