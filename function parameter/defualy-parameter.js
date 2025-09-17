function StudentInfo(name, age, grade = 'A') {
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Grade: " + grade);
}                           
StudentInfo("Alice", 22);
StudentInfo("Bob", 20, "B");