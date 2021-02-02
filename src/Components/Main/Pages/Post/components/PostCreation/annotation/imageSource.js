import PropTypes from 'prop-types';
import React, {useContext, useEffect, useState} from "react";
import ReusableModal from "../../../../../../Reusable/Modal";
import ResponsiveContext from "../../../../../../../Context/responsiveContext";
import ReusableCrop from "../../../../../../Reusable/Crop/Crop";
import ReusableInput from "../../../../../../Reusable/Input";

const ImageSource = (props) => {
    const {onSubmit, url, onClearState} = props;
    const mobile = useContext(ResponsiveContext);
    const [value, setValue] = useState('');
    useEffect(() => {

    }, [value])
    return (
        <ReusableModal
            width={mobile ? '100%' : '700px'}
            height={mobile ? '100%' : 'fit-content'}
            styles={{position: 'fixed'}}
            visible={true}
            onClose={onClearState}
        >
            <div style={{width: '100%', height: 'fit-content'}}>
                <ReusableCrop image={url} onAction={onSubmit} description={value} >
                    <ReusableInput
                        children='none'
                        styles={{width: '100%', marginTop:'20px'}}
                        onChange={(e) => setValue(e)}
                        value={value}
                        autoFocus
                        type='textarea'
                        fixedSize={106}
                    />
                </ReusableCrop>
            </div>
        </ReusableModal>
    )
}

ImageSource.propTypes = {
    file: PropTypes.object.isRequired,
    onSubmit: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired,
    children: PropTypes.element,
    onChangeDescription:PropTypes.func,
    onClearState:PropTypes.func

};

export default ImageSource;
