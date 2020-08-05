const person = { name: 'Jack William', age: 17, job:'facebooker', gfName: 'Ema Watson', address: 'kochu khet' , phone: '01737737' , friends:[ 'Tom hancks', 'tom cruise', 'tom yarn'] };

const {phone , gfName, address, salary} = person;
// const gfName = person.gfName;
// const phone = person.phone;


// console.log(gfName,salary, phone, address);
// console.log(gfName,salary, phone, address);

const friends = [ 'Sakib Khan', 'Arman Khan', 'Aamir Khan', 'Salman Khan', 'Sharuk Khan'];
const [chotoFriend,...olderF, ...restFriends] = friends;
console.log(chotoFriend, nextFriend);