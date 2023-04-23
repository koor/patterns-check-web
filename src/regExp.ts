export interface RegExpObj {
  [key: string]: RegExp;
}

export const regExp3Digits: RegExpObj = {
  "999": /^\d{3}$/,
  AAA: /^(\d)\1{2}$/,
  ABC: /^(?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)){2}\d$/,
  ABB: /^(\d)((?!\1)\d)\2$/,
  ABA: /^(\d)((?!\1)\d)\1$/,
  AAB: /^(\d)\1((?!\1)\d)$/
};

export const regExp4Digits: RegExpObj = {
  "10K": /^\d{4}$/,
  ABCD: /^(?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)){3}\d$/,
  AAAA: /^(\d)\1{3}$/,
  ABBB: /^(\d)((?!\1)\d)\2{2}$/,
  AABB: /^(\d)\1((?!\1)\d)\2$/,
  AAAB: /^(\d)\1{2}((?!\1)\d)$/,
  ABAA: /^(\d)((?!\1)\d)\1{2}$/,
  AABA: /^(\d)\1((?!\1)\d)\1$/,
  ABBA: /^(\d)((?!\1)\d)\2\1$/,
  ABAB: /^(\d)((?!\1)\d)\1\2$/,
  AABC: /^(\d)\1((?!\1)\d)((?!\1|\2)\d)$/,
  ABCC: /^(\d)((?!\1)\d)((?!\1|\2)\d)\3$/,
  ABBC: /^(\d)((?!\1)\d)\2((?!\1|\2)\d)$/,
  "0XXX": /^0(\d{3})$/,
  "00XX": /^00(\d{2})$/,
  "0X0X": /^0(\d)0(\d)$/,
  "0XX0": /^0(\d{2})0$/,
  XX00: /^(\d{2})00$/,
  XX88: /^(\d{2})88$/,
  XX69: /^(\d{2})69$/,
  TimesTable: /^(1101|1202|1303|1404|1505|1606|1707|1808|1909|2204|2306|2408|2510|2612|2714|2816|2918|3309|3412|3515|3618|3721|3824|3927|4416|4520|4624|4728|4832|4936|5525|5630|5735|5840|5945|6636|6742|6848|6954|7749|7856|7963|8864|8972|9981)$/,
  MMDD: /^((?:0[13578]|1[02])(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)(?:0[1-9]|[12]\d|30)|02(?:0[1-9]|1\d|2[0-9]))$/
};

export const regExp5Digits: RegExpObj = {
  "100K": /^\d{5}$/,
  AAAAA: /^(\d)\1{4}$/,
  ABCDE: /^((?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)|9(?=0)){4}\d)$/,
  ABBBB: /^(\d)(?!\1)(\d)\2{3}$/,
  AABBB: /^(\d)\1(?!\1)(\d)\2{2}$/,
  AAABB: /^(\d)\1{2}(?!\1)(\d)\2$/,
  AAAAB: /^(\d)\1{3}(?!\1)(\d)$/,
  ABBBA: /^(\d)(?!\1)(\d)\2{2}\1$/,
  ABAAA: /^(\d)(?!\1)(\d)\1{3}$/,
  AABAA: /^(\d)\1(?!\1)(\d)\1{2}$/,
  AAABA: /^(\d)\1{2}(?!\1)(\d)\1$/,
  ABABA: /^(\d)(?!\1)(\d)\1\2\1/,
  XABCD: /^\d((?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)|9(?=0)){3}\d)$/,
  XX000: /^\d{2}000$/,
  "00XX0": /^00\d{2}0$/,
  "000XX": /^000\d{2}$/,
  XX420: /^\d{2}420$/,
  AAABC: /^(\d)\1{2}(?!\1)(\d)(?!\1|\2)(\d)$/,
  AABBC: /^(\d)\1(?!\1)(\d)\2(?!\1|\2)(\d)$/,
  AABCC: /^(\d)\1(?!\1)(\d)(?!\1|\2)(\d)\3$/,
  ABCCC: /^(\d)(?!\1)(\d)(?!\1|\2)(\d)\3{2}$/,
  ABBCC: /^(\d)(?!\1)(\d)\2(?!\1|\2)(\d)\3$/,
  ABBBC: /^(\d)(?!\1)(\d)\2{2}(?!\1|\2)(\d)$/,
  ABCBA: /^(\d)(?!\1)(\d)(?!\1|\2)(\d)\2\1$/,
  XXX69: /^\d{3}69$/,
  "69XXX": /^69\d{3}$/,
  "00XXX": /^00\d{3}$/,
  XXX00: /^\d{3}00$/
};

export const regExp6Digits: RegExpObj = {
  AAAAAA: /^(\d)\1{5}$/,
  ABBBBB: /^(\d)(?!\1)(\d)\2{4}$/,
  AABBBB: /^(\d)\1(?!\1)(\d)\2{3}$/,
  AAABBB: /^(\d)\1{2}(?!\1)(\d)\2{2}$/,
  AAAABB: /^(\d)\1{3}(?!\1)(\d)\2$/,
  AAAAAB: /^(\d)\1{4}(?!\1)(\d)$/,
  ABBABB: /^(\d)(?!\1)(\d)\2\1\2{2}$/,
  ABABAB: /^(\d)(?!\1)(\d)\1\2\1\2$/,
  "00XX00": /^00\d{2}00$/,
  AABBCC: /^(\d)\1(?!\1)(\d)\2(?!\1|\2)(\d)\3$/,
  ABCCCC: /^(\d)(?!\1)(\d)(?!\1|\2)(\d)\3{3}$/,
  ABBBBC: /^(\d)(?!\1)(\d)\2{3}(?!\1|\2)(\d)$/,
  AAAABC: /^(\d)\1{3}(?!\1)(\d)(?!\1|\2)(\d)$/,
  ABCABC: /^(\d)(?!\1)(\d)(?!\1|\2)(\d)\1\2\3$/,
  XXX420: /^\d{3}420$/,
  "420XXX": /^420\d{3}$/,
  XXX000: /^\d{3}000$/,
  "000XXX": /^000\d{3}$/,
  AShareCode: /^000|600|601|602|603\d{3}$/,
  XXXX69: /^\d{4}69$/
};

export const regExpLongDigits: RegExpObj = {
  AAABBBB: /^(\d)\1{2}(?!\1)(\d)\2{3}$/,
  AAAABBBB: /^(\d)\1{3}(?!\1)(\d)\2{3}$/,
  ABBCBBA: /^(\d)(?!\1)(\d)\2(?!\1|\2)(\d)\2{2}\1$/,
  WanClub: /^[1-9]\d{0,2}0000$/,
  XXXAAAAAAAA: /^1(([3]\d)|(4[57])|(5[0-3,5-9])|(66)|(7[23,5-8])|([8]\d)|(9[1589]))((\d)\10{7})$/
};

export const regExp0x: RegExpObj = {
  "0x9": /^0[xX]\d$/,
  "0x99": /^0[xX]\d{2}$/,
  "0x999": /^0[xX]\d{3}$/,
  "0x10K": /^0[xX]\d{4}$/,
  "1Hex": /^0[xX][0-9a-fA-F]$/,
  "2Hex": /^0[xX][0-9a-fA-F]{2}$/,
  "3Hex": /^0[xX][0-9a-fA-F]{3}$/
};

export const regExpSpecial: RegExpObj = {
  Flag999: /^[\u{1F1E6}-\u{1F1FF}][\u{1F1E6}-\u{1F1FF}]\d{3}$/u,
  "999CN": /^(零|一|二|三|四|五|六|七|八|九){3}$/,
  "999JP": /^(零|壱|弐|参|肆|伍|陸|漆|捌|玖){3}$/,
  Arabic999: /^(٠|١|٢|٣|٤|٥|٦|٧|٨|٩){3}$/,
  Arabic10K: /^(٠|١|٢|٣|٤|٥|٦|٧|٨|٩){4}$/,
  "360Degree": /^(00[1-9]|0[1-9]\d|([1-2]\d{2})|([3][0-5]\d)|360)°$/
};
