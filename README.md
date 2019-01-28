[![nekos-longify-function-version](https://img.shields.io/npm/v/nekos-longify-function.png)](https://www.npmjs.com/package/nekos-longify-function)
[![nekos-longify-function-downloads](https://img.shields.io/npm/dt/nekos-longify-function.png?maxAge=3600)](https://www.npmjs.com/package/nekos-longify-function)
[![nekos-longify-function-license](https://img.shields.io/badge/license-ISC-blue.png)](https://www.npmjs.com/package/nekos-longify-function)
![nekos-longify-function-build](https://img.shields.io/badge/build-passing---.png)
[![nekos-longify-function-server](https://img.shields.io/discord/531026628478894090.png?colorB=blue&label=nekos-packets&logo=discord)](https://discord.gg/UFkTFbe)
[![nekos-longify-function-git](https://img.shields.io/badge/github-_nekos--longify--function-neongreen.png?logo=github)](https://github.com/NekoboyTM/nekos-longify-function)

[![nekos-longify-function](https://nodei.co/npm/nekos-longify-function.png)](https://www.npmjs.com/package/nekos-longify-function)



# nekos-longify-function

an addon for nodeJS users to help "longify" dates (show full dates)

to report issues and get help, join the official [discord server](https://discord.gg/UFkTFbe)

### Useage-1 (general useage):
```javascript
let longify = require('nekos-longify-function');
//get the function

let now = new Date();
//it uses Dates, so "Date.now()" won't work

let t = longify(now);//options are optional

console.log(t);
//logs "Tuesday, January 15th, 2019 - 3:14:34 AM"
```
### Useage-2 (general useage):
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
### Useages (bots):
For bot useages visit [here](https://github.com/NekoboyTM/nekos-longify-function/tree/master/examples)

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
    "en-US":"English" //default
	"nl-NL":"Dutch" //added by Tjird#6304 from Discord
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
