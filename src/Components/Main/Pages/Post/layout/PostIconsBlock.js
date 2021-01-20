import ModalLikes from "./modalLikes";
import liked from "../../../../../Assets/svg/liked.svg";
import {createLike, deleteLike} from "../../../../../store/modules/like";
import like from "../../../../../Assets/svg/like.svg";
import comments from "../../../../../Assets/svg/comments.svg";
import bookmark from "../../../../../Assets/svg/bookmark.svg";

import React, {useContext, useState} from "react";
import {useDispatch} from "react-redux";

function PostIconsBlock(props) {
    const {
        amountOfComments,
        id,
        amountOfLikes,
        likeId,
        isPostCreator,
        likes,
    } = props;
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false);
    function onPressLikeAction() {
        if(likeId !== null) dispatch(deleteLike(id, likeId))
        else if(!isPostCreator) dispatch(createLike(id))
        else if(isPostCreator && Object.values(likes).length) setVisible(true)
    }
    return (
        <div>
            <ModalLikes
                visible={visible}
                action={() => setVisible(false)}
                likes={likes}
            />
            <div className='flex-align-center icons-block flex-between'>
                <div className='flex '>
                    {likeId !== null ?
                        <div className='flex-align-center mr-20 pointer'>
                            <img src={liked} onClick={() => dispatch(deleteLike(id, likeId.id))}/> <span className='ml-10'>{amountOfLikes}</span>

                        </div> :
                        <div className='flex-align-center mr-20 pointer'>
                            <img src={like} onClick={() => onPressLikeAction()}/> <span className='ml-10'>{amountOfLikes}</span>

                        </div>
                    }
                    <div className=" flex-align-center pointer">
                        <img src={comments} width={20} height={19}/> <span className='ml-10'>{amountOfComments}</span>
                    </div>
                </div>
                <div className=" flex-align-center pointer">
                    <img src={bookmark} width={20} height={19}/>
                </div>
            </div>
        </div>
    )
}

export default PostIconsBlock;