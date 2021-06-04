import React from 'react';

import Logo from '../../../assets/imgs/logo.svg';
import googleIcon from '../../../assets/imgs/google-icon.svg';
import githubIcon from '../../../assets/imgs/github-icon.svg';
import microsoftIcon from '../../../assets/imgs/microsoft-icon.svg';

import Form from '../../../components/Form/Form';
import Companies from '../../../components/Companies/Companies'

import './FormWrapper.css'

const FormWrapper = (props)=>{
   

    return(
        <>
            <div>
                <img src={Logo} className="i-mt-2 form-section-logo" alt="instabug-logo"/>
            </div>
            <h3 className="i-mb-2 i-mt-2 login-txt">Log in to Instabug</h3>

            <div className="social-links-wrapper">
                <div>
                <a href="#" className="social-link google-link">
                    <img src={googleIcon} className="icon-img" alt="google-icon"/>
                    <span className="social-link-txt">Google</span>
                </a>
                </div>
                <div>
                <a href="#" className="social-link github-link">
                    <img src={githubIcon} className="icon-img" alt="github-icon"/>
                    <span className="social-link-txt">GitHub</span>
                </a>
                </div>
                <div>
                <a href="#" className="social-link microsoft-link">
                    <img src={microsoftIcon} className="icon-img" alt="microsoft-icon"/>
                    <span className="social-link-txt">Microsoft</span>
                </a>
                </div>

                <div className="divider">
                <span>Or</span>
                </div>

            </div>

            
            
            

            <Form 
                emailChangeHandler={props.emailChangeHandler}
                passChangeHandler={props.passChangeHandler}
                handleSubmit={props.handleSubmit}
                email={props.email}
                password={props.password}
                emailclasses={props.emailclasses}
                passclasses={props.passclasses}
                errors={props.errors}
                emailerror={props.emailerror}
                passerror={props.passerror}
                disabled={props.disabled}/>

            <Companies/>
        </>
    )
}

export default FormWrapper;