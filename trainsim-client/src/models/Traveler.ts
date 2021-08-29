export default class Traveler {
    private _firstName: string;
    private _lastName: string;
    private _phone: string;

    // constructor(firstName: string, lastName: string, phone: string) {
    //     this._firstName = firstName;
    //     this._lastName = lastName;
    //     this._phone = phone;
    // }
    constructor() {
        this._firstName = '';
        this._lastName = '';
        this._phone = '';
    }

    public get firstName(): string {
        return this._firstName;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public get phone(): string {
        return this._phone;
    }
    
}