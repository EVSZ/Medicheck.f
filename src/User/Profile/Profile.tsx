import { useState } from 'react';
import './Profile.css';


export default function Profile(props:any) {

    const email = props.Email;
    const name = props.Name;
    const birthDate = props.BirthDate;
    const gender = props.Gender;

    if(name != null && email != null && birthDate != null && gender != null) {
        return (
            <div className="ProfileContainer">
                <div className="Profile">
                    <h1>U bent ingelogd! :)</h1>
                </div>
                <div>
                    <a>Uw naam: {name}</a>
                </div>
                <div>
                    <a>Uw email: {email}</a>
                </div>
                <div>
                    <a>Uw geboortedatum: {birthDate}</a>
                </div>
                <div>
                    <a>Uw geslacht: {gender}</a>
                </div>
            </div>
        )
    } else {
        return (
            <div className="ProfileContainer">
                <div className="Profile">
                    <h1>U bent niet ingelogd! :(</h1>
                </div>
            </div>
        )
    }
}
