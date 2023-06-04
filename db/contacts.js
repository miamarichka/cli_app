const fs = require('fs/promises');
const path = require('path');
const {nanoid} = require('nanoid');

const contactsPath = path.join(__dirname, 'contacts.json');

 async function listContacts () {
   const data = await fs.readFile(contactsPath);
     return JSON.parse(data);
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const result = contacts.find(item => item.id === contactId);
  return result || null;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const contactToRemoveIndex = contacts.findIndex(item => item.id === contactId);
  if (!contactToRemoveIndex) {
    return null;
  }
  const [deletedContact] = contacts.splice(contactToRemoveIndex, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null , 2));
  return deletedContact;
}

async function addContact(phoneData) {
  const contacts = await listContacts();
  const contactToAdd = {
    id: nanoid(),
    ...phoneData
  }
  contacts.push(contactToAdd);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null , 2));
  return contactToAdd;
}

async function updateContact(id, newData) {
  const contacts = await listContacts();
  const contactToUpdateIndex = contacts.findIndex(item => item.id === id);
  if (!contactToUpdateIndex) {
    return null;
  }
  contacts[contactToUpdateIndex] = { id, ...newData };
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contacts[contactToUpdateIndex];
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContact,
}