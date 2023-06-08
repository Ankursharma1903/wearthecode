putted all the logos we need inside the public folder
in this we are using tailwind css with the help of globalmodule.css
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
from official docs
inside tailwind.config.js
/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: [
"./app/**/_.{js,ts,jsx,tsx,mdx}",
"./pages/\*\*/_.{js,ts,jsx,tsx,mdx}",
"./components/\*_/_.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

],
theme: {
extend: {},
},
plugins: [],
}
inside the global css
@tailwind base;
@tailwind components;
@tailwind utilities;

npm run dev

to et rid of the error s of the styles component we are deleting everything from the styles

i have removed the whole main component and only the head is remianin inside the index file
to check the tailwind css we can form a div and check it

slug is used to pull the info of product to be fetched from the database
go in tailblocks
by this we et the tailwind snippets
select and view code
myy link is givin error with a tagg as we can use only one to make use of bith i have used link legacy behaviour

now we used react icons
npm install react-icons --save

instead of PLACIN NAVBAR and footer MANUALLY IN EVERY PAGE WE WILL PUT IT INSIDE OUR APP.JS 

so we ae copyingg some tshirts from the amazon

for cart we need to make the cart state

so we make cart inside _app.js file
we are refactoring the code inside the _app.js file

IF DONT WANT TO USE THIS SO WE CAN USE REDUX

so makingg sidebar of cart inside the navbar.js
for cart hidingg and showin we will use useref of the REACT

        //made this in such a way that sidecart always hidden till we wan t it to open
        // iving problem in mobile so used overflow x hidden so make changes in global.css file
        
        after navbar and cart now we will make the product pagge that is slug file

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\        
  now adding pincode functionality
  so made an api for all this work
pincode.js

////////////////////// now we will make the cart state

if user reload page or make chanes then the cart need to show the latest updates and maintain its states also

it is done b going inside the _app.js file and create some utilities methods
//// if want we can use redux to make it short but for now we are using traditional state variables


tut 42 addding andd clearing cart


\\\\\\\\\\\\\ after making all the methodds now we will use it

to debug and track wwe also see the application memory area in inspect to get the local storage

tut43
improving siebaar an checkout page

we will make the checkout page

I AM USING GOOGLE CLUD EMBED API TO PUT THE MAAP IN MY CHECKOUT PAGE IF I WANT

our sidecart is closing very fastly when we are updating it so to solve it we made changees inside our navbar file and use `` where translate-x-full is present
where ref is wriiten and made a js variable and we are making it translate-x-0
but its bad when we cart is empty but still its showing so we need to use if statement here
{/* here we are doing it dynamically so if cart empty so translate-x-o so it mean no need to go anywhere otherwise make it full when we add items*/}


tut 44
now we will make the user login and account signup pages
we can replace favicon.ico in the files to gget it replace from the title bar of the web

now we go in react icons to get the icons

made modifications for using tailwind element page as per my choice inside the configure page

"./node_modules/tw-elements/dist/js/**/*.js",
and plugins


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

TUT 46 WE WILL USE MONGOOSE TO CONNECT OUR SITE WITH A MONGODB DATABASE

as when timestamp made true the create or update at functionality is automatically updated in the mongodb by itself

npm i mongoose
install mongodb in the pc if not present in mine its present
now we will make models to store our data

so make mongodb compass



make a folder named models
models is like a database table inside the mongodb here but mongo not have table it have collections


TUT 47 CREATING API OR KIND OF MIDDLEWARE TO CONNECT WITH MONGODB
so created in folder middleware


run mongod command in the poweshell window and then click on connect to the database through the compass

now in api make getproduct file

aftter this need to restart otherwise environment variables will not load
also need to mention the database name along the uri


sometimes errror of schema not recmpiled so go in products in schema and write mongoose.models={}  and similarly in other schema files also


now in api we will make addproducts.js

using the api in the vscode make a new collection using the api like postman
and inside it make a new request of Add Products
and check for url api/addproducts 
and the method is post
in post so mention in the body a json
[{
   "title": "wear the code"  ,
"slug": "wear-the-code",
"desc": "req.body[i].desc",
"img": "req.body[i].img",
"category":"req.body[i].category" ,
"size":"req.body[i].size" ,
"color": "req.body[i].color",
"price":499 ,
"availableQty":1
}]
/// given the body an array so we can iterate

// if add or send same data again as the fields here given with the required unique

but if make changes in the fields that required unique so send it again
[{
   "title": "wear the code2"  ,
"slug": "wear-the-code2",
"desc": "req.body[i].desc",
"img": "req.body[i].img",
"category":"req.body[i].category" ,
"size":"req.body[i].size" ,
"color": "req.body[i].color",
"price":499 ,
"availableQty":1
}]

and add some more products

NOW WE ARE MAKING THE NEW REQUEST OF GETPRODUCTS

and now we make updateproducts it have payload(request ) of all the new data and the id

and similarly updateproduct.js file

now we need to use id to update any product

now we again use the extension to update the product and copy the body from the getproduct api response in the extension it can also be take n from the add products

[{
      "_id": "646cc7f3b774f9f9fef36fc3",
      "title": "wear the code ankur bhai op",
      "slug": "wear-the-code",
      "desc": "req.body[i].desc",
      "img": "req.body[i].img",
      "category": "req.body[i].category",
      "size": "req.body[i].size",
      "color": "req.body[i].color",
      "price": 499,
      "availableQty": 1,
      "createdAt": "2023-05-23T14:04:35.553Z",
      "updatedAt": "2023-05-23T14:04:35.553Z",
      "__v": 0
    },
    {
      "_id": "646cc8a9b774f9f9fef36fc7",
      "title": "wear the code2 ankur bhai k alva sb topi",
      "slug": "wear-the-code2",
      "desc": "req.body[i].desc",
      "img": "req.body[i].img",
      "category": "req.body[i].category",
      "size": "req.body[i].size",
      "color": "req.body[i].color",
      "price": 499,
      "availableQty": 1,
      "createdAt": "2023-05-23T14:07:37.039Z",
      "updatedAt": "2023-05-23T14:07:37.039Z",
      "__v": 0
    }]
    and then by the post method send

    now send again usinf wear the code premium tshirts


    TUT 48 DISPLAYING TSHIRTS

    IN COMPASS IN DOCUMENT CHANGE THE CATEGORY TO THE TSHIRTS

    so now in pages tshirts
    replace all the hardcoded values with a map and we will use serverside props instead of maps 
    so work of the getproduct and mongoose file is done here now

update all the images inside the compass database to give it a better look


tut 49 to display the variants of the tshirts


so we need the araray of the color and size and then so need to modify the getproducts app

after shirts page we will make changes in the slug page


TO DEBUG USE PRESERVE LOCK SETTING IN THE CONSOLE OF THE INTERNET SO WHEN THE VALUE CHANGES OR REFRESH THAN ALSO THE VALUES PREVIOUS IN THE CONSOLE ARE NOT LOST

tut 50 managing functionalitites that are not available like reviews and whishlist so commenting them down and also update the addtocart function variables that we are giving in it

now updating cart and its functions

tut 51 implementing the buy now option of the product so when need to buy a single product than whole cart empty and redirect the page so implementing all the functionality of the buy now option 

as clear and add to cart is running in any sequence so we need to make the buynow function inside the _app.js


tut 52 is using react toastify to give alert on essential changes

example added item to cart
npm i react-toastify
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  const notify = () => toast("Wow so easy!");
   <button onClick={notify}>Notify!</button>
    <ToastContainer />

    toast container told us how the toast will be displayed

we can check its demo and documentation so we can change there and then copy paste it    


  ////// example applying on slug page

copy toast container from the demo after making adjustment from the options 
and rep[lace with toast container tag in html]

and now copy toast emitter and place in place oof toast

tut 53  customizing pages 

making other pages same as hoodies

and run the api add product and change the content in body of the request

and now similarly for stickers page and mugs
tut 54 making the signup

so first need to make the api

in extension make the Signuprequest in our collection of thunder client

{
  "name":"AnkurSharma",
  "email":"xyz@gmail.com",
  "password":"password"
  
  
}
password never store as plain text but for now just for checking

tut 55 making the login page

made login page and made a new request in the extension

   router.push("http://localhost:3000")  used for redirecting



   ENCRYPTION OF THE DATA FOR THE LOGIN WE ARE USING JWD
SO WHEN GETTING THE NAME AND PASSWORD WE ARE USING DESTRUCTURING IN SIGNUP.JS  API

//////////////////////////////////   USED CRYPTO JS

npm install crypto-js

var CryptoJS = require("crypto-js");

and now the password is encoded with the secret key

used aes 

CryptoJS.AES.encrypt(req.body.object,"secret key").toString()
so this object will be encrypted by a secret key
now we can make account and check


so now need to make changes in the loginjs api

due to salting everytime we encrypt we get different password to we will use decrypt function now


///////////////////////////////////////// TUT 57 ADDING JWT

JSON WEB TOKEN

it have 3 parts header, payload(the data it is carrying ) and then signature(secret part and only known by the server)

by this secret we can sign a given data and secret can only change data and if changed without it so it can tell us

npm i jsonwebtoken

var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');   by this return that is given by res status is now given by this and jwtsecret used
and now return token as response


now if we login by the api we can see the difference

now we can also copy the token and check it from original site for the details

we can use expires in to make the token expire automatically after a particular time

var token = jwt.sign({ foo: 'bar' }, 'shhhhh',{
  expiresIn:"2d"});   now the user is logged in for 2 days 


  ///////////////////////////////////// tut 58 making login and log out

so we want to set the token inside our app.js file

when want to re render navbar so we will change the key in _app.js file

modifying navbar



