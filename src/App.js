import React, {Component} from 'react';
import Header from './components/Header'
import Navigator from './components/Navigator'
import Content from './components/Content'
import Page from './components/page'
import {
    Router,
    Route,
    // Link
} from 'react-router'
import "./App.css"

class App extends Component {
    render() {
        return (
            <Router className="App">
                <Header></Header>
                <Navigator></Navigator>
                <Route path="/" component={Content}></Route>
                <Route path="about" component={Page}></Route>
            </Router>
        )
    }
}

export default App;