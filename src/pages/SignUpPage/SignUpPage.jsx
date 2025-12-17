import { useState } from 'react';
import HeroWithHeading from '../../Components/HeroWithHeading/HeroWithHeading';
import './SignUpPage.css';

function SignUpPage() {
    return <>
        <HeroWithHeading title={"Create Account"}></HeroWithHeading>
        <section id='signup_section'>
            <RegisterationCard formType={"signup"}></RegisterationCard>
        </section>
    </>
}


function RegisterationCard({ formType }) {
    const [mode, setMode] = useState(formType);
    return <div className='registeration_card'>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-xl-6 col-lg-8'>
                    {mode !== "forgot" && (<div className='registeration_wraper'>
                        <h2 className='title'>
                            {mode === "signup" ? "Create Your Account" : "Welcome Back!"}
                        </h2>
                        <p>
                            {mode === "signup" ? "Hey there! Ready to join the party? We just need a few details from you to get started. Let's do this!" : "Hey there! Ready to log in? Just enter your username and password below and you'll be back in action in no time. Let's go!"}
                        </p>

                        <form action="/" className='account_form'>
                            {mode === "signup" ? <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-grp'>
                                        <label htmlFor="first_name">First Name</label>
                                        <input type="text" id='first_name' placeholder='First Name' />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-grp'>
                                        <label htmlFor="last_name">Last Name</label>
                                        <input type="text" id='last_name' placeholder='Last Name' />
                                    </div>
                                </div>
                            </div> : ""}
                            <div className='form-grp'>
                                <label htmlFor="email">Email</label>
                                <input type="text" id='email' placeholder='Email' />
                            </div>
                            <div className='form-grp'>
                                <label htmlFor="password">Password</label>
                                <input type="text" id='password' placeholder='Password' />
                            </div>

                            {mode === "signup" ?
                                <div className='form-grp'>
                                    <label htmlFor="confirm_password">Confirm Password</label>
                                    <input type="text" id='confirm_password' placeholder='Confirm Password' />
                                </div> : ""}

                            {mode === "login" ? <div className='account_check'>
                                <div className='account_check_remember'>
                                    <input id='remember_me' type="checkbox" className='form-check-input' />
                                    <label htmlFor="remember_me">Remember Me</label>
                                </div>
                                <div className='account_check_forget'>
                                    <a href="#" onClick={()=>setMode("forgot")}>Forget Password</a>
                                </div>
                            </div> : ""}
                            <button type='submit'>
                                {mode === "signup" ? "Sign Up" : "Sign In"}
                            </button>
                        </form>


                        <div className='form_switch'>
                            {mode === "signup" ? <p>Already have an account?
                                <a href="/login">Login</a></p> : <p>Don't have an account?
                                <a href="/signup">Sign Up</a></p>}
                        </div>
                    </div>)
                    }

                    {mode === "forgot" && (<div className='registeration_wraper'>
                        <h2 className='title'>
                            Forgot Password
                        </h2>
                        <p>
                            Lost your password? Please enter your email address. You will receive a link to create a new password via email.
                        </p>

                        <form action="/" className='account_form'>
                            <div className='form-grp'>
                                <label htmlFor="email">Email</label>
                                <input type="text" id='email' placeholder='Email' />
                            </div>

                            <div className='row'>
                                <div className='col-md-5'>
                                    <button type='submit'>
                                        Submit
                                    </button>
                                </div>
                                <div className='col-md-5'>
                                    <button onClick={()=>setMode("login")}>Cancel</button>
                                </div>
                            </div>
                        </form>

                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>;
}


export default SignUpPage;
export { RegisterationCard };