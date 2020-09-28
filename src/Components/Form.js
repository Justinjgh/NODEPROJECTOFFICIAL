import React from 'react';
import './Form.css';

const Form = (props) =>{
  return(
    <div className='FormContainer'>
      <form onSubmit={props.onFormSubmit}>
        
        
        <input type='text1' onChange={props.onInputChange} value={props.name} name='name' placeholder='Your Name'/>

        <input type='text' onChange={props.onInputChange} value={props.comment} name='comment' placeholder='Your Comment'/>

        <input type='submit' value='Submit'/>
      </form>
    </div>

  )
}

export default Form;

