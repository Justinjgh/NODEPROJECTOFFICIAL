import React from 'react';
import List from './List';

const ListItem = (props) => {
    return ( 
    <tr>
        <td>{props.data.name}</td>
        <td>{props.data.comment}</td>
        <td>
        <button className="deleteButton" onClick = {() => {props.onDeleteClick(props.listIndex)}}>Delete</button>
        </td>
        <td>
        <button className="editButton" onClick = {() => {
        props.onEditClick(props.listIndex)}}>Edit</button>
        </td>
    </tr>
    )
  }

  export default ListItem;

