import {dummyUser} from "../App"
import Login from "../screens/Login"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";


export default function ProtectedRoute({children}){
    const Navigate = useNavigate();
    const [user,setuser] = useState({});
    const getCredencial =()=>{
        const email = localStorage.getItem("email");
        const password = Number(localStorage.getItem("password"));
        setuser({
            email,
            password
        });
    }
    useEffect(()=>{
        getCredencial();
    },[]);

    if(dummyUser.email === user.email && dummyUser.password === user.password){
        return <>{children}</>
    }

   return<>{Navigate("/")}</>
}