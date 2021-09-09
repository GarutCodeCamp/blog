import React from 'react';
import { firebaseAuth } from '../../config/firebase';
import Form from '../Form';

const Register: React.FC = () => {
    const [create,setCreate] = React.useState({
        email: '',
        password: ''
    });
    const handleSubmit = (e: Event) => {
        firebaseAuth.createUserWithEmailAndPassword(create.email, create.password)
        .then((userCredential)=> {
            const user = userCredential.user;
                alert("check your email")
        }).catch((error)=>{
            const errCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        })
        e.preventDefault();
    }
    return(
        <>
            <Form setPostUser={setCreate} postUser={create} submitted={handleSubmit} />
        </>
    )
}

export default Register;