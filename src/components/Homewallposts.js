import React from 'react';
import Navbarprofile from './Navbarprofile'

class HomeWallposts extends React.Component {
    render() {
        return (
            <div className="mainContainer">
                <Navbarprofile />
                <div className="contentWallPost">
                    <h2>Muro</h2>

                </div>
            </div>
        )
    }
}

export default HomeWallposts;