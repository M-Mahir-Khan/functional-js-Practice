// PARTIAL APPLICATION


// Partial application is a functional programming technique where you create a new function by fixing a number of parameters of an existing function, producing another function with fewer parameters.

// exapmle :

function showStudent(collegeName,studentName,studentAge){
    console.log(collegeName,studentName,studentAge);
}

// showStudent("Abc","student1",16);

// with bind method

const collegeName1 = showStudent.bind(null,'Anpad college')
collegeName1('student2',12)
collegeName1('student3',80)

const collegeName2 = showStudent.bind(null,"Chai wala college")
collegeName2('student4',110)

// using closure

function showStudentClosure(collegeName){
    return function(studentName,studentAge){
        console.log(collegeName,studentName,studentAge);
    }
}

const collegeName3 = showStudentClosure("ABC")
collegeName3('babu rao', 45)

