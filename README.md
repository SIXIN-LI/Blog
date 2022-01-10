# Blog Management
Author: Sixin Li

## Description
Blog Management System for admin is a web application whose frontend and backend are both implemented with Node.js. It realizes user login and logout, user/article information modification, input verification on both client and server sides, login session module, and pagination functionalities. Moreover, it establishes database connection to MongoDB for operational data storage and encrypted password.

## Quick Start
#### Login Info
To create admin user information for login requires to use the createUser() function (defined in blog/model/user.js), and conduct ' const user = require('./model/user.js'); user.createUser(); ' in app.js.

#### Operations on users
By accessing localhost:80/admin/login, after login, the admin user can add new users, edit existing users information or delete users in the user list page(via "Users" tab on the left sidebar).

#### Operations on articles
Go to "Users" tab on the left sidebar.

#### MongoDB Database
Authentication has been setup to limit the access to the database used by this project. The blog/config records the username and password for development situation while the password is stored in a local environment system variable.


## Application UI
### Login Page
![image](https://user-images.githubusercontent.com/45926850/148710533-4323820f-5a61-4c2a-8fa9-62a92fe00db4.png)

### Users Page
<img width="960" alt="2968fdeee3a74a5a7f27e4452e5ced7" src="https://user-images.githubusercontent.com/45926850/148710541-9e878602-c6e4-4e6f-ba3a-a743a8108269.png">

### Articles Page
![image](https://user-images.githubusercontent.com/45926850/148728355-e2058002-1de4-4c16-a9ca-d49dd2277943.png)

## Limitations
1. The application's design makes it hard to debug because its frontend and backend are implemented together.
2. It doesn't have functionalities to validate email addresses when registered, to review under published articles and to quit current user.
3. The deploy part hasn't been set up as user-friendly.
