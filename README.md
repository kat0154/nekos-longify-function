![nekos-longify-function-version](https://img.shields.io/npm/v/nekos-longify-function.png)
![nekos-longify-function-downloads](https://img.shields.io/npm/dt/nekos-longify-function.png?maxAge=3600)
![nekos-longify-function-license](https://img.shields.io/badge/license-ISC-blue.png)

![nekos-longify-function](https://nodei.co/npm/nekos-longify-function.png)



# nekos-longify-function

an addon for nodeJS users to help "longify" dates (show full dates)

to report issues and get help, join the official [discord server](https://discord.gg/UFkTFbe)

### Useage[1] (general useage):
```javascript
let longify = require('nekos-longify-function');
//get the function

let now = new Date();
//it uses Dates, so "Date.now()" won't work

let t = longify(now);//options are optional

console.log(t);
//logs "Tuesday, January 15th, 2019 - 3:14:34 AM"
```
### Useage[2] (general useage):
```javascript
let longify = require('nekos-longify-function');
//get the function

let now = new Date();
//it uses Dates, so "Date.now()" won't work

let t = longify(now, {
    timeZone: 1, //default is "America/New_York"/-5

    language: 'german', //default is "en-US"/"english"

    military: true, //default is false, this shows the time in military (24h) format

    notime: false // if set to true this takes the time away and would make the below
});               //"Dienstag, Januar 15te, 2019"

console.log(t);
//logs "Dienstag, Januar 15te, 2019 - 09:14:34"
```
### Useage[1] (general bot useage):
```javascript
let longify = require('nekos-longify-function');
//get the function

let now = new Date();
//it uses Dates, so "Date.now()" won't work

let t = longify(now, {
    botify: true
});
let i = t.split(' ');

console.log(`${i[0]} | ${i[1]} | ${i[2]} | ${i[3]} | ${i[4]} | ${i[5]}`);
   //format:   day   |  month  |daynumber|   year  |   time  |  AM/PM
  //
 //  "Tuesday | January |   15th  |   2019  | 3:14:34 | AM"
```

### Useage[1] (bot useage with more options):
```javascript
let longify = require('nekos-longify-function');
//get the function

let now = new Date();
//it uses Dates, so "Date.now()" won't work

let t = longify(now, {
    timeZone: 1, //default is -5
    language: 'german', //default is english
    military: false, //default
    notime: false, //default
    botify: true //default is false
});
let i = t.split(' ');

console.log(`${i[0]} | ${i[1]} | ${i[2]} | ${i[3]} | ${i[4]} | ${i[5]}`);
   //format:   day   |  month  |daynumber|   year  |   time  |  AM/PM
  //
 //        "Dienstag |  Januar |   15te  |   2019  | 09:14:34|   AM"
//
//note: AM/PM will show as 'undefined' if military is true
//note: time & AM/PM will show as 'undefined' if notime is true
```

### TimeZones:
```javascript
-11 - 'Pacific/Niue',
-10 - 'Pacific/Tahiti',
-9 - 'Pacific/Gambier',
-8 - 'Pacific/Pitcairn',
-7 - 'America/Vancouver',
-6 - 'America/Denver',
-5 - 'America/New_York',
-4 - 'America/Manaus',
-3 - 'America/Cayenne',
-2 - 'Atlantic/South_Georgia',
-1 - 'Atlantic/Azores',
0 - 'GMT',
1 - 'Europe/Brussels',
2 - 'Europe/Helsinki',
3 - 'Asia/Riyadh',
4 - 'Asia/Dubai',
5 - 'Asia/Tashkent',
6 - 'Asia/Urumqi',
7 - 'Asia/Bangkok',
8 - 'Asia/Singapore',
9 - 'Asia/Chita',
10 - 'Pacific/Chuuk',
11 - 'Pacific/Pohnpei',
12 - 'Pacific/Wake'

//these can be entered either as the number or as the string version
```
### Languages:
```javascript
languages: {
    "de-DE":"German",
    "fr-FR":"French",
    "es-US":"Spanish",
    "en-US":"english" //default
}
//the language option ISN'T Case-sensitive
```

## Why?
>i got the idea from someone off discord who kept asking
>"how do i get the long date for a bot?"
>or something like that ... 
>anyways, because of them i wrote this to help make it easier
>
>^~^
>
>- NekoboyTM
