import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = () => {
        alert('Hello, World!');
    }

    showMessage = (name) => {
        alert('hello' + name);
    }
    
    render() {
        return (
            <div>
                {/* Cách 1 truyền callback trực tiếp */}
                {/* <button onClick={this.handleClick} className="btn btn-success">Click me!!</button> */}
                {/* <button onClick={this.showMessage.bind(this,'John')} className="btn btn-primary">showMessage</button> */}

                <br/><br/>
                {/* Cách 2 truyền hàm nặc danh */}
                <button className="btn btn-success" onClick={() => {
                    this.showMessage('John');
                    // this.handleClick();
                }}>Show message</button>
                
            </div>
        )
    }
}
