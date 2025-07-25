const employees = {
    engineers: {
        emp1: { id: 1, name: 'John Doe', occupation: 'Software Engineer' },
        emp2: { id: 2, name: 'Jane Smith', occupation: 'Data Scientist' }
    },
    placement: {
        emp3: { id: 3, name: 'Emily Jones', occupation: 'HR Manager' }
    },
    youtube: {
        emp4: { id: 4, name: 'Chris Brown', occupation: 'Content Creator' }
    }
};

const{engineers:{emp1:{name:engName,occupation:engOccupation}}} = employees;
console.log(engName);
console.log(engOccupation);
