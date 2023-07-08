console.log("callbacks as promises");
let display = document.getElementsByClassName('display')[0];

const students = [
    {name:"shruu", lang:"Java"},
    {name:"gayu", lang:"python"}
];

function enrollStudent(student) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false;
            if(!(student.name.length >= 3)) {
                error = 'name field must have atleast 3 letters';
            }
            if(student.lang.length == "" ) {
                error = 'language field is empty!!';
            }

            if(!error) {
                students.push(student);
                resolve();
            } else {
                reject(error);
            }
        }, 3000);
    })
}

function getStudents() {
    console.log("getting students");
    setTimeout(() => {
        let UIString ="";
        students.forEach((e) => {
            UIString += e.name + " : " + e.lang + "<br>";
        })
        display.innerHTML = UIString;
    }, 1000);
}

enrollStudent({name:"shruu", lang:"figma"}).then(function() {
    console.log("student has been enrolled");
    getStudents();
}).catch(function(error) {
    console.log("error occured:\n" + error);
})
