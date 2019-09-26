import React, {Component} from 'react';
import Header from './components/Header'
import Navigator from './components/Navigator'
import "./App.css"

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header></Header>
                <Navigator></Navigator>
            </div>
        )
    }
}

export default App;