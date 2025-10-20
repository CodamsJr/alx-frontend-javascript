interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number") {
    if (salary < 500) {
      return new Teacher();
    }
    return new Director();
  } else {
    return new Director();
  }
}

// ✅ Task 6: Create type predicate function
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// ✅ Task 6: Create executeWork function
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Example output for testing
console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks
