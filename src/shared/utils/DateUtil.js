import Moment from 'moment';
import moment from 'moment';

/* in all function you can pass date from api and it will returen your 
required value 
GetDAyName is for day 
getAppointmentDaTE FOR DATE OF MONTH 
GET MONTH NAME FOR MONTH NAME
GET YEAR FOR  RETURN YEAR
*/

export const GetDayName = date => {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(date);
    var dayName = days[d.getDay()];
    return dayName;
};
export function dateFormat(dt) {
    Moment.locale('en');
    // var dt = '2016-05-12T00:00:00';
    //var date = Moment(dt).format('DD-MM-YYYY HH:mm');
    var date = Moment.utc(dt).local().format('DD/MM/YYYY HH:mm');
    //console.log("date",date)
    return date
}

export function dateFormatNoUTC(dt) {
    Moment.locale('en');
    // var dt = '2016-05-12T00:00:00';
    var date = Moment(dt).format('DD/MM/YYYY HH:mm');
    //var date = Moment.utc(dt).local().format('DD/MM/YYYY HH:mm');
    //console.log("date",date)
    return date
}

export function getTimeFromIsoFormate(isodateTime) {
    //  '2012-10-16T11:00:28.556094Z';
    let result = isodateTime.match(/\d\d:\d\d/);
    console.log(result[0]);
    return result[0]
}
export function getDateFromIsoFormate(isodateTime) {
    //  '2012-10-16T11:00:28.556094Z';
    var time = moment.utc(isodateTime).format("DD/MM/YYYY ");
    let result = isodateTime.match(/\d\d:\d\d/);
    console.log(result[0]);
    return time
}
export function timeFormatNoUTC(dt) {
    Moment.locale('en');
    // var dt = '2016-05-12T00:00:00';
    var date = Moment(dt).format('HH:mm');
    //var date = Moment.utc(dt).local().format('DD/MM/YYYY HH:mm');
    //console.log("date",date)
    return date
}
export function onlydateFormatNoUTC(dt) {
    Moment.locale('en');
    // var dt = '2016-05-12T00:00:00';
    var date = Moment(dt).format('DD/MM/YYYY');
    //var date = Moment.utc(dt).local().format('DD/MM/YYYY HH:mm');
    //console.log("date",date)
    return date
}
export function get24HourseFormate(datenTime) {
    var momentObj = Moment(datenTime, ["DD/MM/YYYY h:mm A"])
    console.log(datenTime)
    // var momentObj = moment("08/03/2022 11:25 PM", ["DD/MM/YYYY h:mm A"])

    return momentObj.format("DD/MM/YYYY HH:mm")
}

export function timeFormatVitals(dt) {
    Moment.locale('en');
    var date = Moment.utc(dt).local().format('HH:mm');
    return date
}

export function dateFormatPosting(dt) {
    Moment.locale('en');
    // var dt = '2016-05-12T00:00:00';
    var date = Moment(dt).format('YYYY-MM-DD');
    //var date = Moment.utc(dt).local().format('DD/MM/YYYY HH:mm');
    //console.log("date",date)
    return date
}

export function dateFormatPostingUTC(dt) {
    Moment.locale('en');
    // var dt = '2016-05-12T00:00:00';
    var date = Moment.utc(dt).format('YYYY-MM-DD');
    //var date = Moment.utc(dt).local().format('DD/MM/YYYY HH:mm');
    //console.log("date",date)
    return date
}

export function dateFormatUTC(dt) {
    Moment.locale('en');
    // var dt = '2016-05-12T00:00:00';
    var date = Moment.utc(dt).format('DD-MM-YYYY');
    //var date = Moment.utc(dt).local().format('DD/MM/YYYY HH:mm');
    //console.log("date",date)
    return date
}
export function dateFormatUTC_Two(dt) {
    Moment.locale('en');
    // var dt = '2016-05-12T00:00:00';
    var date = Moment.utc(dt).format('DD/MM/YYYY');
    //var date = Moment.utc(dt).local().format('DD/MM/YYYY HH:mm');
    //console.log("date",date)
    return date
}

export function dateFormatPostingWithTime(dt) {
    Moment.locale('en');
    // var dt = '2016-05-12T00:00:00';
    var date = Moment(dt).format('YYYY-MM-DD HH:mm');
    //var date = Moment.utc(dt).local().format('DD/MM/YYYY HH:mm');
    //console.log("date",date)
    return date
}
export function dateFormatPostingWithTimelocal(dt) {
    Moment.locale('en');
    // var dt = '2016-05-12T00:00:00';
    var date = Moment(dt).local().format('YYYY-MM-DD HH:mm');
    //var date = Moment.utc(dt).local().format('DD/MM/YYYY HH:mm');
    //console.log("date",date)
    return date
}
export function dateFormatWithTime(dt) {
    Moment.locale('en');
    // var dt = '2016-05-12T00:00:00';
    var date = Moment(dt).format('DD/MM/YYYY HH:mm');
    //var date = Moment.utc(dt).local().format('DD/MM/YYYY HH:mm');
    //console.log("date",date)
    return date
}



export function findDatefromNumber(value, date) {
    // alert(date)
    var someDate = new Date(date);
    var numberOfDaysToAdd = value;
    var result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);

    return moment(result)
    // alert(date)/
}

function convertUTCDateToLocalDate(date) {
    var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;
}
export const disableFutureDates = (current) => {
    let customDate = moment(new Date()).format("YYYY-MM-DD");
    return current && current >= moment(customDate, "YYYY-MM-DD").add(1, 'days');
}

export function findDayNumberFromDate(newDate, currentDate) {
    const oneDay = 24 * 60 * 60 * 1000 // hours*minutes*seconds*milliseconds
    // console.log("Date11",currentDate)
    const firstDate = currentDate ? new Date(currentDate) : new Date()//.toLocaleDateString()
    const secondDate = new Date(newDate)
    // console.log("Date11",secondDate,firstDate)

    const diffDays = Math.round((secondDate - firstDate) / oneDay)
    return diffDays;
}

export function dateFormatWithOutTime(dt) {
    Moment.locale('en');
    // var dt = '2016-05-12T00:00:00';
    // console.log("dtdtd",dt)
    //var date = Moment(dt).format('DD-MM-YYYY HH:mm');

    var date = Moment.utc(dt).local().format('DD/MM/YYYY');
    // var date = Moment.utc(dt).local().format('DD/MM/YYYY');
    return date
}
export function dateFormatWithOutDateTime(dt) {
    Moment.locale('en');
    // var dt = '2016-05-12T00:00:00';
    //var date = Moment(dt).format('DD-MM-YYYY HH:mm');
    var date = Moment.utc(dt).local().format('MM/YYYY');
    //console.log("date",date)
    return date
}
export function getHoureMint(dt) {
    Moment.locale('en');
    // var dt = '2016-05-12T00:00:00';
    //var date = Moment(dt).format('DD-MM-YYYY HH:mm');
    var date = Moment.utc(dt).local().format('HH:mm');
    //console.log("date",date)
    return date
}
export function getHoure(dt) {
    Moment.locale('en');
    // var dt = '2016-05-12T00:00:00';
    //var date = Moment(dt).format('DD-MM-YYYY HH:mm');
    var date = Moment.utc(dt).local().format('HH');
    //console.log("date",date)
    return date
}
export function convert24hourTo12HourFormat(time) {
    const time_part_array = time.split(":");
    let ampm = 'AM';
    if (time_part_array[0] >= 12) {
        ampm = 'PM';
    }
    if (time_part_array[0] > 12) {
        time_part_array[0] = time_part_array[0] - 12;
    }
    // const formatted_time = time_part_array[0] + ':' + time_part_array[1] + ':' + time_part_array[2] + ' ' + ampm;
    const formatted_time = time_part_array[0] + ':' + time_part_array[1] + ' ' + ampm;
    return formatted_time;
}
export function getMint(dt) {
    Moment.locale('en');
    // var dt = '2016-05-12T00:00:00';
    //var date = Moment(dt).format('DD-MM-YYYY HH:mm');
    var date = Moment.utc(dt).local().format('mm');
    //console.log("date",date)
    return date
}

export function isSameOrAfterCheck(comapreDateTime) {
    // 2014-03-24T01:14:00.000Z
    if (comapreDateTime) {
        // console.log("current date time==>" + dateFormat(new Date().toISOString()))
        // console.log("expiry time==>" + dateFormat(comapreDateTime))
        // console.log("comapreDateTime==>" + comapreDateTime)
        // console.log("stat time==>" + Moment(comapreDateTime).isSameOrAfter(Moment(new Date().toISOString())))
        return Moment(comapreDateTime).isSameOrAfter(Moment(new Date().toISOString()));
    } else {
        return false
    }

    // return Moment(new Date().toISOString()).isBefore(Moment(comapreDateTime));

}
// Keep in mind date format should be MM/DD/YYYY 
export function timeDifferenceWithCurrent(then) {
    // var now = "04/09/2013 15:00:00";
    // var then = "04/09/2013 14:20:30";
    console.log("datedifference", getCurrentMomentTime())
    // console.log("thenthenthen","aneel==>"+ then+" current time"+getCurrentMomentTime())
    // return Moment.utc(Moment(new Date(), "DD/MM/YYYY HH:mm:ss").diff(Moment(then, "DD/MM/YYYY HH:mm:ss"))).format("HH:mm")
    // var now = getCurrentMomentTime();
    // var now = "24/05/2022 18:18:30";
    // var then = "05/24/2022 13:53:03";

    // then time i change it to local because i get it in utc there for i get foure houre difference.Î
    let dateee = moment.utc(then);
    let date2 = moment(dateee).local()
    moment.locale('en');
    var date = moment.utc(date2).local().format('MM/DD/YYYY HH:mm:ss');

    return moment.utc(moment(date, "MM/DD/YYYY HH:mm:ss").diff(moment(getCurrentMomentTime(), "MM/DD/YYYY HH:mm:ss"))).format("HH:mm")
    // var ms = moment(getCurrentMomentTime(), "MM/DD/YYYY HH:mm:ss").diff(moment(date, "MM/DD/YYYY HH:mm:ss").local());
    // var d = moment.duration(ms);
    // var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
    // return s
    // outputs: "00:39:30"
}

export function timeFormat(dt) {
    Moment.locale('en');
    // var dt = '2016-05-12T00:00:00';
    var time = Moment(dt).format('HH:mm:ss');
    //console.log("date",date)
    return time;
}

export function splitDateFormat(dt) {
    Moment.locale('en');
    // var dt = '2016-05-12T00:00:00';
    var date = Moment(dt).format('YYYY-MM-DDT');
    //console.log("date",date)
    return date;
}

export function DateFormat(dt) {
    Moment.locale('en');
    // var dt = '2016-05-12T00:00:00';
    var date = Moment(dt).format('DD-MM-YYYY');
    //console.log("date",date)
    return date;
}

export function splitDate(dt) {
    var date = dt.replace('T', ' ')
    //console.log("date iss", date)
    return date;
}



export function getCurrentMomentTime() {
    return Moment().format("MM/DD/YYYY HH:mm:ss")
}


export const GetAppointmentDate = date => {
    var d = new Date(date);
    var n = d.getDate();
    return n;
}



export const GetMonthName = date => {
    var days = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var d = new Date(date);
    var monthName = days[d.getMonth()];
    return monthName;
}


export const GetYear = date => {
    var d = new Date(date);
    var n = d.getFullYear();
    return n;
}




// export const ReturnTypeIcon = type => {
//     if (type === 'Telephonic') {
//         return require('../../assets/telephone.png');
//     }
//     if (type === 'Video') {
//         return require('../../assets/video.png');
//     }
//     if (type === 'F2F') {
//         return require('../../assets/face.png');
//     }
// }


export const FomraatedDate = currentDate => {
    let date = new Date(currentDate);
    let weekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dateString = weekdayNames[date.getDay()] + " " + date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear()

    return dateString;
}

export const FormatAMPM = currentDate => {
    let date = new Date(currentDate);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

export const FormateUTCTime = currentDateTIme => {
    let date = new Date(currentDateTIme);
    var hours = date.getUTCHours();
    var minutes = date.getUTCMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}




export const capitalize = word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

export const currentDatenTime = () => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds

    var currentDatanTime = date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec;

    return currentDatanTime;
}

