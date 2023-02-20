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
| DELETE     | /tr../:id     |delete transacrion |(not available in front end)

##Features
These include multiple users, encryption and authorization for privacy and protection, with protected lists of accounts, categories and payees for each user. Loading spinners were used as well as imported icons from react-icons/fa and a dependency called Toastify to have pop up error messages rather than use an error page.

##Credits

A special thanks to Brad Travesy from Udomy for the great advice and learning materials especially for the react/redux. I learned a lot of cool extentions to use in the react/redux toolkit that came in handy. You can find Brad on YouTube. He has a huge following and has been putting out videos on coding for a few years now. Give him a like, or subscribe to his channel.

I'd also like to thank Micheal Kerr, one of our instructors here at the UNLV HackerU's Training Program. His youTube channel is Axxion. Be sure to check him out.


#Known Problems --
Because all accounts, categories and payees are linked and protected to an individual user, names must be unique. User Brad and User John cannot both have Checking Account. Mongoose does not allow duplicate entries.

When the merge was done during Thursday's class, the application completely broke. I believe it may have been caused by material-UI not being compatible with redux or redux toolkits. I spent a couple of hours trying to fix it so I could use the code that was there, but I finally just started over. I was able to use a lot of the original code, but mostly it was from scratch. For 3 days work, I'm pretty happy with what I have.

Drop down menu's in the Transaction Log have been implemented, and I started the coding for getting the balance by account, but I ran out of time. It's very close. I'm am going to finish it in the next few days just to say I have it done for my porfolio. There may still be bugs that I am unaware of in the Transaction log, as I have not had enough time to completely check it out. 

#Wish List
I would have liked to do more with the styling maybe even incorporating wordPress, but I just used a boiler plate of css that I have used before to get the app up and running. I felt that the functionality was more important. I would also like to deploy it. I'm thinking about putting it up with AWS. 