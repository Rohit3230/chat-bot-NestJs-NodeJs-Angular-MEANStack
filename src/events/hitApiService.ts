// import { Injectable } from '@nestjs/common';
// const request = require('request');
// @Injectable()
// export class HitAPIService {
//   constructor() {}

//   async get(apiUrl) : Promise<any> {
//     var f1 = function(apiUrl, callback){
//       request(apiUrl, function (error, response, body) {
//         console.error('error:', error); 
//         console.log('statusCode:', response && response.statusCode);
//         console.log('body:', body); 
//         callback(null, body);
//       });
//     }
//     f1(apiUrl, function(err, result){
//       console.log('Data***', err, result);
//       return result;
//     });
//   }
// }