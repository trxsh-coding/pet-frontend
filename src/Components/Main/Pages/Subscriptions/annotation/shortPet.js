import React, {useEffect} from 'react';
import ReusableImage from "../../../../Reusable/Image";
import history from "../../../../../services/history";
import '../styles.scss'
function ShortPet(props) {
    const {url, name, id} = props;
    return (
        <div onClick={() => history.push(`/pet/${id}`)} className='flex-column w-fit mr-60'>
            <ReusableImage size={165} fromServer link={url}/>
            <span className='pet-name mt-10'>{name}</span>
        </div>
    );
}

export default ShortPet;
