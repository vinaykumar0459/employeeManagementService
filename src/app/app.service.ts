import {Injectable}from "@angular/core";
import {Http,Response,Headers} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class AppService{
  url:string;
    data:any={'success':'',error:''};

constructor(private _http:Http){
}
getService(){
    var headers = new Headers;
     headers.append('Content-Type','application/json; charset=utf-8');
      return this._http.get(this.url,{headers:headers}).map(res=>res.json());
}
postService(){
      var headers = new Headers;
     headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(this.url,this.data,{headers:headers}).map(res=>res.json());
}

}
// import { Injectable } from '@angular/core';

export type InternalStateType = {
  [key: string]: any
};

@Injectable()
export class AppState {
  _state: InternalStateType = {};

  constructor() {
  }
}

// //   // already return a clone of the current state
// //   get state() {
// //     return this._state = this._clone(this._state);
// //   }

// //   // never allow mutation
// //   set state(value) {
// //     throw new Error('do not mutate the `.state` directly');
// //   }


// //   get(prop?: any) {
// //     // use our state getter for the clone
// //     const state = this.state;
// //     return state.hasOwnProperty(prop) ? state[prop] : state;
// //   }

// //   set(prop: string, value: any) {
// //     // internally mutate our state
// //     return this._state[prop] = value;
// //   }


// //   private _clone(object: InternalStateType) {
// //     // simple object clone
// //     return JSON.parse(JSON.stringify(object));
// //   }
//  }
