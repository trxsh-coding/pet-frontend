import React, {useEffect, useState} from 'react';
import ReusableImage from "../../../../../Reusable/Image";
import history from "../../../../../../services/history";

function LikedItem({pet, author, date, post, comment}) {
    return (
        <div className='flex-align-start flex-between'>
            <div className='flex-align-center'>
                <ReusableImage
                    size={60}
                    link={author.avatar}
                    fromServer
                    rounded
                />
                <div className='ml-15'>
                    <div>
                        <span className='author-link-name pointer' onClick={() => history.push(`/user/${author.id}`)}>{author.username}</span>
                        <span className='font-14 light-weight'> оценил фото </span>
                        <span className='author-link-name pointer' onClick={() => history.push(`/pet/${pet.id}`)}>{pet.name}</span>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <ReusableImage
                    styles={{borderRadius:'4px'}}
                    size={60}
                    link={post.picture}
                    fromServer
                />
            </div>
        </div>
    )
}

export default LikedItem