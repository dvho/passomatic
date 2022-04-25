# Passomatic
[_Passomatic_](https://www.npmjs.com/package/passomatic) is a lightweight password generation module that takes one argument, a number from 1-10 as an indication of password strength. Effortlessly generate placeholder passwords upon account creation, integrate behind a UI with a dial or slider, and enjoy the ease at which [_Passomatic_](https://www.npmjs.com/package/passomatic) generates passwords of all strengths according to the most standard password conventions.

<img src="https://user-images.githubusercontent.com/45696445/51099493-14efa780-179f-11e9-94d9-97c4be6d7428.gif">

_________________________
## API
### passomatic(`number`)
```js
var passomatic = require('passomatic');
```
&nbsp;
_________________________
#### -- Example 1 --
```js
console.log(passomatic(1));
```
>The password generated will be between 8 and 11 characters long. For each character in the string there’s an 80% chance it will be lowercase and 20% chance it will be uppercase.
```
oMFhfapM
```
_________________________
&nbsp;
&nbsp;
_________________________
#### -- Example 2 --
```js
console.log(passomatic(2));
```
>The password generated will be between 10 and 13 characters long. For each character in the string there’s a 60% chance it will be lowercase and 40% chance it will be uppercase.
```
WdMPsicOaLZi
```
_________________________
&nbsp;
&nbsp;
_________________________
#### -- Example 3 --
```js
console.log(passomatic(3));
```
>The password generated will be between 12 and 15 characters long. For each character in the string there’s a 56% chance it will be lowercase, 37% chance it will be uppercase and 7% chance it will be numeric.
```
5paHlqYgPqWNMj
```
_________________________
&nbsp;
&nbsp;
_________________________
#### -- Example 4 --
```js
console.log(passomatic(4));
```
>The password generated will be between 14 and 17 characters long. For each character in the string there’s a 46% chance it will be lowercase, 46% chance it will be uppercase and 8% chance it will be numeric.
```
LHLxncK33tQgIRUf
```
_________________________
&nbsp;
&nbsp;
_________________________
#### -- Example 5 --
```js
console.log(passomatic(5));
```
>The password generated will be between 16 and 19 characters long. For each character in the string there’s a 40% chance it will be lowercase, 40% chance it will be uppercase, 8% chance it will be numeric and 12% chance it will be a ‘password special character’ (ASCII Punctuation or Symbol).
```
$IBZx]u4fPsDwPBFje
```
_________________________
&nbsp;
&nbsp;
_________________________
#### -- Example 6 --
```js
console.log(passomatic(6));
```
>The password generated will be between 18 and 21 characters long. For each character in the string there’s a 38% chance it will be lowercase, 38% chance it will be uppercase, 10% chance it will be numeric and 14% chance it will be a ‘password special character’ (ASCII Punctuation or Symbol).
```
4qxy]w=^pftc.HNs?`kjv
```
_________________________
&nbsp;
&nbsp;
_________________________
#### -- Example 7 --
```js
console.log(passomatic(7));
```
>The password generated will be between 20 and 23 characters long. For each character in the string there’s a 33% chance it will be lowercase, 33% chance it will be uppercase, 8% chance it will be numeric and 26% chance it will be a ‘password special character’ (ASCII Punctuation or Symbol).
```
*"yglqwRROMHgWKETmw.TUB
```
_________________________
&nbsp;
&nbsp;
_________________________
#### -- Example 8 --
```js
console.log(passomatic(8));
```
>The password generated will be between 23 and 26 characters long. For each character in the string there’s a 34% chance it will be lowercase, 34% chance it will be uppercase, 5% chance it will be numeric and 27% chance it will be a ‘password special character’ (ASCII Punctuation or Symbol).
```
=dm.XOa$L5`:NGaf}w@a[m.3t
```
_________________________
&nbsp;
&nbsp;
_________________________
#### -- Example 9 --
```js
console.log(passomatic(9));
```
>The password generated will be between 26 and 29 characters long. For each character in the string there’s a 30% chance it will be lowercase, 30% chance it will be uppercase, 6% chance it will be numeric and 34% chance it will be a ‘password special character’ (ASCII Punctuation or Symbol).
```
zEM1u@Nh,IJJR%:Vf(*U-gmXG;$p
```
_________________________
&nbsp;
&nbsp;
_________________________
#### -- Example 10 --
```js
console.log(passomatic(10));
```
>The password generated will be between 29 and 32 characters long. For each character in the string there’s a 25% chance it will be lowercase, 25% chance it will be uppercase, 5% chance it will be numeric and 45% chance it will be a ‘password special character’ (ASCII Punctuation or Symbol).
```
@gw&}3KM|v#S)J*(f[gb+Z}&T*^gp2>
```
_________________________
&nbsp;
## Notes
[_Passomatic_](https://www.npmjs.com/package/passomatic) is a lightweight password generation module that takes one argument, a number from 1-10 as an indication of password strength. Effortlessly generate placeholder passwords upon account creation, integrate behind a UI with a dial or slider, and enjoy the ease at which [_Passomatic_](https://www.npmjs.com/package/passomatic) generates passwords of all strengths according to the most standard password conventions.

## Installation
With [npm](http://npmjs.org) do
```bash
$ npm install passomatic
```

## License
(MIT)

Copyright (c) 2018 David H. &lt;email6@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
