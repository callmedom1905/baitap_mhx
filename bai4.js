var student = {
    name: "Trần Chí Minh",
    age: 19,
    mark: 8.0
}

function printObject(){
    for(var i in student){
        console.log(student[i])
    }

}
printObject();