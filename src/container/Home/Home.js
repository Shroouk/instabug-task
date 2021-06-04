import React , { Component }from 'react';
import welcome from '../../assets/imgs/welcome.png'
import './Home.css'


class Welcome extends Component{
    state = {
        islogout: false
      }

      signOut = () => {
        localStorage.removeItem("token");
        this.setState({
          islogout: true
        });
      };


    render(){
          if (!localStorage.getItem("token")) {
            return <Redirect to="/login" />;
          }

        return(
            <>
             
                <div className="welcome-wrapper">
                    <div>
                        <img src={welcome}/>
                    </div>
                    <div className="welcome-side"> 
                    <h2>Welcome <span className="wel-email"> {localStorage.getItem("token")}</span></h2>
                    <button onClick={this.signOut} href="#" className="signout-btn">
                    Sign Out
                    </button>
                    </div>
                </div>
                
            </>
        )
    }
}

export default Welcome;
