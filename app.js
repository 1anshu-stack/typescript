// type Combinable = number | string;
// type ConversionDescriptor = 'as-number' | 'as-text';
var user1;
user1 = {
    name: 'max',
    age: 30,
    greet: function (phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
console.log(user1.greet('Hi Itachi'));
