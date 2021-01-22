import React, {useContext, useEffect, useState} from 'react';
import '../styles.scss'
import PostHeader from "./Header";
import PostComments from "./comments";
import PostIconsBlock from "./PostIconsBlock";
import {useSelector} from "react-redux";

function PostBody(props) {
    const {
        description,
        author,
        post
    } = props;
    const current = useSelector( s => s.user.current);

    const RenderComments = _ => {
        return post && post.comments ? (
            <div className="post-comments">
                <PostComments comments={post.comments} id={post._id}/>
            </div>
        ) : <span>Комментириев еще нет</span>
    }

    const {id : authorId, avatar, name} = author;
    const {
        id,
        likeId,
        likes,
        amountOfLikes,
        bookmark
    } = post;
    return (
        <div className='post-body ml-20'>
            <PostHeader id={authorId} link={avatar} date={post.date} username={name}/>
            <div className='hr mt-10 mb-10'/>
            <PostIconsBlock
                id={id}
                likes={likes}
                picture={post.picture}
                amountOfComments={post.comments ? post.comments.length : 0}
                amountOfLikes={amountOfLikes}
                description={post.description}
                likeId={likeId}
                bookmarkId={bookmark}
                content={post.content}
                isPostCreator={current === post.authorId.ownerId}
            />
            <div className='flex-wrap mt-12'><span>{description}</span></div>
            <div className='hr mt-20 mb-10'/>

            <RenderComments/>
        </div>
    );
}

export default PostBody;
