import React, { Component } from 'react';
import Form from '../Form/Form';
import Todo from '../Todo/Todo';
import SearchForm from '../SearchForm/SearchForm';

import { v4 as uuidv4 } from 'uuid';
import './TodoList.css';
class TodoList extends Component {

    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: ''
    }
    addTask = (objTask) => {
        const { name } = objTask;
        if (this.state.contacts.every((contact) => !contact.name.includes(name))) {
            this.setState((prev) => ({
                contacts: [...prev.contacts, objTask]
            }))
        } else alert(`${name} is already in contacts`);
    }
    deleteTask = (id) => {
        this.setState((prev) => ({
            contacts: prev.contacts.filter((el) => el.id !== id)
        }))
    }
   
    searchItem = () =>{
        return this.state.contacts.filter(contact => 
            contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),);
     }
     inputHandler = ({ target }) => {
        const { value, name  } = target;
        this.setState({
            [name]: value
        })
    }
    render() {
const {contacts, filter}=this.state;
        return (
            <div className="box__form">
                <div className="form__user-phone">
                    <h2 className="title">Phonebook:</h2>
                    <Form addTask={this.addTask} />
                </div>
                <h2 className="title">Contacts:</h2>
                <SearchForm filter={filter} inputHandler={this.inputHandler}/>

                <Todo deleteTask={this.deleteTask} contacts={ filter ?   this.searchItem():contacts}/>
            </div>
        );
    }
}

export default TodoList;
