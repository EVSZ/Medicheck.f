import { useState } from 'react';
import './Profile.css';


export default function Profile(props:any) {

    const username = props.Username;
    const password = props.Password;

    if(username != null && password != null) {
        return (
            <div className="ProfileContainer">
                <div className="Profile">
                    <h1>U bent ingelogd! :)</h1>
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
