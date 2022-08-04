import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import alertify from "alertifyjs";

export default class BookList extends Component {
    state = {
        error: null,
        isLoaded: false,
        books: [],
        id: "",
        title: "",
        author: "",
        price: ""
      }
      
      componentDidMount() {
        fetch("http://localhost:3000/books")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              books: result
            });
          },
    
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
      }

    render() {
        const { error, isLoaded, books } = this.state;

        const setData = (book) => {
            let { id, title, author, price } = book;
            localStorage.setItem("ID", id);
            localStorage.setItem("TITLE", title);
            localStorage.setItem("AUTHOR", author);
            localStorage.setItem("PRICE", price);
        }

        const onDelete = (id, title)=> {
            axios.delete('http://localhost:3000/books/delete/' + id)
            .then(() =>{
                this.componentDidMount();
            })
            alertify.error( title + " silindi!");
        }

        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="border-start border-3 border-danger">
                    <br></br>
                    <Table
                    >
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Kitap Adi
                                </th>
                                <th>
                                    Yazar
                                </th>
                                <th>
                                    Fiyat
                                </th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                books.map(book => (
                                    <tr key={book.id}>
                                        <th scope="row" name="id">
                                            {book.id}
                                        </th>
                                        <td name="title">
                                            {book.title}
                                        </td>
                                        <td name="author">
                                            {book.author}
                                        </td>
                                        <td name="price">
                                            {book.price}
                                        </td>
                                        <td>
                                            <Button className="button" color="warning" onClick={()=>setData(book)}>
                                                <Link to="/books/update">Edit</Link>
                                            </Button>
                                        </td>
                                        <td>
                                            <Button className="button" color="danger" onClick={()=>onDelete(book.id, book.title)}>Sil</Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            )
        }
    }
}