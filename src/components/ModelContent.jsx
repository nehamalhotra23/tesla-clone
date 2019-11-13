import React from 'react';
import Navbar from './Navbar';
import PropTypes from 'prop-types';
import { Player } from 'video-react';

function ModelContent(props) {
    return (
        <div>
            <Navbar />
            <div className="video">
                <Player autoPlay loop muted playsInline>
                    <source type='video/mp4' src={props.video} />
                </Player>
            </div>
            <div>
                <h3>{props.info}</h3>
            </div>
        </div>
    );
}

ModelContent.propTypes = {
    info: PropTypes.string,
    video: PropTypes.string
};

export default ModelContent;