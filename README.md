# My Simple Book Library
A lightweight, front-end web application for creating and managing a personal list of books. This project allows users to add books with a title, author, and read status, view them in a clean interface, and manage the list by removing books or toggling their read status.

## Features
- Add Books: A simple form to add new books to your library.

Display Library: All books are displayed as individual cards on the page.

Remove Books: Each book card has a "Remove" button to delete it from the library.

Toggle Read Status: Each book has a button to toggle its status between "read" and "unread".

Persistent IDs: Each book is assigned a unique, stable ID using the browser's crypto.randomUUID() API.

Input Validation: The read status input is validated to ensure only "read" or "unread" can be submitted.

How to Use
Clone or download the project repository to your local machine.

Navigate to the project folder.

Open the index.html file in your web browser.

Use the form at the top of the page to add books to your library.

Title: Enter the book's title.

Author: Enter the author's name.

Status: Enter either read or unread.

Click the "Add Book" button to see the book appear in the library display below.

Use the "Remove" or "Toggle Status" buttons on each book card to manage your library.

Technologies Used
HTML5: For the basic structure and content of the web page.

CSS3: (Optional) For styling the form, buttons, and book cards.

JavaScript (ES6+): For all the core application logic, including:

DOM manipulation to dynamically create and update the library display.

Event handling for all user interactions.

Object-Oriented principles using constructor functions and prototypes.

Project Structure
/
├── index.html      # The main HTML file containing the page structure.
├── style.css       # (Optional) The stylesheet for visual presentation.
└── script.js       # The core JavaScript file with all application logic.

Author
Joseph Scripture

License
This project is licensed under the MIT License. See the LICENSE.md file for details.