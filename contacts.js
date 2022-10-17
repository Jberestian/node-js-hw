const contacts = require("./db/contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "getAll":
      const allContacts = await contacts.getAll();
      console.log(allContacts);
      break;
    default:
      console.log("Unknown action");
  }
};

invokeAction({ action: "getAll" });

// const fs = require("fs").promises;
// const path = require("path");

// const contactsFunct = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
// };

// function listContacts() {
//     readFile(contactsPath, 'utf-8')
//         .then(data => console.log(JSON.parse(data))
//             .catch(err => console.log(err));
// }

// function getContactById(contactId) {
//   // ...твій код
// }

// function removeContact(contactId) {
//   // ...твій код
// }

// function addContact(name, email, phone) {
//   // ...твій код
// }

// module.exports = contactsFunct;
