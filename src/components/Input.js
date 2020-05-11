import React from 'react';
import { ShowInput } from './ShowInput'
import '../styles/infobox.css'


let a = {};
export class Input extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            isChecked1: false,
            isChecked2: false,
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: ""
        }
    }


    userNameChangeHandler = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    firstNameChangeHandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    lastNameChangeHandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    phoneNumberChangeHandler = (event) => {
        this.setState({
            phoneNumber: event.target.value
        })
    }

    emailChangeHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    toggleChange1 = () => {
        this.setState({
            isChecked1: !this.state.isChecked1
        })
    }
    toggleChange2 = () => {
        this.setState({
            isChecked2: !this.state.isChecked2
        })
    }


    render() {
        return (

            <div id='input'>
                <div id='inputbox'>
                    <h2>Enter Info</h2>
                    <input
                        type={'text'}
                        name={'username'}
                        placeholder={'Username'}
                        value={this.state.username}
                        onChange={this.userNameChangeHandler}
                    />

                    <br /> <br />

                    <input
                        type={'text'}
                        name={'firstName'}
                        placeholder={'First Name'}
                        value={this.state.firstName}
                        onChange={this.firstNameChangeHandler}
                    />

                    <br /> <br />

                    <input
                        type={'text'}
                        name={'lastName'}
                        placeholder={'Last Name'}
                        value={this.state.lastName}
                        onChange={this.lastNameChangeHandler}
                    />

                    <br /> <br />

                    <input
                        type={'email'}
                        name={'email'}
                        placeholder={'Email'}
                        value={this.state.email}
                        onChange={this.emailChangeHandler}
                    />

                    <br /> <br />

                    <input
                        type={'number'}
                        name={'phoneNumber'}
                        placeholder={'Phone Number'}
                        value={this.state.phoneNumber}
                        onChange={this.phoneNumberChangeHandler}
                    />

                    <br /> <br />

                    <input
                        type={'checkbox'}
                        name={'checkbox1'}
                        onChange={this.toggleChange1}
                    />

                    <label>Banana ?</label>

                    <br />

                    <input
                        type={'checkbox'}
                        name={'checkbox2'}
                        onChange={this.toggleChange2}
                    />

                    <label>Orange ?</label>

                    <br /> <br />

                    <input type="button"
                        value="Show Info"
                        onClick={() => {
                            a = this.state;
                            this.forceUpdate()
                        }}
                    />
                </div>

                <ShowInput showInput={a} />
            </div>
        )
    }
}