# Assignment

This is a React application that includes a login page, a main screen with an editable table, and API integration to fetch detailed information about items.



## Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/hetalsagpariya/Assignment.git
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the application:**

    ```bash
    npm start
    ```

    The application will be available at [http://localhost:3000](http://localhost:3000).


- **LoginPage.js:** Contains the implementation of the login page.
- **MainScreen.js:** Manages the main screen, including the editable table and API integration.
- **Sidebar.js:** The component responsible for rendering the application sidebar.

## Assumptions and Decisions

During the development process, the following assumptions and decisions were made:

- Assumption 1: ...

## Additional Information


## LoginForm Page

The login page provides a user-friendly interface for users to log in to the application.

- **Aesthetic and Responsive Design:** The loginForm is designed to be visually appealing and responsive to different screen sizes.
- **Animations:** Subtle animations are incorporated for user interactions like button clicks, input focus, and page loading using some css LoginForm.css file.
- **Form Validations:** Client-side validations are implemented to check for empty fields, valid email format, and a minimum password length.

## Main Screen

The main screen consists of an editable table, a collapsible sidebar, and data handling functionalities.

- **Editable Table:** The table displays a list of items with the capability to edit, addNew, or delete entries. Pagination or infinite scroll is considered for a better user experience.
- **Sidebar:** A functional sidebar with navigation links is included. It is collapsible for smaller screen sizes.
- **Data Handling:** State management is implemented for the data displayed in the table.


## ItemTable-API Integration

To use the `ItemTable` component in your React application:

1. **Place the component in your layout:**

To use the `ItemTable` component in  sidebar page link to this component with name Api-itemTable.you click this Api-itemTable so navigate our Api Integration part

2. **[Loading State and Error Handling]:**
3. **[Modal for Item Details]:** :when click ant tavble content show open model item details.

  
## Another Library used in This Project

1. **React-router-dom** :  It provides a set of components that allow you to define the navigation and structure of your application based on the current URL. 
1. **React-bootstrap** : Bootstrap is a popular front-end framework that includes a collection of pre-styled components and a responsive grid system, making it easier to design and structure web applicatio
1. **Axio** :Axios simplifies the process of sending HTTP requests and handling responses, providing a clean and easy-to-use API.



