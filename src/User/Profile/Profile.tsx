import { useState } from 'react';
import './Profile.css';


export default function Profile(props:any) {

    const username = props.Username;
    const email = props.Email;

    if(username != null && email != null) {
        return (
            <div className="ProfileContainer">
                <div className="Profile">
                    <h1>U bent ingelogd! :)</h1>
                </div>
                <div>
                    <a>Uw username: {username}</a>
                </div>
                <div>
                    <a>Uw email: {email}</a>
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
