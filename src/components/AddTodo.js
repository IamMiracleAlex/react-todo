import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

     onChange = (e) => {
         this.setState( {[e.target.name]: e.target.value })
     }

     onSubmit = (e) => {
         e.preventDefault()
         this.props.addTodo(this.state.title);
         this.setState({ title: "" });
     }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex', marginTop: '8px' }}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Add your todo"
                    style={{ flex: '10', padding: '10px' }}
                     onChange = {this.onChange}
                     />
                <input 
                    type="submit" 
                    value = "Submit"
                    style={{ flex: '2' }}
                   
                    />
            </form>
        )
    }
}

export default AddTodo


