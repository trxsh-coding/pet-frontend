import React, {useEffect, useState} from 'react';
import ReusableImage from "../../../../Reusable/Image";
import comments from '../../../../../Assets/svg/comments.svg'
import '../styles.scss'
function PostBody(props) {
    const {description, picture, amountOfComments} = props;
    return (
        <div className='post-body mt-12'>
            <ReusableImage width={653} height={500} fromServer link={picture}/>
            <div className="icons-block flex-align-center"><img src={comments} width={20} height={19}/> <span className='ml-10'>{amountOfComments}</span></div>
            <div className='hr'/>
            <div className='description-block'><span>{description}</span></div>
        </div>
    );
}

export default PostBody;
