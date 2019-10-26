import React, {Component} from "react"
import "./Content.css"

class Content extends Component {
    render() {
        return (
            <div className="container" id="summary-container">
                <div className="row">
                    <div className="col-md-12 blogs">
                        <h1>知识图谱构建</h1>
                        <p>知识图谱构建需要很大的工作量。</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;