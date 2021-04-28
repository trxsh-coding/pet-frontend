import ComponentWrapper from "../../../../Reusable/ComponentWrapper";
import React, {useState} from "react";
import Aside from "../../../Layout/Aside";
import './styles.scss'
import {ESettingsFilters, ESettingsTypes} from "./types";
import Personal from "./personal";
import Notifications from "./notifications";
import Password from "./password";

const SettingsComponent = ({filter}) => {
    switch (filter) {
        case ESettingsTypes.personal:
            return <Personal/>;
        case ESettingsTypes.notifications:
            return <Notifications/>;
        case ESettingsTypes.password:
            return <Password/>;
    }
}


const UserSettings = () => {

    const [filter, setFilter] = useState(ESettingsTypes.personal)


    return (
        <div className='user-settings-wrapper'>
            <ComponentWrapper>
                <SettingsComponent filter={filter}/>
            </ComponentWrapper>
            <Aside filters={ESettingsFilters} value={filter} action={setFilter} map={ESettingsTypes}/>
        </div>
    )
}

export default UserSettings;