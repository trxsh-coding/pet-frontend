import React from 'react'
import './reusable.scss'
const ReusableEmoji = (props) => {
    const {code, name, size} = props;
    const url = `https://twemoji.maxcdn.com/2/72x72/${code}.png`

    return (
        <img src={url} alt="" width={size} height={size}/>
    )
};

export default ReusableEmoji;
