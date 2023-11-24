import React, { useEffect, useState } from 'react'
import { initializeApp, } from 'firebase/app';
import { firebaseConfig } from './firebase';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signInWithRedirect, signInWithPhoneNumber, RecaptchaVerifier, signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import LogoutButton from './LogoutButton';
const LogIn = () => {
    const navigate = useNavigate()
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new FacebookAuthProvider();
    const provider1 = new GoogleAuthProvider();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [otp, setOtp] = useState('')
    const [state, setState] = useState(false)
    const sendOtp = () => {
        const appverifier = new RecaptchaVerifier(auth, 'abc', { 'size': 'invisible', });
        signInWithPhoneNumber(auth, phone, appverifier).then((res) => {
            window.confirmationResult = res;
            console.log(res, 'res')
            setState(true)

        }).catch((err) => {
            console.log(err, 'err')
        })
    }
    const confirmOtp = () => {
        window.confirmationResult.confirm(otp).then((res) => {
            console.log("responseee", res)
            navigate('/home')

        }).catch((err) => {
            console.log("errrr", err)
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

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (user) => {
            user ? (console.log('islogin')) : (console.log('notLogin'))
        })
        return () => unsubcribe();
    }, [])
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
                                placeholder="Enter your Phone Number"
                            />
                        </div>
                        <div id="abc"></div>
                        <div>      <button type="button" onClick={sendOtp}>Send Otp</button>
                        </div>
                        {state && (<div>
                            <input
                                onChange={(e) => {
                                    setOtp(e.target.value);
                                }}
                                placeholder="Enter your Phone Number"
                            />
                            <button type="button" onClick={confirmOtp}>Confirm Otp</button>
                        </div>)}
                        <div><LogoutButton name='LogOut' /></div>
                    </div>
                </div>
            </div>
        </div >

    )
}


export default LogIn