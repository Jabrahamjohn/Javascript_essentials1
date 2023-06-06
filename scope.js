// PROGRAM BLOCKS
//----We can separate the code of a program into blocks
let counter;
console.log(counter);
{
    counter = 2000;
    console.log(counter);
}
counter = counter + 2000;
console.log(counter);

//->Program blocks can be nested, that is, we can create one block inside of another one.
console.log(counter);  //  ->  undefined
{
         counter  =  4000;
         {
                 console.log(counter);  //  ->  1
         }
}
counter  =  counter  +  2000;
console.log(counter);  //  ->  2
