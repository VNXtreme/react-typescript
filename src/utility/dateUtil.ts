import moment, { Moment } from 'moment';

export const convertDateStringToMoment = (dateStr: string) => moment(dateStr, ['HH:mm', 'HH:mm:ss', 'YYYY/MM/DD HH:mm:ss']);

export const convertMomentToYYYYMMDD = (momentObj: Moment) => momentObj.format('YYYY/MM/DD HH:mm:ss');
