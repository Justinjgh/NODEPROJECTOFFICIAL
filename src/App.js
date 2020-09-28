import React from 'react';
import Form from './Components/Form';
import axios from 'axios';
import List from './Components/List'



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      comment: '',
      registrations: [],
      title: ''
    }

  // State is temporary nonpersistant storage for user inputted information --- often we send inforamation saved in state to the server to be saved or editted


this.onInputChange = this.onInputChange.bind(this);
this.onFormSubmit = this.onFormSubmit.bind(this);
  }

onTitleChange = (e) => {
  e.preventDefault();
  this.setState({
    title: e.target.value
  })
}


// componentDidMount is triggered whenever the user first opens the url or refreshes the page - user does not have to click or do anything, automatically runs on page opening my version of componentDidMount sends a GET request to the server to retrieve or to GET the registrations array. the .THEN function runs when we have a response from the server. And then the registrations property of the state object is updated with the array from the server.

componentDidMount () {
  this.getRegistrationArray();
}

// Another lifecycle method - this is triggered by user interaction

componentDidUpdate () {
  this.getRegistrationArray();
}


getRegistrationArray () {
  axios.get('/registrations')
  .then(response => {
    this.setState({
      registrations: response.data
    })
  })
  .catch(error => {
    console.log(error);
  });
}

// updating the name and comment property of the state object based on user inputted text.

onInputChange (event) {
  event.preventDefault();
  this.setState({
    [event.target.name]: event.target.value
  })
}

// takes whattever user information was put in (whattever was saved to STATE by onInputChange) and sends that information off to our server.

onFormSubmit (event) {
  event.preventDefault();

  axios.post('/registrations', {
    name: this.state.name,
    comment: this.state.comment
  })
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
console.log(error);
  });
}

  render(){

    return(
    <div className='mainApp'>
      {/* THIS WAS A TEST DO NOT USE THIS <h1>{this.state.title}</h1>
      <input type='text' value={this.state.title} onChange={this.onTitleChange} />  THIS WAS A TEST DO NOT USE THIS */}
      <Form onInputChange={this.onInputChange}
            onFormSubmit={this.onFormSubmit}
            name = { this.state.name }
            comment = { this.state.comment }
      />

      <List 
      registrations = { this.state.registrations }
    
      />
      {/* Props are any type of value that gets passed from a parent component to a child component (functions, arrays, strings, variable, etc..) */}
    </div>
    )
  }

}

export default App;

// let props= {
//   onInputChange: this.onInputChange,
//   name: this.state.name,
//   comment: this.state.comment
// }