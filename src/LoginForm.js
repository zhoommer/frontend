import React, { Component } from "react";
import {
    Form,
    FormGroup,
    Col,
    Input,
    Button
} from "reactstrap";
import axios from "axios";
import alertify from "alertifyjs";


export default class LoginForm extends Component {
    state = {title: "", author: "", price: "" };
    handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        axios({
            method: 'post',
            url: "http://localhost:3000/books/create",
            data: {
                title: this.state.title,
                author: this.state.author,
                price: this.state.price
            }
        })
        alertify.success(this.state.title + " basarili bir sekilde eklendi.");
    }

    
    render() {
        return (
            <div>
                <br></br>
                <h3>Ekle</h3>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Col sm={10}>
                            <Input
                                id="kitapAdi"
                                name="title"
                                placeholder="Kitap Adi"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={10}>
                            <Input
                                id="yazarAdi"
                                name="author"
                                placeholder="Yazar Adi"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={10}>
                            <Input
                                id="fiyat"
                                name="price"
                                placeholder="Fiyat ₺"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={12}>
                            <Button type="submit" color="success">Ekle</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}