import React from 'react';
import Navbarprofile from './Navbarprofile'

class Account extends React.Component {
    render() {
        return (
            <div className="mainContainer">
                <Navbarprofile />
                <div className="contentAccount">
                    <h2>Actualiza los datos de tu cuenta</h2>

                </div>
            </div>
        )
    }
}

export default Account;