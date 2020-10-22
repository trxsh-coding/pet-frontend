import React, {useContext, useState} from "react";
import ReusableImage from "../../../../Reusable/Image";
import {normalizeTime} from "../../../../../Utils/timestamp";
import {useHistory} from 'react-router-dom'
import ResponsiveContext from "../../../../../Context/responsiveContext";

function MissingAnnotation({author, description, title, reward, date, id}) {
    const history = useHistory();
    const mobile = useContext(ResponsiveContext)
    const MissingBody = _ => {
        return (
            <div className='flex-column self-stretch flex-evenly ml-20 pointer' onClick={() => history.push(`/missing/${id}`)}>
                <span className={`${mobile? 'font-14' : 'font-18'}`}>{title}</span>
                <span className={`${mobile ? 'font-12' : 'font-14'} light-weight`}>{description}</span>
            </div>
        )
    }
    const MissingReward = _ => {
        return (
            <div className='flex-column self-stretch flex-evenly ml-20 flex-align-end'>
                <span className='date'>{normalizeTime(date, true)}</span>
                {!mobile ?
                    <span className='font-18'>Вознаграждение: <span className='reward'>{reward}</span></span> :
                    <span className='reward'>{reward}</span>
                }
            </div>
        )
    }
    return (
        <div className='flex-align-center flex-between missing-annotation'>
            <ReusableImage link={author.avatar} size={60} rounded fromServer/>
            <div className='flex-align-center flex-1 flex-between'>
                <MissingBody />
                <MissingReward />
            </div>
            <div className='hr-block'/>
        </div>
    )
}

export default MissingAnnotation