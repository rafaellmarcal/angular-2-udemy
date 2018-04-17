export class User {
    constructor(public email: string, public name: string, private password: string) { }

    matches(another: User): boolean {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    }
}

export const users: {[key:string]: User} = {
    "teste@email.com": new User('teste@email.com', 'Rafael', '123456'),
    "teste2@email.com": new User('teste2@email.com', 'Rafael 2', '654321')
}