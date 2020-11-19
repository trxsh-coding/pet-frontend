import  ReactPlayer from 'react-player'
import React, {useContext} from "react";
import {Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import ResponsiveContext from "../../../Context/responsiveContext";


function ReusablePlayer({videoUrl, width='650' , height='500', publicId, autoplay=false}) {
    const mobile = useContext(ResponsiveContext)
    return (
        <Video cloudName='petsnhouse' autoplay={autoplay} publicId={publicId} width={mobile ? '100%' : width} height={mobile ? 'auto' : height}  controls>
            <Transformation startOffset="0" endOffset="30" />
        </Video>
    )
}
export default ReusablePlayer;