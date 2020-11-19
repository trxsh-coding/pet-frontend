import React, {useEffect, useState} from 'react';
import '../styles.scss'
import {normalizeWord} from "../../../../../Utils/wordNormalize";

function AmountInfoBlock(props) {
    const {amountOfFollowers = 0, amountOfPosts = 0} = props;

    return (
        <div className='amount-info-block '>
            <div className='flex-align-center flex-evenly'>
                <div className='flex-align-center'>
                    <span className='amount-span pr-7'>
                         {amountOfFollowers}
                     </span>
                    <span className='font-16 amount-word-span'>{normalizeWord(amountOfFollowers, 'Подписчик')}</span>
                </div>
                <div className='hr-info'/>
                <div className='flex-align-center'>
                    <span className='amount-span pr-7'>
                         {amountOfPosts}
                     </span>
                    <span className='font-16 amount-word-span'>{normalizeWord(amountOfPosts, 'Пост')}</span>
                </div>
            </div>
        </div>
    );
}

export default AmountInfoBlock;
