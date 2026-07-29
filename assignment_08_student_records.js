const readlineSync = require('readline-sync');

let students = [];

function calculateAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

function addStudent() {
    const name = readlineSync.question('Student name: ');
    const id = readlineSync.questionInt('Student ID: ');
    const numScores = readlineSync.questionInt('How many scores? ');

    const scores = [];
    for (let i = 0; i < numScores; i++) {
        const score = readlineSync.questionInt(`Enter score ${i + 1}: `);
        scores.push(score);
    }

    students.push({ name, id, scores });
    console.log(`Student "${name}" added successfully.`);
}

function displayAllStudents() {
    if (students.length === 0) {
        console.log('No students have been added yet.');
        return;
    }

    console.log('\nName                 ID          Scores               Average');
    console.log('-----------------------------------------------------------------');

    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        const avg = calculateAverage(student.scores);

        console.log(
            `${student.name.padEnd(21, ' ')}${student.id.toString().padEnd(12, ' ')}${student.scores.join(', ').padEnd(21, ' ')}${avg.toFixed(2)}`
        );
    }
}

function calculateAverageForStudent() {
    const id = readlineSync.questionInt('Enter student ID: ');

    const student = students.find((s) => s.id === id);

    if (!student) {
        console.log('Error: Student ID not found.');
        return;
    }

    const avg = calculateAverage(student.scores);
    console.log(`${student.name}'s average score: ${avg.toFixed(2)}`);
}

function showMenu() {
    console.log('\n================================');
    console.log('   STUDENT RECORD SYSTEM MENU');
    console.log('================================');
    console.log('1. Add student');
    console.log('2. Display all students');
    console.log('3. Calculate average score');
    console.log('4. Quit');
}

function main() {
    let running = true;

    while (running) {
        showMenu();
        const choice = readlineSync.questionInt('Enter your choice (1-4): ');

        if (choice === 1) {
            addStudent();
        } else if (choice === 2) {
            displayAllStudents();
        } else if (choice === 3) {
            calculateAverageForStudent();
        } else if (choice === 4) {
            console.log('Goodbye!');
            running = false;
        } else {
            console.log('Error: Invalid choice. Please enter a number between 1 and 4.');
        }
    }
}

main();