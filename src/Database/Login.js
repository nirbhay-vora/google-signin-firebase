import React, { useEffect, useState } from 'react';
import {auth,db,provider} from "./Firebase"
import {onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { doc, setDoc, updateDoc } from 'firebase/firestore';

    
const Login = () => {


	const signin = () => {
		signInWithPopup(auth,provider).then(async(data)=>{
            
            if(!data){
                await setDoc(doc(db, "users",data.user.email), {
                    name: data.user.name,
                    email:data.user.email,
                    photoURL:data.user.photoURL,
                    isLogin:true
                  });
            }
        })

	}
 
	
	return (
		<div>
			<center>
				<button style={{"marginTop" : "200px"}}
				onClick={signin}>Sign In with Google</button>
			</center>
		</div>
	);
}

export default Login;
