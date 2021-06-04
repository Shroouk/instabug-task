import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import data from '../../db.json'
import FormWrapper from '../../components/UI/FormWrapper/FormWrapper';
import Slider from '../../components/UI/Slider/Slider';
import './Login.css';

const users = data.map((d,i)=>{
    return (d.email + d.password)
})


class Login extends Component{
    
    state={
        islogged: false,
        loginParams: {
          devEmail: "",
          devPassword: ""
        },
        disabled:"disabled",
        input:{},
        errors:"",
        emailerror:{},
        emailclasses:["login-form-input"],
        passerror:{},
        passclasses:["login-form-input"],
        emailValid: false,         
        passValid: false, 
    }

     

   
    emailChangeHandler = (event)=>{
        let input = this.state.input;
            input[event.target.name] = event.target.value;
            this.emailValidate();
            let emailValid = this.emailValidate() ? true : false;
            let submitValid = this.state.passValid && emailValid;
            this.setState({emailValid: emailValid,disabled: !submitValid})
            

    }

    passChangeHandler = (event)=>{
        let input = this.state.input;
            input[event.target.name] = event.target.value;
            this.passValidate();
            let passValid = this.passValidate() ? true : false;       
            let submitValid = this.state.emailValid && passValid;
            this.setState({passValid: passValid, disabled: !submitValid})
    }
    

      handleSubmit = (event)=> {
          let errors="";

        if (users.includes(this.state.input.email+this.state.input.password)  ) {
          let user = this.state.input.email
        localStorage.setItem("token", user);
        this.setState({
            islogged: true
        });
         <Redirect to="/welcome" />

        }else{
            errors = "Your email and/or password are incorrect.";
            this.setState({errors:errors})
        }

        event.preventDefault();
    
     
    
      }

  
      emailValidate= ()=>{
        let input = this.state.input;
        let emailerror = {};
        let emailclasses = ["login-form-input"];
        let isEmailValid = true;
     
        if (!input["email"]) {
            isEmailValid = false;
            emailerror["email"] = "Please enter your email Address.";
  
        }
  
        if (typeof input["email"] !== "undefined") {
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(input["email"])) {
            isEmailValid = false;
            emailerror["email"] = "Enter a valid email address.";
            emailclasses=["login-form-input","input-error"];
  
          }
  
        }
     
  
        this.setState({
            emailclasses:emailclasses,
            emailerror:emailerror
         
        });
  
        return isEmailValid;
          
      }

      
      passValidate= ()=>{
        let input = this.state.input;
        let passerror = {};
        let passclasses =["login-form-input"];
        let isPassValid = true;
        
       
        if (input["password"].length < 6) {
  
            isPassValid = false;
            passerror["password"] = "Password must be 6 characters or more.";
            passclasses=["login-form-input","input-error"]
        }
  
        this.setState({
          passerror:passerror,
          passclasses:passclasses
  
        });
 
        return isPassValid; 

      }

         
        

      validate= ()=>{
       let input = this.state.input;
       if(this.emailValidate && this.passValidate){
           console.log(input)
       }
       return true;
      }

   
    
    render(){
        
        if (localStorage.getItem("token")) {
            return <Redirect to="/welcome" />;
          }

        return(
            <>
                <div className="login-parent">
                    <div className="slider-child">
                        <Slider/>
                    </div>
                    <div className="from-child">
                       <FormWrapper
                                    emailChangeHandler={this.emailChangeHandler}
                                    passChangeHandler={this.passChangeHandler}
                                    handleSubmit={this. handleSubmit}
                                    email={this.state.input.email}
                                    password={this.state.input.password}
                                    emailclasses={this.state.emailclasses}
                                    passclasses={this.state.passclasses}
                                    errors={this.state.errors}
                                    emailerror={this.state.emailerror.email}
                                    passerror={this.state.passerror.password}
                                    disabled={this.state.disabled}/>
                    </div>
                </div>
            </>
        )
    }
}

export default Login;