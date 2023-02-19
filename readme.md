#Love My Finances

##This is intended to be a simple transaction tracking log to keep track of balances as you spend or recieve money.
This project was done as a full MERN stack. (Mongo/Mongoose database, express and node for backend and React/Redux for frontend)
It uses Jsonwebtoken and bcryptjs for authentication and encryption.

#Routes
##Routes on Users

| **Method** | **Path**       | **Purpose **                               |
|------------|----------------|--------------------------------------------|
| POST       | /user/login    | Login                                      |
| POST       | /user/register | create new User                            |
| DELETE     | /user/:id      | delete's a user(not available on front end)|
|            |                |                                            |


##Routes on Accounts

| Method | Path          | Purpose                |
|--------|---------------|------------------------|
| GET    | /accounts     | list of users accounts |
| POST   | /accounts     | add an account         |
| PUT    | /accounts/:id | edit account           |
| DELETE | /accounts/:id | delete account         |
|        |               |                        |


##Routes on Categories

| **Method** | **Path**        | **Purpose **       |
|------------|-----------------|--------------------|
| GET        | /categories     | list of categories |
| POST       | /categories     | add a category     |
| PUT        | /categories/:id | edit category      |
| DELETE     | /categories/:id | delete category    |
|            |                 |                    |

##Routes on Payees
| **Method** | **Path**    | **Purpose **        |
|------------|-------------|---------------------|
| GET        | /payees     | list of user payees |
| POST       | /payees     | add a payee         |
| PUT        | /payees/:id | edit payee          |
| DELETE     | /payees/:id | delete payee        |
|            |             |                     |

##Routes on Transactions
| **Method** | **Path**      | **Purpose **      |
|------------|---------------|-------------------|
| GET        | /transactions | transaction log   |
| POST       | /transactions | add a transaction |
|            |               |                   |

##Features
These include multiple users, encryption and authorization for privacy and protection, with protected lists of accounts, categories and payees for each user. Loading spinners were used as well as imported icons from react-icons/fa and a dependency called Toastify to have pop up error messages rather than use an error page.

##Credits

A special thanks to Brad Travesy from Udomy for the great advice and learning materials especially for the react/redux. I learned a lot of cool extentions to use in the react/redux toolkit that came in handy. You can find Brad on YouTube. He has a huge following and has been putting out videos on coding for a few years now. Give him a like, or subscribe to his channel.

I'd also like to thank Micheal Kerr, one of our instructors here at the UNLV HackerU's Training Program. His youTube channel is Axxion. Be sure to check him out.


#Known Problems --
Because all accounts, categories and payees are linked and protected to an individual user, names must be unique. User Brad and User John cannot both have Checking Account. Mongoose does not allow duplicate entries.

I would have liked to do more with the styling, but I just used a boiler plate of css that I have used before to get the app up and running. I felt that the functionality was more important.