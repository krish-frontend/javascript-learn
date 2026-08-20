
class bluePrint{
    constructor(name, classs, mobile){
        this.name=name;
        this.classs=classs;
        this.mobile=mobile;
        
        }
}

class studentInfo extends bluePrint {
    constructor(name, classs, mobile, rollNo) {
        super(name, classs, mobile);
        this.roll_No = rollNo;
    }
}

class teacherInfo extends bluePrint{
    constructor(name, classs, mobile, emailId, subject){
        super(name, classs, mobile);
        this.emailId=emailId;   
        this.subject=subject;

    }
}










// callback 
// function callBack(x,y,z){
//     let a = x+y;
//     return z(a);
// }

// callBack(2,8, (el)=>{
//     console.log(el);
    
// })
