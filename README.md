# Blog Management
Author: Sixin Li

## Description
Blog Management System for admin is a web application whose frontend and backend are both implemented with Node.js. It realizes user login and logout, user/article information modification, input verification on both client and server sides, login session module, and pagination functionalities. Moreover, it establishes database connection to MongoDB for operational data storage and encrypted password.

## Quick Start
#### Login Info
One default admin user will be recorded in the MongoDB database when the app.js file is conducted. This admin user login info is in blog/model/user.js.

#### Operations on users
By accessing localhost:80/admin/login, after login, the admin user can add new users, edit existing users information or delete users in the user list page(via "Users" tab on the left sidebar).

#### Operations on articles
Go to "Users" tab on the left sidebar.

#### MongoDB Database




## Application UI
### Login Page
<img width="960" alt="2968fdeee3a74a5a7f27e4452e5ced7" src="https://user-images.githubusercontent.com/45926850/148710541-9e878602-c6e4-4e6f-ba3a-a743a8108269.png">

### Users Page
![image](https://user-images.githubusercontent.com/45926850/148710533-4323820f-5a61-4c2a-8fa9-62a92fe00db4.png)
