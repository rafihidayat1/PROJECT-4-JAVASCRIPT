
// document.writeln("hello world")

//ini komen satu baris
console.log("Hello World")

/*
ini komen multiline 
ini baris kedua
*/
console.log("hai..")

//tipe data number
console.log(2 + 2)
console.log(2,3)

// tipe data boolean
console.log(true)
console.log(false)

//variable
var fullname = "Rafi Hidayat"
var fullname = "jhon doe"

// const fullname_satu = "jhon doe 2"
// console.log(fullname_satu)
// fullname_satu = "jhon doe 2"
// console.log(fullname_satu)

let fullname_tiga = "richard roe"
console.log(fullname_tiga)
fullname_tiga = "richard roe 3"
console.log(fullname_tiga)

//Operator Aritmatika
let result = 3 + 5
console.log(result)

let resultPrengurangan = 10 - 8
console.log(resultPrengurangan)

let resultperkalian = 10 * 2
console.log(resultperkalian)

let resultBagi = 10/2
console.log(resultBagi)

let resultSisa = 10%3
console.log(resultSisa)

const number1 = prompt ('number 1')
const number2 = prompt ('number 2')
const result2 = number1/number2
alert("hasil bagi:" + result2) 

//Operator Perbandingan
let hasil = 5 == 5 //true
console.log(hasil)

let hasil2 = 5 > 3  //true
console.log(hasil2) 

let hasil3 = 5<3 //false
console.log(hasil3)

let hasil4 = 5=="5"
console.log(hasil4)


// Operator Logika
const nilaiUjian = 70
const nilaiAbsen = 80

const lulusUjian = nilaiUjian > 75
const lulusAbsen = nilaiAbsen > 75

const lulus = lulusUjian && lulusAbsen
console.log("Hasil Ujian", lulus)

const lulus2 = lulusUjian || lulusAbsen
console.log("Hasil Ujian:", lulus2)


//STRING TEMPLATE
const nama = "Rafi Hidayat"
const value = 80
console.log("Nama:", + nama +  ",Value:" + value)
console.log('nama : ${nama}, Value: ${value}')


//ARRAY
const cars = ['Ayla','Agya','calya','Avanza']

const motorCycle=['Vario','beat', 'Scoopy','NMax']

console.log("Data:", cars)
console.log('Data Pertama=', cars[0])
// console.table(cars)
console.log(cars.length)

//nambah data
cars.push ('Kijang','BMW','Pajero')
console.log(cars)

//Concat - gabung data
const group = motorCycle.concat(cars)
console.table(group)


