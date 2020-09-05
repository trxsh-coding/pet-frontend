import React, {useEffect, useState} from 'react';
import '../styles.scss'

function AmountInfoBlock(props) {
    const {amountOfFollowers, amountOfPosts} = props;

    return (
        <div className='amount-info-block '>
            <div className='flex-align-center flex-evenly'>
                <div>
                    <span className='amount-span pr-7'>
                         {amountOfFollowers}
                     </span>
                    <span className='font-16 amount-word-span'>Подписчика</span>
                </div>
                <div className='hr-info'/>
                <div>
                    <span className='amount-span pr-7'>
                         {amountOfPosts}
                     </span>
                    <span className='font-16 amount-word-span'>Поста</span>
                </div>
            </div>
        </div>
    );
}

export default AmountInfoBlock;
