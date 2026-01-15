const user={
    username: "Alice",
    age: 30,
    welcomeMessage: () => {
        return `Welcome, ${this.username}! You are ${this.age} years old.`;
    }
}
user.username="Disha";
console.log(user.welcomeMessage());
const arr=[10, 20, 30, 10, 40];
const ans=arr.reduce((total, i)=>{
    return total+i;
}, 0);
console.log(ans);