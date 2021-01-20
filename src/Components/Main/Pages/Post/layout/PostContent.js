import React, {useContext} from "react";
import ReusablePlayer from "../../../../Reusable/VideoPlayer";
import ResponsiveContext from "../../../../../Context/responsiveContext";
import ReusableImage from "../../../../Reusable/Image";

function PostContent({content}) {

    const mobile = useContext(ResponsiveContext)

    return content.contentType === 'video'
        ? <ReusablePlayer publicId={content.publicId} autoplay={true}/>
        : <ReusableImage width={!mobile ? 653 : '100%'} height={mobile ? 288 : 500} fromServer link={content}/>
}


export default PostContent