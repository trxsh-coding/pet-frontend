import ReusableImage from "../../../../Reusable/Image";
import React, {useContext} from "react";
import ResponsiveContext from "../../../../../Context/responsiveContext";

function MissingsImagesMap({images}) {
    const mobile = useContext(ResponsiveContext)
    const RenderImagesMap = _ => images.map( el => {
        return (
                <ReusableImage
                    link={el}
                    width={images.length > 1 && !mobile ? 165: '100%'}
                    height={mobile ? 360 : 165}
                    fromServer
                />
        )
    })
    return (
        <div>
            <RenderImagesMap />
        </div>
    )
}

export default MissingsImagesMap;