let user = {
   name:
   {
    first: 'John',
    last: 'Smith'
   }

}
console.log(`${user.name.first} ${user.name.last}`);

let user1 = {
    name:
    {
     first: 'Paul',
     last: 'Smith'
    }
 
 }
 console.log(`${user1.name.first} ${user1.name.last}`);


 delete user.name.first;
 console.log(`${user.name.first} ${user.name.last}`);