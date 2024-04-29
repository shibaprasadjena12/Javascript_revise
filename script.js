function check() {
    const studentName = document.getElementById("studentName").value
    const studentMark = document.getElementById("mark").value

    if(studentMark >= 30 && studentMark < 50)
    {
        document.getElementById("dekhiba").innerHTML = `Student name is ${studentName} and his mark is ${studentMark}. He passed the examination in 3rd division.`
    }
    else if(studentMark >= 50 && studentMark < 70){
        document.getElementById("dekhiba").innerHTML = `Student name is ${studentName} and his mark is ${studentMark}. He passed the examination in 2nd division`
    }
    else if(studentMark >= 70){
        document.getElementById("dekhiba").innerHTML = `Student name is ${studentName} and his mark is ${studentMark}. He passed the examination in 1st division`
    }
    else{
        document.getElementById("dekhiba").innerHTML = `Student name is ${studentName} and his mark is ${studentMark}. He failed in the examination.`
    }

    // document.getElementById("dekhiba").innerHTML = `Student name is ${studentName} and his mark is ${studentMark}`
    return false;
}