import React, { Component } from "react";
import {
    Form, FormGroup, Input, Button
} from "reactstrap";
import axios from "axios";

export default class Update extends Component {
    
    state = { id: localStorage.getItem("ID"), title: "", author: "", price: "" };

    handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    }

    updateData = event => {
        console.log(this.state.id);
        console.log(this.state.title);
        console.log(this.state.author);
        console.log(this.state.price);
        event.preventDefault();
        axios({
            method: 'put',
            url: `http://localhost:3000/books/update/${this.state.id}`,
            data: {
                title: this.state.title,
                author: this.state.author,
                price: this.state.price
            }
        })
    }

    render() {   
        return(
            <div>
                <h3>Guncelle</h3>
                <Form onSubmit={this.updateData}>
                    <FormGroup>
                        <Input
                        type="text"
                        name="title"
                        placeholder= "Kitap Adi"
                        onChange={this.handleChange}
                        >
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Input
                        type="text"
                        name="author"
                        placeholder="Yazar Adi"
                        onChange={this.handleChange}
                        >
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Input
                        type="text"
                        name="price"
                        placeholder="Kitap Ucreti"
                        onChange={this.handleChange}
                        >
                        </Input>
                    </FormGroup>
                    <Button type="submit" color="warning">Guncelle</Button>
                </Form>
            </div>
        )
    }
}