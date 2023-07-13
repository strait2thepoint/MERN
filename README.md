# Book Search MERN Project

This is a Book Search application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to search for books, view book details, save books to their personal collection, and manage their saved books.

![App Screenshot](./client/src/assets/Screenshot%202023-07-12%20212847.png)

## Features

- User authentication: Users can sign up, log in, and log out to access personalized features such as saving books.
- Book search: Users can search for books using keywords or specific criteria like author or title.
- Book details: Users can view detailed information about a book, including the title, author, description, cover image, and a link to purchase the book.
- Save books: Authenticated users can save books to their personal collection for future reference.
- Manage saved books: Users can view their saved books, remove books from their collection, and perform other management actions.

## Technologies Used

- Front-end:
  - React.js: JavaScript library for building user interfaces.
  - Apollo Client: GraphQL client for connecting the React.js application to the server.
  - HTML5 and CSS3: Markup and styling of the user interface.

- Back-end:
  - Node.js: JavaScript runtime for server-side development.
  - Express.js: Web application framework for building RESTful APIs.
  - MongoDB: NoSQL database for storing book and user data.
  - Mongoose: Object Data Modeling (ODM) library for MongoDB and Node.js.

## Getting Started

### Prerequisites

- Node.js (version X.X.X)
- MongoDB (version X.X.X)

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/book-search-mern.git
   ```

2. Install dependencies:

   ```shell
   cd book-search-mern
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the root directory of the project.
   - Add the following environment variables:
     ```
     PORT=3000
     MONGODB_URI=<your-mongodb-connection-string>
     JWT_SECRET=<your-jwt-secret-key>
     ```

4. Start the development server:

   ```shell
   npm run develop
   ```

5. Open your web browser and visit `http://localhost:3000` to access the application.

## Usage

1. Sign up or log in to the application.
2. Use the search bar to search for books by keywords, author, or title.
3. View the search results and click on a book to see its details.
4. If logged in, click the "Save" button to save a book to your personal collection.
5. Navigate to the "Saved Books" page to view and manage your saved books.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries or questions, feel free to contact me at [your-email@example.com](mailto:your-email@example.com).

---

Feel free to customize this template based on your specific project details. Provide clear instructions on how to install, configure, and run the application. Explain the features and technologies used. Include screenshots or a demo GIF to showcase the application's interface. Add information about contributing and licensing. Finally, provide contact details in case users have any questions or need further assistance.

Remember, a good README helps users understand your project and encourages collaboration and contributions.