// type Combinable = number | string;
// type ConversionDescriptor = 'as-number' | 'as-text';

// function combine1 (
//     input1: Combinable,
//     input2: Combinable,
//     resultConversion: ConversionDescriptor
// ){

// }





//Inheritance

// class Department {
//     private employees: string[] = [];

//     constructor(private id:string, public name: string){

//     }

//     addEmployee(employee: string){
//         this.employees.push(employee)
//     }
// }

// class ITDepartment extends Department {
//     admins: string[];
//     constructor(id:string, admins: string[]){
//         super(id,'IT');
//         this.admins = admins;
//     }
// }

// const it = new ITDepartment('d1', ['Max']);
// it.addEmployee('naruto')
// it.addEmployee('eno')
// console.log(it);





// Getter and setter
// class Accounting {
//     private lastReport: string;
    
//     get mostRecentReport() {
//         if(this.lastReport){
//             return this.lastReport;
//         }
//         throw new Error('No report fount');
//     }


//     set mostRecentReport(value: string){
//         if(!value){
//             throw new Error('please pass in a valid value!')
//         }
//         this.addReport(value)
//     }

//     addReport(text: string){
//         this.resports.push(text);
//         this.lastReport = text;
//     }
// }




//Static
// class Department {

//     // Static methods
//     static createEmployee(name: string){
//         return {name: name};
//     }

//     // Static pro
//     static fiscalYear = 20202;
// }

// Department.createEmployee
// Department.fiscalYear;




// Interface
// interface Person {
//     name: string;
//     age: number;
//     greet(phrase: string):void;
// }

// let user1: Person;

// user1 = {
//     name: 'max',
//     age: 30,
//     greet(phrase: string){
//         console.log(phrase + ' ' + this.name);
//     }
// };

// console.log(user1.greet('Hi Itachi'))



// interface as function
interface Addfn {
    (a: number, b:number): number;
}

let add: Addfn;
add = (n1: number, n2: number) => {
    return n1 + n2;
}