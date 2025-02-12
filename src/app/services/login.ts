export class IsLogin {
    constructor(){}
    isLoggedIn(name: string, pass: string): boolean  {
        let userLogged: boolean = false
        if(name === 'mario' && pass === '1234'){
            userLogged = true
        }
        return userLogged
    }
}

