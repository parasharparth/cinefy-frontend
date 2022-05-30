import React from 'react'
import styles from '../Styling/PaymentsPage.css'

const Payment = ({ handlePayment }) => {
    return (
        <div>
                    <input type="email" placeholder="Email Address"/>
                    <input type="text" placeholder="Mobile number" />
                    <button style={{marginBottom:'-5px', color:'white'}}>continue</button>
         </div>

    )
}

export default Payment


















