import tenSeconds from './images/ten-seconds-gif.gif';
import skal from './images/skal-gif.gif';
import lets from './images/LETS-gif.gif';

const projects = [
    {
        id: 1,
        title: "10 Seconds!",
        githubLink: "https://github.com/markussanders/ten-seconds",
        description: "'10 Seconds!' was inspired by a game I played at a Chinatown cafe in which you can recieve a free drink if you are able to stop a timer at exactly '10.000'.",
        website: "http://ten-seconds.herokuapp.com/",
        image: tenSeconds,
    },
    {
        id: 2,
        title: "SKÅL",
        githubLink: "https://github.com/markussanders/skal-react-app-frontend",
        description: "Skål ('cheers' in Danish) is a cocktail recipe web application for users to view, and save cocktail recipes. It was built with Ruby on Rails and React.",
        website: "",
        image: skal,        
    },
    {
        id: 3,
        title: "LET'S___.",
        githubLink: "https://github.com/markussanders/lets-app-frontend",
        description: "LET'S___. is a bucket listing/ Yelp clone application allowing users to search, view, and save businesses to their list. This allows them to get recommendations based off of their search history. This web application was built using Ruby on Rails and React.",
        website: "",
        image: lets,        
    },
    


]

export default projects;