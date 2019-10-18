import React from 'react'
import axios from 'axios'
import "./css/form.css"

class Form extends React.Component {
    constructor(){
        super()


        this.state = {
            image_url: "",
            product_name: "",
            price: 0
        }
        this.handlePrice = this.handlePrice.bind(this)
        // this.handleClick = this.handleClick.bind(this)
    }
    handleImage = (e) => {
        this.setState({image_url: e.target.value})
    }

    handleName = (e) => {
        this.setState({product_name: e.target.value})
    }

    handlePrice(e) {
        this.setState({price: e.target.value})
    }

    handleClick = () => {
        const {image_url, product_name, price} = this.state;
        // console.log(image_url)
        axios.post("/api/inventory", {
            image_url,
            product_name,
            price
        })
        .then(response => {
            this.setState({})
        })
        .catch(error => {
            console.log(error)
        })
    };

    render(){
        
        return (
            <main>
            <h1>Form</h1>
            <h3>Image Url</h3>
            <input onChange={this.handleImage}></input>
            <h3>Product Name</h3>
            <input onChange={this.handleName}></input>
            <h3>Price</h3>
            <input onChange={this.handlePrice}></input>
            <button onClick={this.handleReset}>Cancel</button>
            <button onClick={this.handleClick}>Add to inventory</button>
            </main>
        )
    }
}

export default Form;