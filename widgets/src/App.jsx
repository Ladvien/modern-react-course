import React, { Component } from 'react'
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
    {
        title: 'What is React?',
        content: 'React is a frontend framework.'
    },
    {
        title: 'Why use React?',
        content: 'It favorite library among engineers.'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components.'
    },
]


class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Search />
            </div>
         );
    }
}
 
export default App;