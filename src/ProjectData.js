import tenSeconds from './images/ten-seconds-gif.gif';
import skal from './images/skal-gif.gif';
import lets from './images/LETS-gif.gif';
import m3rch from './photos/m3rch-shop.png';

const projects = [
    {
        id: 1,
        title: "M3RCH Clothing",
        githubLink: "https://github.com/markussanders/m3rch",
        description: "M3RCH Clothing is an eCommerce clothing application built using React with Redux and Hooks, Firebase for authentication, OAuth and collection data, Node and Express.js for handling server-side Stripe credit card payments, Sass and Styled Components for visual styling, GraphQL for API requests.",
        website: "https://m3rch-clothing.herokuapp.com/",
        image: m3rch,   
    },
    {
        id: 2,
        title: "10 Seconds!",
        githubLink: "https://github.com/markussanders/ten-seconds",
        description: "'10 Seconds!' was inspired by a game I played at a Chinatown cafe in which you can recieve a free drink if you are able to stop a timer at exactly '10.000'.",
        website: "https://ten-seconds.herokuapp.com/",
        image: tenSeconds,
    },
    {
        id: 3,
        title: "SKÅL",
        githubLink: "https://github.com/markussanders/skal-react-app-frontend",
        description: "Skål ('cheers' in Danish) is a cocktail recipe web application for users to view, and save cocktail recipes. It was built with Ruby on Rails and React.",
        website: "",
        image: skal,        
    },
    {
        id: 4,
        title: "LET'S___.",
        githubLink: "https://github.com/markussanders/lets-app-frontend",
        description: "LET'S___. is a bucket listing/ Yelp clone application allowing users to search, view, and save businesses to their list. This allows them to get recommendations based off of their search history. This web application was built using Ruby on Rails and React.",
        website: "",
        image: lets,        
    },
    


]

export default projects;