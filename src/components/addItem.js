import React, { Component } from 'react'

export default class addItem extends Component {
    state = { 
        title : ''
    }

    onChange =(e) => {
        this.setState({title : e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault();
       this.props.addItem(this.state.title);
       this.setState({title : ' '})
    }
    render() {
        return (
            <form style ={{display : 'flex' , marginBottom : '20px'}}>
                <input 
                type = 'text' 
                placeholder ='Add A task '
                value = {this.state.title} // To reset the empty field after submit
                style ={{ flex : '10' }}
                name ='title' 
                onChange = {this.onChange}
                />
                <input 
                type = 'submit' 
                value = 'submit'
                style ={{ flex : '1'}}
                className ='btn'
                name ='title' 
                onClick ={this.onSubmit}
                />

            </form>
        )
    }
}
