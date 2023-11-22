import React, { useState } from 'react'
import { initializeApp, } from 'firebase/app';
import { firebaseConfig } from './firebase';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signInWithRedirect, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const LogIn = () => {
    const navigate = useNavigate()
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new FacebookAuthProvider();
    const provider1 = new GoogleAuthProvider();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone]=useState('')
    const sendOtp=()=>{
        const appverifier=new RecaptchaVerifier(auth,'abc',{});
        signInWithPhoneNumber(auth,phone,appverifier).then((res)=>{
            console.log(res,'res')

        }).catch((err)=>{
            console.log(err,'err')
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('ok done ', email, password);
        signInWithEmailAndPassword(auth, email, password).then((res) => {
            const user = res.user
            console.log('user', user)

            navigate('/home')


        })
            .catch((err) => console.log(err))
        navigate('/login')
    }
    const signInWIthGoogle = () => {
        signInWithPopup(auth, provider1)
            .then((response) => {
                console.log('response', response)
                navigate('/home')
            }

            )
            .catch((err) => {
                console.log('error', err)
            })

    }
    const signInWIthFacebook = () => {
        signInWithPopup(auth, provider)
            .then((response) => {
                console.log('response', response)
                navigate('/home')
            }

            )
            .catch((err) => {
                console.log('error', err)
            })


    }

    return (


        <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 10 }}>
                <h1>Login</h1>
                <div >
                    <form style={{ display: 'flex', flexDirection: 'column', gap: 12, width: "100%" }} onSubmit={handleSubmit}>
                        <div>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                placeholder="Enter your email address"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                placeholder="Enter your Password"
                            />
                        </div>
                        <div>      <button type="submit">Login</button>
                        </div>


                        <div>
                            <button type='button' onClick={signInWIthGoogle}>Login WIth Google</button>
                        </div>
                        <div>
                            <button type='button' onClick={signInWIthFacebook}>Login WIth FaceBook</button>
                        </div>
                    </form>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: "100%" }}>

                   
                     <div>
                            <input
                                
                               
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                }}
                                placeholder="Enter your Password"
                            />
                        </div>
                        <div id="abc"></div>
                        <div>      <button type="button" onClick={sendOtp}>Send Otp</button>
                        </div>
                        </div>
                </div>
            </div>
        </div >

    )
}


export default LogIn