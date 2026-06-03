import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

/*
function MyApp(){
    return(
        <div>
            <h1>custom app</h1>
        </div>

    )
}
*/


//this doesnt work because the syntax is not correct and react render function mut be expecting a different syntax
/*const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click me to visit google'

    
}
*/

// evaluated expression usage const anotherUser = 'coffee and me '

//this is the react synatx
/*
const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank',
    },
    'click me to visit google',
    anotherUser
)
    */


ReactDOM.createRoot(document.getElementById('root')).render(

    //reactElement

    <App/>

)
 