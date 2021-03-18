import React from "react";
import PropTypes from "prop-types";
import {ESettingsTypes} from "./types";
import Personal from "./personal";
import Notifications from "./notifications";
import Password from "./password";



const SettingsComponent = ({filter}) => {
			switch (filter){
					case ESettingsTypes.personal:
							return <Personal />;
					case ESettingsTypes.notifications:
							return <Notifications />;
					case ESettingsTypes.password:
							return <Password />;
			}
}

SettingsComponent.propTypes = {
		filter: PropTypes.string.isRequired,
};

export default SettingsComponent;