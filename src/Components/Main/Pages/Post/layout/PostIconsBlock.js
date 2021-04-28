import ModalLikes from "./modalLikes";
import liked from "../../../../../Assets/svg/liked.svg";
import {createLike, deleteLike} from "../../../../../store/modules/like";
import like from "../../../../../Assets/svg/like.svg";
import comments from "../../../../../Assets/svg/comments.svg";
import bookmarkIcon from "../../../../../Assets/svg/bookmark.svg";
import bookmarkedIcon from "../../../../../Assets/svg/bookmarked.svg";

import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createBookmark, deleteBookmark} from "../../../../../store/modules/bookmark";
import useCurrentUser from "../../../../../CustomHooks/useCurrentUser";
import useProtectCallback from "../../../../../CustomHooks/useProtectCallback";
import useToast from "../../../../../CustomHooks/useToast";
import {EToastsTypes} from "../../../../Reusable/Toast/types";
import {useHistory} from "react-router-dom";

function PostIconsBlock(props) {
    const {
        amountOfComments,
        id,
        amountOfLikes,
        likeId,
        isPostCreator,
        likes,
        bookmarkId
    } = props;
    const dispatch = useDispatch();
    const history = useHistory();
    const [visible, setVisible] = useState(false);
    const {user} = useCurrentUser();
    const protectedAction = useProtectCallback({
        history,
        options: {
            postId: id
        }
    })

    function onPressLikeAction() {
        if (likeId) dispatch(deleteLike(id, likeId));
        else if (!isPostCreator) dispatch(createLike(id));
        else if (isPostCreator && Object.values(likes).length) setVisible(true);
    }

    const protectedLikeAction = () => {
        protectedAction(onPressLikeAction)
    }

    const protectedBookmarkAction = () => {
        protectedAction(onPressBookmarkAction)
    }

    function onPressBookmarkAction() {
        if (bookmarkId === null) dispatch(createBookmark(id));
        else dispatch(deleteBookmark(id));
    }

    const onLikeDelete = () => dispatch(deleteLike(id, likeId.id))

    return (
        <div>
            <ModalLikes
                visible={visible}
                action={() => setVisible(false)}
                likes={likes}
            />
            <div className='flex-align-center icons-block flex-between'>
                <div className='flex '>
                    {likeId
                        ? <div className='flex-align-center mr-20 pointer'>
                            <img src={liked} onClick={onLikeDelete}/>
                            <span className='ml-10'>{amountOfLikes}</span>
                        </div>
                        : <div className='flex-align-center mr-20 pointer'>
                            <img src={like} onClick={protectedLikeAction}/>
                            <span className='ml-10'>{amountOfLikes}</span>
                        </div>
                    }
                    <div className=" flex-align-center pointer">
                        <img src={comments} width={20} height={19}/>
                        <span className='ml-10'>{amountOfComments}</span>
                    </div>
                </div>
                <div className=" flex-align-center pointer">
                    {!bookmarkId
                        ? <img src={bookmarkIcon}
                               width={20}
                               height={19}
                               onClick={protectedBookmarkAction}
                        />
                        : <img src={bookmarkedIcon}
                               width={20}
                               height={19}
                               onClick={protectedBookmarkAction}
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default PostIconsBlock;