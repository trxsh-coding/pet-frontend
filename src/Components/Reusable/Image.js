import React from 'react'

const ReusableImage = (props) => {
    const {
        size,
        width,
        height,
        rounded,
        link = '',
        fromServer = false,
        styles,
    } = props;
    const imageStyle = {
        backgroundColor:'#BDBDBD',
        width: size ? size : width,
        height: size ? size : height,
        borderRadius: rounded ? '50%' : 0,
        objectFit: 'cover',
        ...styles
    };
   const imageWrapper =  <div className='imageWrapper' style={imageStyle} />;

   const urlPath = fromServer && link ? link.contentURL : link;

   const image = <img src={urlPath} alt="Logo" style={imageStyle} />;
   return link ? image : imageWrapper;
};

export default ReusableImage;
