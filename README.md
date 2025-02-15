# Admin Panel

This project provides a basic admin panel with login functionality, as well as the ability to create, edit, and delete posts. It features an interface for adding new posts and managing existing ones.

## Features:
- <b>Admin Login Panel:</b> A secure login form where the admin can access the dashboard.
- <b>Post Management:</b>
  - <b>Add New Post:</b> Admin can create new posts by entering a title and body content.
  - <b>Edit Existing Post:</b> Admin can edit the title and content of existing posts.
  - <b>Delete Post:</b> Admin can remove any post from the dashboard.
- <b>Error Handlings:</b> Display error messages when invalid credentials are entered during login.
- <b>Responsive Design:</b> The interface adapts to different screen sizes, ensuring a seamless experience on both desktop and mobile devices.

## How to Use

- <b>Admin Login:</b>
  - <b>Username:</b> *admin*
  - <b>Password:</b> *admin*
Upon successful login, the admin is granted access to manage posts.

- <b>Adding a Post:</b>
1. Click the "Add New Post" button.
2. Enter a title and post content in the provided form.
3. Click the "Save" button to add the post.
4. To clear the form, click the "Clear" button.
- <b>Editing a Post:</b>
1. Click the "Edit" button next to any post.
2. Modify the post title or content.
3. Click "Edit" to save changes.
- <b>Deleting a Post:</b>
  - Click the "Delete" button next to any post to remove it from the list.
- <b>Logging Out:</b>
  - Click the "Logout" link to log out of the admin panel.

## Setup Instructions

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/erascu/vanilla-js-admin-panel.git
cd vanilla-js-admin-panel
```

### 2. Open the Project

- Open the <b>index.html</b> file in your preferred web browser.
- Alternatively, you can use a local server for development purposes:
```bash
npx http-server
```
Then, visit http://localhost:8080 in your browser.

### 3. Customize the Application

- Modify the <b>style.css</b> file to change the appearance of the application.
- Update the <b>adminForm.js / editBar.js / editPanel.js</b> files to add more functionality or improve existing features.

## Technologies Used

- <b>HTML5:</b> Structure of the web page.
- <b>CSS3:</b> Styling and layout of the application.
- <b>JavaScript:</b> Dynamic behavior and interactivity.
