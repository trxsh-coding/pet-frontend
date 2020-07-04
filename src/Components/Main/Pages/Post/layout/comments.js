import React, {useEffect, useState} from 'react';
import comments from '../../../../../Assets/svg/comments.svg'
import '../styles.scss'
import {normalizeTime} from "../../../../../Utils/timestamp";
import ReusableInput from "../../../../Reusable/Input";
import {useDispatch} from "react-redux";
import {createComment} from "../../../../../store/modules/post";
import history from "../../../../../services/history";
function PostComments(props) {
    const {comments, id} = props;
    const dispatch = useDispatch()
    const [comment, setComment] = useState('');
    const onCommentSaved = async () => {
        await dispatch(createComment({
            id,
            description:comment
        }))
        setComment('')
    }
    const RenderComments = _ => comments.map( comment => {
        return (
            <div className='flex-between comment-block mb-15'>
                <div className="comment-info-block ">
                    <span onClick={() => history.push(`/user/${comment.author._id}`)} className='comment-username'>{comment.author.username} </span>
                    <span className='comment-description'>{comment.description}</span>
                </div>
                <span className='timestamp'>{normalizeTime(comment.date)}</span>
            </div>
        )
    })

    return (
        <>
            <RenderComments />
            <ReusableInput onChange={(e) => setComment(e)} value={comment} action={() => onCommentSaved()}/>
        </>
    )
}

export default PostComments;
