import React, {useCallback, useContext, useEffect, useState} from 'react';
import './style.scss'
import dropdown from '../../../Assets/svg/dropdown.svg'
import ResponsiveContext from "../../../Context/responsiveContext";
import PropTypes from "prop-types";
import VideoSource from "../Pages/Post/components/PostCreation/annotation/videoSource";


function Aside(props) {
		const {map, action, value, filters} = props;
		
		const activeStyle = {borderLeft: '2px solid #4A76A8'};
		
		const mobile = useContext(ResponsiveContext);
		
		const RenderValuesList = _ => Object.values(map).map((el) => {
				console.log(el)
				return (
						<div className={`flex-column`} key={el}>
								<div className='list_item' onClick={() => action(el)}>
										<span style={el === value ? activeStyle : {}} className='pl-10'>{filters[el]}</span>
								</div>
						</div>
				)
		})
		
		
		const RenderMobileList = _ => {
				const [visibleDropdown, setVisibleDropdown] = useState(false);
				useEffect(() => {
						setVisibleDropdown(false)
				}, [value])
				return (
						<>
								<div className='flex flex-align-center flex-between'
								     onClick={() => setVisibleDropdown(!visibleDropdown)}>
										<span className=' pr-10'>{filters[value]}</span>
										<img src={dropdown} alt="dropdown-icon"/>
								</div>
								<div className={visibleDropdown ? 'aside-list visible' : 'aside-list '}>
										<RenderValuesList/>
								</div>
						</>
				)
		}
		
		const RenderList = _ => mobile ? <RenderMobileList/> : <RenderValuesList/>
		
		return (
				<div className={mobile ? 'aside' : 'aside ml-30'}>
						<RenderList/>
				</div>
		)
}

Aside.propTypes = {
		map: PropTypes.object.isRequired,
		filters: PropTypes.object.isRequired,
		value: PropTypes.string.isRequired,
		action: PropTypes.func.isRequired,
};

export default Aside;
