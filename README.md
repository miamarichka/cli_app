# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"
https://i.postimg.cc/KzqQzK7j/image.png

# Отримуємо контакт по id
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
https://i.postimg.cc/XqnZTxBy/image.png

# Додаємо контакт
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
https://i.postimg.cc/3r9WkXDn/image.png

# Видаляємо контакт
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
https://i.postimg.cc/QCbryJcC/image.png

# Оновлюємо контакт
node index.js --action="update" --id g4AdfDv9rltUcmER7Bh65 --name Jonh Smith --email jonhsmth@email.com --phone 123-345-4
5-67
https://i.postimg.cc/JzTznMD0/image.png