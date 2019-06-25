import React from 'react';
import Navbarprofile from './Navbarprofile'

class Profile extends React.Component {
    render() {
        return (
            <div className="mainContainer">
                <Navbarprofile />
                <div className="contentProfile">
                    <h2>Perfil</h2>

                </div>
            </div>

        )
    }
}

export default Profile;