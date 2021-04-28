import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {EToastsTypes} from "../Components/Reusable/Toast/types";

const useProtectCallback = ({history, options}) => {
    const current = useSelector(s => s.user.current);
    const onProtectedAction = e => {
        if (current) e();
        else history.push({
            pathname: '/auth/login',
            state: {
                warning: {status: EToastsTypes.warning, content: 'Для данного действия необходима авторизация'},
                ...options
            }
        });
    }

    return onProtectedAction;
};

export default useProtectCallback;
