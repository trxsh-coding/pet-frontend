import ReusableImage from "../../../../Reusable/Image";
import React, {useContext} from "react";
import ResponsiveContext from "../../../../../Context/responsiveContext";

function MissingsImagesMap({images}) {
    const mobile = useContext(ResponsiveContext)
    const RenderImagesMap = _ => images.map( el => {
        return (
                <ReusableImage
                    link={el}
                    width={'70%' }
                    height={mobile ? 165 : 360}
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