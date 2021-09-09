import React from 'react';
import { firebaseAuth } from '../../config/firebase';

const Login = () => {
    const [form, setForm] = React.useState({
        email: '',
        password: ''
    });
    console.log(form);
    const handleRegister = () => {
        const {email, password} = form;
        firebaseAuth.createUserWithEmailAndPassword(email, password ).then( () => {
            firebaseAuth.currentUser?.sendEmailVerification().then(()=>{
                alert("chek email anda untuk verifikasi")
            }).catch((error: any)=>{
                alert(error.message)
            })
        }).catch((error: any) =>{
            alert(error.message)
        })
    }
    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }
    return (
        <div>
            <input type="text" value={form.email}  onChange={handleChange} name="email" placeholder="email" />
            <input type="password" value={form.password}  onChange={handleChange} name="password" placeholder="password" />
            <button type="button" onClick={handleRegister}>Register</button>
        </div>
    );
}


export default Login;