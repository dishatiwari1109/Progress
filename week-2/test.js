const user={
    username: "Alice",
    age: 30,
    welcomeMessage: () => {
        return `Welcome, ${this.username}! You are ${this.age} years old.`;
    }
}
user.username="Disha";
console.log(user.welcomeMessage());