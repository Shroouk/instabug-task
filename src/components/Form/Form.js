import React, { Component } from 'react';
import './Form.css';



class Form extends Component{

    
    render(){
        let errDiv = "";
        if(this.props.errors){
            errDiv =(
                <div className="error-alert " >
                <p>{this.props.errors}</p> 
            
                </div>
            )
            
       }
       

        return(
            <>
           
                <form name="loginForm" className="loginForm" onSubmit={this.props.handleSubmit}>
                   {errDiv}
                   
                    <div className="">
                        <label className="form-label" htmlFor="developer_email">Work Email</label> 
                        <input id="developer_email" className={this.props.emailclasses.join(" ")} type="text" name="email" value={this.props.email} onChange={this.props.emailChangeHandler}  placeholder="you@company.com"/>
                             <p className="login-error-msg " >{this.props.emailerror}</p> 
                    </div>
                    <div className="pass-wrapper">
                        <label className="form-label form-label-pass" htmlFor="password" >Password</label> 
                        <a className="i-link-grey i-font-sm" href="#">Forgot password?</a>
                    </div>
                    <div className="">
                        <input id="password" className={this.props.passclasses.join(" ")} type="password" name="password" value={this.props.password} onChange={this.props.passChangeHandler}  placeholder="8+ Characters"/>
                        <p className="login-error-msg " >{this.props.passerror}</p>
                    </div>
                    <button className="login-btn" type="submit" disabled={this.props.disabled}>Log in</button>
                    <div className="signup-wrapper">
                      <p className="" data-qa="login__signup-text">Don't have an account? 
                        <a className="i-link i-font-sm"  href="#"> Sign up</a>
                      </p>
                      <a className="i-link i-font-sm"  href="#">Login via SSO</a>
                    </div>
                </form>
            </>
        )
    }
}

export default Form;