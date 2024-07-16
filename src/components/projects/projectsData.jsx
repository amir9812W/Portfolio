import todo1 from '../../fukcing portfolio/todolist1.png'
import todo2 from '../../fukcing portfolio/tolist2.png'
import firegram from '../../fukcing portfolio/openweather.png'
import nani from '../../fukcing portfolio/naniup.png'
import res  from '../../fukcing portfolio/res.png'
import order from '../../fukcing portfolio/order.png'
import render from '../../fukcing portfolio/render.png'


const data1 = [
  {
    id : 1,
    projectName : "To do list v1",
    link : 'https://amir9812w.github.io/my-website/',
    github : 'https://github.com/amir9812W/my-website',
    image : todo1,
    describe : 'My first legit project that i have ever did. this project is pure HTML CSS JAVA SCRIPT and for the backend its powered by google firebase. In this app you just Enter your Todos and the text will be sent to the database and every one can see the information and i made this specifically for group projects.',
    background : 'rgba(0,12,100,9.2)'
  },
  {
    id : 2,
    projectName : "To Do list V2",
    link : 'https://todolistversion2.netlify.app/',
    image : todo2,
    github : 'https://github.com/amir9812W/todolist',
    describe : 'This is my first React project and it has the same functionality like Todo list version 1 but added some simple features. In this project i learned a lot of usefull react concepts like props , conditional rendering and rendering elements dynamically and so on...',
    background : 'rgba(0,0,0,9.2)'
  },
  {
    id : 3,
    projectName : "Weather App",
    link : 'https://weatherprojectfinal.netlify.app/',
    image : firegram,
    github : "https://github.com/amir9812W/1221",
    describe : 'This is my second react project and as the title says its a simple  weather app project where you can enter your city name and it will get data via Open weather API. this project helped me a lot in order to work with the APIs.',
    background : 'rgba(0,0,0,9.2)'
  },
  {
    id : 4,
    projectName : "Resturant app",
    link : 'https://xrestaurant.netlify.app/',
    image : res,
    github : "https://github.com/amir9812W/restaurant-app",
    describe : 'In this app, users can select foods, determine the quantity, and submit their orders with their names. The order will then be sent to the Firebase database. I was inspired to create this app by Amazons ordering system',
    background : 'rgba(0,0,0,9.2)'
  },
  {
    id : 5,
    projectName : "view the orders",
    link : 'https://xordered.netlify.app/',
    image : order,
    github : "https://github.com/amir9812W/restaurant-app/tree/main",
    describe : 'After sending the data to the database, users can view their orders in a user interface. They can review the data and delete it if necessary. I did not invest much time in designing a more professional UI because I did not consider it necessary...',
    background : 'rgba(0,0,0,9.2)'
  },
  {
    id : 7,
    projectName : "Nani Up",
    link : 'https://naniup.netlify.app/',
    image : nani,
    github : 'https://github.com/amir9812W/chat',
    describe : "The entire idea for this app came from a YouTube tutorial. I didn't handle the app structure or data management system. My contributions to this app include redesigning the UI and adding user authentication using Firebase. While I'm not a professional in Firebase, given access to its documentation, I can implement any required features.In this app you can make a new acount and sign in with your username and profile picture and then in the search area you can search for Amir and then Hit Enter then click on my avatar to start a chat with me.",
    background : 'rgba(0,0,0,9.2)'
  },
  {
    id : 8,
    projectName : "List of renders",
    link : 'https://gallery-renders.netlify.app/',
    image : render,
    github : '',
    describe : 'Here are my top image renders and animations created using Blender 3.4. Its been a while since I rendered something. 3D modeling and animation are my hobbies, and I would like to do them in my free time, but I havent been able to render anything because I was studying German and programming simultaneously for the past year. I hope you consider hiring me so I can pursue my hobby and join the Blender community in Germany, Since there is none Iran.',
    background : 'rgba(0,0,0,9.2)'
  }
]

export default data1