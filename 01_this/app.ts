class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
  }

  describe() {
    console.log("Department:", this.name);
  }
}

const accounting = new Department("Accounting");
accounting.describe();

// this will be undefined
// JS this keyword refers to the object which calling a function
const accountingCopy = { describe: accounting.describe };
accountingCopy.describe();

class DepartmentTS {
  name: string;
  constructor(n: string) {
    this.name = n;
  }

  // for type check
  describe(this: DepartmentTS) {
    console.log("Department:", this.name);
  }
}

const accountingTS = new DepartmentTS("Accounting");
accountingTS.describe();

const accountingTSCopy = { describe: accountingTS.describe };
accountingTSCopy.describe();
