var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

// TODO: create the class Teacher and a method teach

var Teacher = function() {   // Declared variable and assigned the function as value
    this.teach = function(subject) { // here also the function is value for teach
        console.log(this.name + " is now teaching " + subject);   //logs
    }
}
Teacher.prototype = new Person();  //Teacher object can access the value in Person,
                                    //Because Now Person the parent, so child(Teacher) can access values with inheritance

var him = new Teacher();  // declared the variable and assigned the value as Teacher function.

him.initialize("Tanish", 25); // passing the parameters to person function by calling it
him.teach("Inheritance");  // passing the parameters to Teacher function by calling it.