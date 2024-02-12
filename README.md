# Book App
## Purpose and Benefits of the Project
This project provides a sample framework for developing a book application. The aim of the project is to provide a solution to the common problem of props drilling in React applications. Props drilling is when props passed to the lower levels of a component are passed through the middle level components. This can increase the complexity of the application and make maintenance difficult.

In this project, we aim to solve the problem of props drilling using Context API. Context components such as BookContext and ThemeContext facilitate data sharing between components by enabling data flow at every level of the application. Thanks to this approach, components anywhere in the application can directly access the required data and easily change the application theme.

Our project also utilizes modern technologies such as React and Context API, providing developers with a more efficient and effective coding experience. Also, by using a popular CSS framework such as Bootstrap, it allows to create the user interface quickly and easily.

This project benefits developers who want to understand and overcome the challenges in developing complex applications using React and Context API. It also provides a model for improving the user experience by addressing a common need, such as changing the theme of the application.

## Technologies Used

- React.js
- React Context API
- Bootstrap

## Project Structure

 - **components/App.js:** Main application component.

 - **components/BookList.js:** Component that lists books
 
 - **components/Book.js:** Component that displays each book.
 
 - **contexts/BookContext.js:** Component that provides book data and shares it using Context API.
  
 - **contexts/ThemeContext.js:** Component that changes the application theme and shares it using the Context API.

## Project Setup 

 1. **Clone the Project:** If you have Git installed, open your terminal and run the following command to clone the project; 
`git clone https://github.com/fatihcihan/books.git`

 2. **Install Required Dependencies:** To install the required dependencies in the project, navigate to the root directory of the project in the terminal and run the following command;  
    **npm install**

 3. **Start the Project:** Run the following command in the terminal to start the project;
**npm start**

 4. **View the App:** After successfully launching the project, you can view the app by opening the following URL in your browser;    
    **http://localhost:3000**