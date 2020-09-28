import React from 'react';
import './List.css';
import ListItem from './ListItem';
import axios from 'axios';


class List extends React.Component{
    constructor(props){
        super(props);
        // this.state = {

        // }
       
        this.onDeleteClick = this.onDeleteClick.bind(this);
    
    }

    onDeleteClick (index) {
        axios.delete(`/registrations/${index}`)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error);
        })
    
      }

      
   onEditClick (index) {
    const newName = prompt('Edit your name : ')
    const newComment = prompt('Edit your comment : ')
    console.log(newName, newComment)
    axios.put(`/registrations/${index}`, { name: newName, comment: newComment })
    .then(response => { 
      console.log(response.data)

    })
    .catch(error => {
        console.log(error);
          
    });
}


    render(){
        return (
            <div className="userInformation">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Comment</th>
                        
                    </tr>

            {/* The children of List are multiple listItem components - how many their are depends on the number of items in the registrations array. We can dynamically render all of them using .MAP !!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                    {this.props.registrations.map((item, index) => {
                    return <ListItem data={item}
                            onDeleteClick={this.onDeleteClick}
                            listIndex={index}
                            onEditClick={this.onEditClick}          />
                    })}
                   
                </table>
            </div>
        )
    }
}

export default List;