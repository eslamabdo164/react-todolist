import React, { Component } from 'react';

export default class Todos extends Component {

    render() {
        const todos = this.props.todos;
        const items = todos.map(item => {
            return <li key={item.id}>
                {item.title}
            </li>
        })
        return (
            <div>
                <p>Today List is :- </p>
                <ul>
                    {items}
                </ul>
                
            </div>
        )
    }
}
