import React from 'react';
import ReusableImage from "../../../Reusable/Image";
import { withRouter } from 'react-router-dom'
import './styles.scss'

function PetShortAnnotation(props) {
    const {avatar, name, type, ages} = props;
    return (
        <div className="pet-short-annotation flex-align-center mr-10">
            <ReusableImage size={80} rounded link={avatar} fromServer />
            <div className="pet-info-block flex-column ml-10">
                <span>{name}</span>
                <span>{type}, {ages} года</span>
            </div>
        </div>
    );
}

export default withRouter(PetShortAnnotation);
