import React from 'react';
import '../styles/infobox.css'

export class ShowInput extends React.Component{

    render(){        
        return(
            <div id='showinput'>
                <h2>Show Info</h2>
                <label>User Name: {this.props.showInput.userName}</label><br/><br/>
                <label>First Name: {this.props.showInput.firstName}</label><br/><br/>
                <label>Last Name: {this.props.showInput.lastName}</label><br/><br/>
                <label>Phone Number: {this.props.showInput.phoneNumber}</label><br/><br/>
                <label>Email: {this.props.showInput.email}</label><br/>
                {this.props.showInput.isChecked1 && <img src="https://media1.giphy.com/media/IB9foBA4PVkKA/giphy.gif" alt={'banana'} />}
                {this.props.showInput.isChecked2 && <img src="https://media.tenor.com/images/3e8562f5ca35a986d5e21d42a874c314/tenor.gif" alt={'banana'} />}
            </div>
        )
    }
}