/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { auth, db } from './Firebase';
import '../App.css'
import "firebase/firestore";
import { doc, Firestore, updateDoc } from 'firebase/firestore';


const Mainpage = () => {

console.log(auth.currentUser.photoURL)
	// Signout function
	const logout = async() => {
		await updateDoc(doc(db, "users",auth.currentUser.email),{
			isLogin:false
		})
		Firestore
		.firestore()
		.collection('users')
		.doc(auth.currentUser.email)
		.update({
		 isLogin:false
		});
		auth.signOut();
	}

	return (
		<div className='App'>
			<img src={auth.currentUser.photoURL} style={{ borderRadius: "50%" }} alt='user photo' />
			<h1>Name : {auth.currentUser.displayName}</h1>
			<h3>Email : {auth.currentUser.email}</h3>
			<button style={{ "marginLeft": "20px" }}
				onClick={logout}>
				Logout
			</button>
		</div>
	);
}

export default Mainpage;
