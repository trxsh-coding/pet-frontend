import moment from "moment";
import 'moment/locale/ru';
moment.locale('ru')

export const normalizeTime = value => {
    return moment(value).format('LL')
 }