
export class User {
email:string;
password:string;
mobileNumber:String;
firstName:string;
lastName:string;
fullName:string;
dob:Date;
address:any [];
userTYPE:string;

   







    constructor(
    ){};

}
export class Seller extends User{
    restruentName:string;
    restruentTinNumber:string;
    restruentAddress:string;
    constructor(){
         super()}
        public  setRestruentName(restruentName){
            this.restruentName = restruentName;
        }
        public getRestruentName():string{
            return this.restruentName;
        }
        public setRestruentTinNumber(restruentTinNumber){
            this.restruentTinNumber = restruentTinNumber;
        }
        public getRestruentTinNumber(restruentTinNumber):string{
            return this.restruentTinNumber;
        }
        public setRestruentAddress(restruentAddress:string){
            this.restruentAddress = restruentAddress;
        }
        public getRestruentAddress():String{
            return this.restruentAddress;
        }

}