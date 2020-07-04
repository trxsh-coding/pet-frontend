import React from 'react'

const ReusableImage = (props) => {
    const {size, width, height, rounded, link = '', fromServer = false} = props;
    const imageStyle = {
        backgroundColor:'#BDBDBD',
        width: size ? size : width,
        height: size ? size : height,
        borderRadius: rounded ? '50%' : 0,
        objectFit: 'cover',
        border:'0.5px solid #C4C4C4'
    };
   const imageWrapper =  <div className='imageWrapper' style={imageStyle} />;

   const urlPath = fromServer ? process.env.REACT_APP_ASSETS_PATH + `/${link}` : link;

   const image = <img src={urlPath} alt="Logo" style={imageStyle} />;

   return link ? image : imageWrapper;
};

export default ReusableImage;
