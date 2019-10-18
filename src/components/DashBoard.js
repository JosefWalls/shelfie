import React from 'react'
import Axios from 'axios'
import Form from "./Form";



class Dashboard extends React.Component {
    render(){ 
        let mappedInventory = this.props.passToDashBoard.map((val, i) =>{
            return (
                <h1>The name is {val} and the index is {i}</h1>
            )
        })
        return (
            <>
            <h1 id="dashboard">Dashboard</h1>
            {mappedInventory}
            </>
        )
    }
}

export default Dashboard;