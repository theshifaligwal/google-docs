import Button from "@material-tailwind/react/Button"
import Image from "next/image"
import {signIn} from "next-auth/client"

export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Image 
            src="https://links.papareact.com/1ui"
            height="300"
            width="550"
            objectFit="contain"
            />
        </div>
    )
}
