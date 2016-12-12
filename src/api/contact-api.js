"use strict"

const contacts = require('./contact-data').contacts

const generateId = (contact) => {
  return contact.name.replace(' ', '-')
}

const ContactApi = {
  saveContact(contact){
    contact.id=generateId(contact);
    contacts.push(contact)
    console.log('Message sent', contact)
  }
}

module.exports = ContactApi;
