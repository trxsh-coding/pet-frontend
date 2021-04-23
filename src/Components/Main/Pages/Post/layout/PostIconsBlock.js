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
		const [visible, setVisible] = useState(false);
		const user = useCurrentUser();
		
		function onPressLikeAction() {
				if (likeId !== null) dispatch(deleteLike(id, likeId));
				else if (!isPostCreator) dispatch(createLike(id));
				else if (isPostCreator && Object.values(likes).length) setVisible(true);
		}
		
		const likeIndex = likes.findIndex(el => el.creatorId === 1)
		
		console.log(likeIndex);
		
		function onPressBookmarkAction() {
				if (bookmarkId === null) dispatch(createBookmark(id));
				else dispatch(deleteBookmark(id));
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
										{likeIndex ?
												<div className='flex-align-center mr-20 pointer'>
														<img src={liked} onClick={() => dispatch(deleteLike(id, likeId.id))}/> <span
														className='ml-10'>{amountOfLikes}</span>
												</div> :
												<div className='flex-align-center mr-20 pointer'>
														<img src={like} onClick={() => onPressLikeAction()}/> <span
														className='ml-10'>{amountOfLikes}</span>
												</div>
										}
										<div className=" flex-align-center pointer">
												<img src={comments} width={20} height={19}/> <span className='ml-10'>{amountOfComments}</span>
										</div>
								</div>
								<div className=" flex-align-center pointer">
										{bookmarkId === null
												? <img src={bookmarkIcon}
												       width={20}
												       height={19}
												       onClick={() => onPressBookmarkAction()}
												/>
												: <img src={bookmarkedIcon}
												       width={20}
												       height={19}
												       onClick={() => onPressBookmarkAction()}
												/>
										}
								</div>
						</div>
				</div>
		)
}

export default PostIconsBlock;