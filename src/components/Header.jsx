import { Link } from 'react-router'

function Header(){

    return(
        <>
        <section className='flex-col mt-[10px]'>
          <div className='flex justify-between'>
         <Link to='/login' className='mr-[10px] text-[12px] text-center border-[2px] min-w-[65px] font-[impact] ml-[5px] p-[5px] 
         cursor-pointer lg:min-w-[100px] lg:text-[1.5rem] lg:ml-[20px] lg:mt-[20px]'>
         Login</Link>
        <h1 className='text-center text-[27px] font-[impact] lg:text-[3rem]'>John Doe</h1>
         <Link to='/blogs' className='ml-[10px] text-[12px] text-center border-[2px] min-w-[65px] font-[impact] mr-[5px] p-[5px] 
         cursor-pointer lg:min-w-[100px] lg:text-[1.5rem] lg:mr-[20px] lg:mt-[20px]'>
         Blogs</Link>
         </div>
         <video autoPlay loop src="../../public/Animation.mp4" className='w-[250px] ml-auto mr-auto mt-[100px] lg:w-[700px]'></video>
       </section>
         </>
    )
}

export default Header
















//Responsive Design
/* 
Responsive design is a method of creating websites in a way that the user interface is rendered accurately across devices with
different aspect ratios.

Tailwindcss uses a mobile-first breakpoint system. This means that all css utility classes will apply to mobile
and any devices larger than that. In practise this means that we have to add breakpoints as the device's screen 
size increases. Generally we can add a breakpoint for medium devices. This means that when the device's screen size matches the screen size 
of the medium breakpoint(min: 768px) the new css will applied. Finally we can add an lg breakpoint. This means that after the device's screen size reaches the 
lg breakpoint(min-width: 1024px) new css will applied once again.
*/

//Firebase 
/*
Firebase contains tools and services that developers can use to build and manage mobile and web applications.

Objects
Objects are data structures that are used to store a collection of related data and functionality. Objects contain
properties that are stored as key value pairs. The keys act as a unique identifier within the object and values
are any data type that is then mapped to a key.
Methods are functions that are stored as properties of an object.

const user = {
firstName: 'John',
lastName: 'Doe',
age: 20,
subscription: 'beginner',
print(){
console.log(firstName, lastName, age, subscription)
},
}

const userList = [
{
firstName: 'John',
lastName: 'Doe',
age: 20,
subscription: 'beginner',
print(){
console.log(firstName, lastName, age, subscription)
},
},
{
firstName: 'Michael',
lastName: 'Jones',
age: 30,
subscription: 'pro',
print(){
console.log(firstName, lastName, age, subscription)
},
},
{
firstName: 'Steve',
lastName: 'Johnson',
age: 25,
subscription: 'beginner',
print(){
console.log(firstName, lastName, age, subscription)
},
},
]


Classes
Classes act as a template for creating objects in Javascripts.
Create a class for users that might be singed up to your subscription.

class subscriber{
  constructor(firstName, lastName, age, subscription){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.subscription = subscription;
  }
}

const John = new Subscriber('John', 'Doe', 20, beginner);
const Michael = new Subscriber('Michael', 'Jones', 30, pro);
const Steve = new Subscriber('Steve', 'Johnson', 25, beginner);

*/