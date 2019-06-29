import React, { Component } from 'react'
import propTypes from 'prop-types';
export default class TodoItem extends Component {

    getStyle = () => {
           return {
               background : '#f4f4f4', 
               padding  : '10px' ,
               borderBottom : '1px solid #ccc',
               textDecoration : this.props.item.competed ? 'line-through' : 'none'
           }
    }
    btnStyle =() =>{
        return {
                float : 'right',
                padding : '3px',
                backgroundColor : 'red'
        }
    }
    render() {
        const {id , title} = this.props.item;
        return (
            <div style = {this.getStyle()} >
                <input type ='checkbox' onChange ={this.props.markCompelted.bind(this , id) } /> {' '}
                {title}
                <button 
                style={this.btnStyle()}
                onClick = {this.props.delItem.bind(this,id)}
                >
                
                {'X'}</button>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    item : propTypes.object.isRequired
}
