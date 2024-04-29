// Object de-structring

const user = new Object();

user.name = "Shibaprasad jena"
user.age = 25
user.location = "Lankapada"
user.dateOfBirth = "07/04/1998"

const {dateOfBirth : dob} = user

console.log(dob);