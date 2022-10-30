import React from "react";
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'
import Filter from '../Filter/Filter'
import { nanoid } from 'nanoid';
import { Title, Div } from './App.styled'
import PropTypes from 'prop-types';



class App extends React.Component{
  state = {
    contacts: [],
    filter: ''
  }

  formSubmit = data => {
    const { name, number } = data;
 const isExist = this.state.contacts.find(contact =>
        contact.name.toLowerCase() === name.toLowerCase()
    );
     if (isExist) {
      alert(
        `${name} is already in contacts`
      );
      return;
    }
    this.setState(prev => {
      data.id = nanoid();
      return {
        contacts: [...prev.contacts, data,]
      }
      
    })
  }
  
  
    

 changeFilter = e => {
   this.setState({ filter: e.target.value });
  };
  
 getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const filterNormalized = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalized),
    );
 };
  
  deleteContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((el) => el.id !== id),
    });
  };
  

  render() {
    return (
      
      <Div>
         <Title>Phonebook</Title>
        <ContactForm onSubmit={this.formSubmit} />
        <h2>Contacts</h2>
        <Filter
          filter={this.changeFilter}
        value={this.state.filter}/>
        <ContactList
          contacts={this.getFilteredContacts()}
        deleteContact={this.deleteContact}
        />
        </Div>
        
    )
  }
 
}


export default App;