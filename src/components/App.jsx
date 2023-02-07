
import React, { Component } from 'react';
import {ContactForm} from './ContactForm/ContactForm';
import {ContactList} from './ContactList/ContactList';
import {Filter} from './Filter/Filter';
import { nanoid } from 'nanoid';
import './App.module.css';

// import {LoginForm} from './LoginForm/LoginForm'
// import { ProductReviewForm } from './ProductReviewForm/ProductReviewForm';






export class App extends Component {

  nameInputId = nanoid();

  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // formSubmitHandler = data => {
  //   console.log(data);
  // };

  formSubmitHandler = ({name, number}) => {
    // console.log(name);
    const contact = {
      id: this.nameInputId,
      name,
      number,
    };

    this.state.contacts.some(
      i =>
        (i.name.toLowerCase() === contact.name.toLowerCase() &&
          i.number === contact.number) ||
        i.number === contact.number
    )
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));

    // this.setState(({ contacts }) => ({
      
    //   contacts: [contact, ...contacts]
    // }))
  };
  
  changeFilter = e => {
    this.setState({filter: e.currentTarget.value});

  };

  getVisibleContacts = () => {
    const {filter, contacts} = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter)
      );

  };
  

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };



  

 render () {
   const {filter} = this.state;
   
   const visibleContacts = this.getVisibleContacts();
  return (
    <section>
    <h1>Phonebook</h1>

    <ContactForm onSubmit={this.formSubmitHandler}/>
     
    <h2>Contacts</h2>
    
    <Filter filter={filter} onChangeFilter={this.changeFilter}/>
    <ContactList contacts={visibleContacts}  onDeleteContact={this.deleteContact} />
   
  </section>
  
   
  );
};
};