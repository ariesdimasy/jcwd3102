type User = { 
    email:string
    role:string
}

declare namespace Express { 
    export interface Request{
        user?: User
        file?: any
    }
}