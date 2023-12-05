/** uni-id-common.checkToken 返回的 payload */
type AuthInfo = {
    "errCode":string|number,
    "message":string,
    "uid": string,
    "role": Array<string>,
    "permission": Array<string>,
    "token":string|null,
    "tokenExpired":number|null,
    "code":number,
    "exp":number
}

type Context = {
    "uniIdToken": string
}

type Result = {
    "success": boolean,
    "result":any
}

type CheckEvent = {
    "detail": {value:Array<string>},
    "type":string,
    "currentTarget":{id:string,dataset:{}},
    "target":{id:string,dataset:{}}
}

type League = {
    id:number,
    name:string,
    checked?:boolean = false
}
type Match = {
    leagueid:number,matchid:number,cap:string,
    HomeName:string,AwayName:string,matchname:string,
    rate1:number,rate2:number,rate3:number,rate4:string,rate5:number,
    time:string,Win:number,Drawn:number,Lost:number
}
type GameConfig = {
    _id:string,
    game_type:string,
    bet_type:string,
    bjdc_code:string,
    rate_title:string
}