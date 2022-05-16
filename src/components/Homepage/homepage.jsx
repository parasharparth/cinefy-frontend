import React, { Component } from 'react'

class homepage extends Component{
    contructor(props){
        super(props)

        this.state = {
                movies: []
        }
    }

    
    render(){
        return (
            <div>
            <div style={{ fontSize: '20px', width:'300px', margin:'auto' }}>Movies</div>

            <div style={{ fontSize: '20px', width:'300px', margin:'auto' }}> Featured Films </div>
         

            </div>
            
        )
    }
}

export default homepage