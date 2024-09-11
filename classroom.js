//Part 4: Classroom Management (Advanced Challenge)

//    Create the Array:
//        Name it classrooms.
//        Each object has:
//            name (string)
//            seats (number, 10-20)
//            faculty (string)
//    Functions:
//        displayClassrooms(), displayClassroomsByFaculty(facultyName):
//            Self-explanatory
//        findSuitableClassrooms(group):
//            Takes a group object (with name, students, faculty).
//            Returns classrooms that can fit the group and are for the right faculty.
//        sortBySeats(), sortByName():

// Sort the classrooms array accordingly.

const classrooms = [
    { name: "Math Classroom", seats: 20, faculty: "Mathematics" },
    { name: "Physics Lab", seats: 15, faculty: "Physics" },
    { name: "Biology Lab", seats: 20, faculty: "Biology" },
    { name: "Computer Science Lab", seats: 15, faculty: "Computer Science" },
    { name: "History Lecture Hall", seats: 10, faculty: "History" }
  ];
//    Functions:
//        displayClassrooms(), 
  function displayClassrooms() {
    classrooms.forEach(classroom => {
        console.log(`Classroom name: ${classroom.name} | Seats: ${classroom.seats} | Faculty: ${classroom.faculty}`);
    });
  }

 // displayClassroomsByFaculty(facultyName):

function displayClassroomsByFaculty(facultyName) {
  console.log(`**Classrooms for Faculty: ${facultyName}**`);
  const filteredClassrooms = classrooms.filter(classroom => classroom.faculty === facultyName);

  if (filteredClassrooms.length === 0) {
    console.log("  - No classrooms found for this faculty.");
  } else {
    filteredClassrooms.forEach(classroom => {
      console.log(`  - Classroom name: ${classroom.name} | Seats: ${classroom.seats}`);
    });
  }
}

//        findSuitableClassrooms(group):

function findSuitableClassrooms(group) {
    const group = {
        name: name,
        students: students,
        faculty: faculty
    };

    return group;

}

  displayClassrooms();
  displayClassroomsByFaculty("Physics");
