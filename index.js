const contacts = require("./db/contacts");

const {program} = require('commander')

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'list':
            const allContacts = await contacts.listContacts();
            return console.log(allContacts);
        case 'get':
            const contactById = await contacts.getContactById(id);
            return console.log(contactById);
        case 'add':
            const contactToAdd = await contacts.addContact({name, email, phone});
            return console.log(contactToAdd);
        case 'update':
            const contactToUpdate = await contacts.updateContact(id, {name, email, phone});
            return console.log(contactToUpdate);
        case 'remove':
            const contactToDelete = await contacts.removeContact(id);
            return console.log(contactToDelete);
        default:
      console.warn("\x1B[31m Unknown action type!");
    }
}

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);
const argv = program.opts();

invokeAction(argv);