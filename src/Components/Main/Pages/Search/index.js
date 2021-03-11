import React, {useContext, useEffect, useState} from 'react';
import ComponentWrapper from "../../../Reusable/ComponentWrapper";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';
import {searchPet} from "../../../../store/modules/pet";
import ReusableImage from "../../../Reusable/Image";
import Aside from "../../Layout/Aside";
import SearchInput from "./layout/searchInput";
import ResponsiveContext from "../../../../Context/responsiveContext";
import './style.scss'
import {searchActions} from "../../../../store/modules/search";
import {SET} from "../../../../store/types";

function Search() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [query, setQuery] = useState('name')

    const value = useSelector(s => s.search.searchValue);

    const search = useSelector(s => s.pet.search || []);
    const pets = useSelector(s => s.pet.data || []);

    function initialize(value) {
        dispatch(searchPet({[query]: value}))
    }

    const onChangeValue = (e) => {
        dispatch(searchActions[SET]({key:'searchValue', value:e}))
    }
    useEffect(() => {
        initialize(value)
    }, [query, value])

    const RenderPetMap = () => {


        return search.map(el => {
            const pet = pets[el]
            return (
                <div className='flex-center flex flex-align-center flex-column search-item pointer'
                     key={el}
                     onClick={() => history.push(`/pet/${pet.id}`)}>
                    <ReusableImage size={mobile ? 100 : 165} rounded fromServer link={pet.avatar}/>
                    <span className='mt-10'> {pet.name}</span>
                </div>
            )
        })
    }
    const map = {
        name: 'Имя',
        breed: 'Порода'
    }

    const mobile = useContext(ResponsiveContext)

    return (
        <div className={`Search ${mobile ? 'flex-column-reverse' : 'flex'}`}>
            <ComponentWrapper title='Поиск' width={878}>
                <div className={mobile ? 'wrapper-space' : ''}>
                    <SearchInput value={value} action={(e) => initialize(e) } onChange={onChangeValue}/>
                    <div className='flex items-container mt-20'>
                        {search?.length
                            ? <RenderPetMap/>
                            : <span className='text-center'>Ничего не найдено</span>
                        }
                    </div>
                </div>
            </ComponentWrapper>
            <Aside action={(e) =>setQuery(e)}
                map={map}
            />
        </div>

    )
}

export default Search;
