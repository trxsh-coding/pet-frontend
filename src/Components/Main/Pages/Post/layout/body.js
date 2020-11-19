import React, {useContext, useEffect, useState} from 'react';
import ReusableImage from "../../../../Reusable/Image";
import comments from '../../../../../Assets/svg/comments.svg'
import like from '../../../../../Assets/svg/like.svg'
import liked from '../../../../../Assets/svg/liked.svg'

import '../styles.scss'
import {useDispatch, useSelector} from "react-redux";
import {createLike, deleteLike} from "../../../../../store/modules/like";
import ResponsiveContext from "../../../../../Context/responsiveContext";
import ModalLikes from "./modalLikes";
import ReusablePlayer from "../../../../Reusable/VideoPlayer";
function PostBody(props) {
    const {
        description,
        picture,
        amountOfComments,
        id,
        amountOfLikes,
        likeId,
        petOwnerId,
        petId,
        isPostCreator,
        likes,
        content
    } = props;

    const dispatch = useDispatch()
    const mobile = useContext(ResponsiveContext)
    const [visible, setVisible] = useState(false);
    console.log(isPostCreator)
    function onPressLikeAction() {
        if(likeId !== null) dispatch(deleteLike(id, likeId))
        else if(!isPostCreator) dispatch(createLike(id, petOwnerId, petId))
        else if(isPostCreator && Object.values(likes).length) setVisible(true)
    }

    const RenderContent = _ => {
        return content.contentType === 'video' ? (
            <ReusablePlayer publicId={content.publicId} autoplay={true}/>
        ) :
            (
                <ReusableImage width={!mobile ? 653 : '100%'} height={mobile ? 288 : 500} fromServer link={content}/>
            )
    }

    return (
        <div className='post-body mt-12 '>
            <ModalLikes
                visible={visible}
                action={() => setVisible(false)}
                likes={likes}
            />
            <RenderContent />
            <div className='flex-align-center icons-block'>
                {likeId ?
                    <div className='flex-align-center mr-20'>
                        <img src={liked} onClick={() => dispatch(deleteLike(id, likeId))}/> <span className='ml-10'>{amountOfLikes}</span>

                    </div> :
                    <div className='flex-align-center mr-20'>
                        <img src={like} onClick={() => onPressLikeAction()}/> <span className='ml-10'>{amountOfLikes}</span>

                    </div>
                }
                <div className=" flex-align-center">
                    <img src={comments} width={20} height={19}/> <span className='ml-10'>{amountOfComments}</span>
                </div>

            </div>
            <div className='hr'/>
            <div className='description-block'><span>{description}</span></div>
            <div className='hr mt-16 mb-16'/>

        </div>
    );
}

export default PostBody;
