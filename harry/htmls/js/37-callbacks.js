console.log("37th tut : callback");
let display = document.getElementsByClassName('display')[0];

const students = [
    {name:"shruu", lang:"Java"},
    {name:"gayu", lang:"python"}
];

function enrollStudent(student, callback) {
    setTimeout(() => {
        console.log("enrolled student")
        students.push(student);
        callback();
    }, 3000);
}

function getStudents() {
    setTimeout(() => {
        console.log("getting students");
        let UIString ="";
        students.forEach((e) => {
            UIString += e.name + " : " + e.lang + "<br>";
        })
        display.innerHTML = UIString;
    }, 1000);
}

enrollStudent({name:"shreya", lang:"figma"}, getStudents);