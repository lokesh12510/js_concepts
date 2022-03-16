const user = {
  name: "lokesh",
  category: {
    admin: true,
    superUser: false,
    dob: "26/01/1999",
  },
  timeStamps: ["7:00", "8:00", "9:20"],
  LoginTime: function ({ myname = this.name, time }) {
    console.log(`${myname} logged in on ${this.timeStamps[time]}`);
  },
};

user.LoginTime({ time: 2 });

const [t1, , t2] = user.timeStamps;

// console.log(user.timeStamps);
// console.log(t1, t2);

const { name, ...info } = user;
const time = ["7:00", "8:00", "9:20"];
console.log(name);

for (i of time) {
  console.log(user.timeStamps?.level ?? "not added");
}
