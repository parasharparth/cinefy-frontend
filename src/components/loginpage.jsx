import React, { Component } from 'react'

class loginpage extends Component{
    contructor(props){
        super(props)

        this.state = {
                loginInfo: []
        }
    }

    //This is the login page from where the user will login using username and password
    render(){
        return (
            <div>
            <div style={{ fontSize: '20px', width:'300px', margin:'auto' }}>Get Started</div>

            <div style={{ fontSize: '20px', width:'300px', margin:'auto' }}> Enter your username </div>
            <div>
            <input type="text" placeholder="Enter your username" />
            </div>
            <div style={{ fontSize: '20px', width:'300px', margin:'auto' }}> Enter your password </div>
            <div>
            <input type="text" placeholder="Enter your password" />
            </div>

            <div>
            <Button autoFocus onClick={()=>handleLogin(username,password)} color="primary">
            Sign in
            </Button>
            </div>
            </div>
            
        )
    }
}

export default loginpage