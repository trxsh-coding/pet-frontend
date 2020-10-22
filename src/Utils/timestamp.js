import moment from "moment";
import 'moment/locale/ru';
moment.locale('ru')

export const normalizeTime = (value, short = false) => {
    return short ?  moment(value).format('l') : moment(value).format('DD MMMM LT')
}