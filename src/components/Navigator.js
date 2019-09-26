import React, {Component} from "react"
import "./Navigator.css"

class Navigator extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a class="active" href="#herf">Home</a></li>
                    <li><a>About Me</a></li>
                </ul>
            </div>
        )
    }
}

export default Navigator;