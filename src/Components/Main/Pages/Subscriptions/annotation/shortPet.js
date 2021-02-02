import React, {useEffect} from 'react';
import ReusableImage from "../../../../Reusable/Image";
import {useHistory} from 'react-router-dom';
import '../styles.scss'
function ShortPet(props) {
    const {url, name, id} = props;
    const history = useHistory();
    return (
        <div onClick={() => history.push(`/pet/${id}`)} className='flex-column pointer w-fit mr-60'>
            <ReusableImage size={165} fromServer link={url}/>
            <span className='pet-name mt-10'>{name}</span>
        </div>
    );
}

export default ShortPet;
