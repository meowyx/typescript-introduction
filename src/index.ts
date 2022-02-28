//basic types



let id: number = 5

let namePerson: string = 'kitty'

let isCoding: boolean = true

let nyaw: any = 'hello'

nyaw = true



//arrays

let catsPerHouse: number[] = [1, 2, 3, 4, 5, 6, 7]  //number[] means it's gonna be an array that only contains number type


let anyTypeArray: any[] = [1, 'one', true] //any type array

//tuple

let cats: [number, string, boolean] = [1, 'kitty', true] //saying what kind of type taking before 

//tuple array type within array 

let cat: [number, string][] //we are taking number string and also array type for array

cat = [
    [1, 'small'],
    [2, 'big'],
    [3, 'small'],
    [1, 'big'],
]


//union 

let bigKitty: string | number //union can be string and number both

bigKitty = 1
bigKitty = 'onekitty'

//enum

enum Direction2 {
    Up,
    Down,
    Left,
    Right,
} //gonna assign up 0 down 1 left 2 and right 3 automatically

//objects
const catsof = {
    amount: 1,
    genre: 'kitty',
}

//objects with type

type CatsOf = {   //type can be started with Capital letter as I wrote CatsOf and it started with capital letter
    amount: number
    genre: string
}

const catsOf: CatsOf = {
    amount: 1,
    genre: 'kitty'
}

//type assertion

let myCat: any = 'one big kitty'
let catType = <string>myCat //now myCat should be a number
let catTyp = myCat as string //another way of doing type assersion

//type assertion is explicitly asking the compiler to use some value as some certain type 


//function
function addNum(x: number, y: number): number {
    return x + y
}
console.log(addNum(1, 2))  //we gave both number type alspo even the return value as number type also 

//function with union and void

function log(message: string | number): void {
    console.log(message)
} //union type which means the message can be string and a number both but the return type is set to void for this

log('Helo')
log(1) // I can pass in any string and number but nothing else 

//interfaces


interface CatsOfinterface {
    readonly amount: number // its only read only and can't be changed later
    genre: string
    color?: 'string'  //the color is optional and it is not defined later
}

const catsOfkitty: CatsOfinterface = {
    amount: 1,
    genre: 'kitty'
}


/**
 Interfaces can't be used with unions and primitives but you can use objects and types with unions and primitives
 */

//interface with a function

interface MathAdd {
    (x: number, y: number): number
}  //interface

const add: MathAdd = (x: number, y: number): number => x + y  //arrow function
const Minus: MathAdd = (x: number, y: number): number => x - y //using same interface to write another function



//classes

class Neko {
    private id: number //means only can be accessed within the class
    name: string //it is public which means can be accessed through outside of the class

    /**
     * there are three types of classes and they are: public, private and protected
     * 
     * protected classes can be accessed through this class or the class extended from it
     * 
     * 
     * 
     * 
     */


    constructor(id: number, name: string) {   //classes can have methods as well
        //method is function within the class
        this.id = id  //this means the class we are in
        this.name = name //this.name is equals to the name that passed in the constructor


    }
}

const nekoSama = new Neko(1, 'neko')  //whenever this object will run the constructor runs as well


console.log(nekoSama) //will show us 1 and neko



//access modifiers or data modifiers

nekoSama.name = 'neko sama'


//extend class

class Kitty extends Neko { //kitty is a subclass

    colortype: string
    constructor(id: number, name: string, colortype: string) {
        super(id, name)
        this.colortype = colortype

    }
}

const kittyNeko = new Kitty(1, 'kitty', 'orange')

//generics 

//before using generics

/**.....
 * function getArray(items:any[]):any[] {
 * return new Array().concat(items)
 * }
 * 
 * let numArray = getArray([1,2,3,4])
 * let strArray = getArray (['1','2','3','4'])
 * 
 * // concat means joining two strings
 */

//after using generics

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['1', '2', '3', '4'])

strArray.push('any') //it will work but I can't push other types as it's set to string 



/**
 *
 * generics are build to use reusable components
 */

//later will use typescript for react






