import React, {useCallback, useEffect, useMemo, useState} from 'react';
import ComponentWrapper from "../../../Reusable/ComponentWrapper";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import Spinner from "../../../Reusable/Spinner";
import history from "../../../../services/history";
import {searchPet} from "../../../../store/modules/pet";
import ReusableImage from "../../../Reusable/Image";
import Aside from "../../Layout/Aside";
import './style.scss'
import SearchInput from "./layout/searchInput";
function Search(props) {
    console.log(history)
    const dispatch = useDispatch();
    const query = history.location.state;
    function initialize(query) {
        if(query) dispatch(searchPet(query))
    }
    const [value, setValue] = useState(Object.keys[query])
    useEffect(() => {
        initialize(query)
    }, [])
    const RenderPetMap = () => {
        const search = useSelector( s => s.pet.search || []);
        const pets = useSelector( s => s.pet.data || []);

        return search.map( el => {
            const pet = pets[el]
            return (
                <div className='flex-center flex flex-align-center flex-column search-item pointer'
                     key={el}
                     onClick={() => history.push(`/pet/${pet.id}`)}
                >
                    <ReusableImage size={165} rounded fromServer link={pet.avatar}/>
                    <span className='mt-10'> {pet.name}</span>
                </div>
            )
        })
    }
    const onSetAction = useCallback( (e) => {
    }, [])
    const map = {
        name:'Имя',
        type:'Порода'
    }
    const RenderAside = useMemo(() =>
            <Aside
                action={(e) => onSetAction(e)}
                map={map}
            />
    , [])
    return (
        <div className="Chat flex">
            <ComponentWrapper title='Поиск' width={878}>
                <SearchInput value={value} action={(e) => initialize(e)} />
                <div className='flex items-container mt-20'><RenderPetMap /></div>
            </ComponentWrapper>

            {RenderAside}
        </div>
    )
}

export default Search;
