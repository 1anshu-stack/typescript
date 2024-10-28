// type Combinable = number | string;
// type ConversionDescriptor = 'as-number' | 'as-text';

// function combine1 (
//     input1: Combinable,
//     input2: Combinable,
//     resultConversion: ConversionDescriptor
// ){

// }





//Inheritance

class Department {
    private employees: string[] = [];

    constructor(private id:string, public name: string){

    }

    addEmployee(employee: string){
        this.employees.push(employee)
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id:string, admins: string[]){
        super(id,'IT');
        this.admins = admins;
    }
}

const it = new ITDepartment('d1', ['Max']);
it.addEmployee('naruto')
it.addEmployee('eno')
console.log(it);