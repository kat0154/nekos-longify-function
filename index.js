 /**
   * longifys a date (instead of "1/15/19" or "Tue Jan 15 2019" its "Tuesday, January 15th, 2019 - 3:10:52 AM")
   * @param {Date} date a date to longify
   * @param {Object} [options] Your longify options.
   * @param {string} [options.language] a language to use (defaults to "en-US"/"english")
   * @param {string|number} [options.timeZone] a timezone to get the date in (defaults to "America/New_York"/-5)
   * @param {boolean} [options.military] use military (24h) time instead of 12h? (defaults to false)
   * @param {boolean} [options.notime] use this if you want the date without the time (defaults to false)
   * @param {boolean} [options.botify] use this if you want to use this for a discord bot (defaults to false)
   */
function longify(date, options){
if(typeof date === "number")throw new TypeError('type of date must be a Date\n');

    options = options || {};
if(!options.language)options.language = "en-US";
if(!options.timeZone)options.timeZone = "America/New_York";
if(!options.military)options.military = false;
if(!options.notime)options.notime = false;
if(!options.botify)options.botify = false;

if(typeof options.language !== "string"){
    throw new TypeError('The language option must be a string\n');
}
if(typeof options.notime !== "boolean"){
    throw new TypeError('The notime option must be boolean (true/false)\n');
}
if(typeof options.botify !== "boolean"){
    throw new TypeError('The botify option must be boolean (true/false)\n');
}
if(typeof options.military !== "boolean"){
    throw new TypeError('The military option must be boolean (true/false)\n');
}

var m;
if(options.military == false){
    m = true;
} else {
    m = false;
}

if(typeof options.timeZone == "number"){
if(options.timeZone > 12 || options.timeZone < -11){
    throw new TypeError('the timeZone can only be from -11 to 12 (GMT is 0)\n');
}
    const map = new Map([
        [-11, 'Pacific/Niue'],
        [-10, 'Pacific/Tahiti'],
        [-9, 'Pacific/Gambier'],
        [-8, 'Pacific/Pitcairn'],
        [-7, 'America/Vancouver'],
        [-6, 'America/Denver'],
        [-5, 'America/New_York'],
        [-4, 'America/Manaus'],
        [-3, 'America/Cayenne'],
        [-2, 'Atlantic/South_Georgia'],
        [-1, 'Atlantic/Azores'],
        [0, 'GMT'],
        [1, 'Europe/Brussels'],
        [2, 'Europe/Helsinki'],
        [3, 'Asia/Riyadh'],
        [4, 'Asia/Dubai'],
        [5, 'Asia/Tashkent'],
        [6, 'Asia/Urumqi'],
        [7, 'Asia/Bangkok'],
        [8, 'Asia/Singapore'],
        [9, 'Asia/Chita'],
        [10, 'Pacific/Chuuk'],
        [11, 'Pacific/Pohnpei'],
        [12, 'Pacific/Wake'],
      ])
options.timeZone = map.get(options.timeZone);
}

const languages = ["fr-fr", "french", "es-us", "spanish", "en-us", "english", "de-de", "german", "nl-nl", "dutch"];
if(!languages.some(word => options.language.toLowerCase().includes(word))){
    throw new Error('Unknown language\ncurrent languages:\nfr-fr (french), es-us (spanish), en-us (english), de-de (german) & nl-nl (dutch)\n\n');
}
if(options.language.toLowerCase() === "fr-fr"||options.language.toLowerCase() === "french"){
    options.language = "fr-FR"
}
if(options.language.toLowerCase() === "es-us"||options.language.toLowerCase() === "spanish"){
    options.language = "es-US"
}
if(options.language.toLowerCase() === "en-us"||options.language.toLowerCase() === "english"){
    options.language = "en-US"
}
if(options.language.toLowerCase() === "de-de"||options.language.toLowerCase() === "german"){
    options.language = "de-DE"
}
if(options.language.toLowerCase() === "nl-nl"||options.language.toLowerCase() === "dutch"){
    options.language = "nl-NL"
}

let api = require(`./languages/${options.language}.js`);

time = date.toLocaleTimeString(options.language, {hour12: m, timeZone: options.timeZone});

let now = date.toString().split(' ');
console.log(now+`\n`)
let day = now[0];
let month = now[1];

let num = `${now[2].split('')[0]}${api.endings[now[2].split('')[1]]}`


let longday = api.days[day];
let longmonth = api.months[month];
if(options.notime == false){
    if(options.botify == false){
    return `${longday}, ${longmonth} ${num}, ${now[3]} - ${time}`;
        //day, month daynumber, year - time
    } else {
    return `${longday} ${longmonth} ${num} ${now[3]} ${time}`;
        //day month daynumber year time
    }
} else {
    if(options.botify == false){
        return `${longday}, ${longmonth} ${num}, ${now[3]}`;
            //day, month daynumber, year
        } else {
        return `${longday} ${longmonth} ${num} ${now[3]}`;
            //day month daynumber year
        }
 }
}
module.exports = longify;
