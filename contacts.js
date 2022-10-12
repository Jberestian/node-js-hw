const contactsPath = require("./db/contacts.json");

const fs = require("fs/promises");
const path = require("path");

const contactsFunct = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

function listContacts() {
  // ...твій код
}

function getContactById(contactId) {}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

module.exports = contactsFunct;
