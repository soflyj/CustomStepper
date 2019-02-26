import { yearsPerPage } from "@angular/material/datepicker/typings/multi-year-view";

export class Stepone {

    firstName: string;
    lastName: string;

    constructor(FirstName: string, LastName: string) {
        this.firstName = FirstName;
        this.lastName = LastName;
    }
}

export class Steptwo {

    make: string;
    model: string;
    year: number;

    constructor(Make: string, Model: string, Year: number) {
        this.make = Make;
        this.model = Model;
        this.year = Year;
    }
}

export class Stepthree {

    companyName: string;
    position: string;

    constructor(CompanyName: string, Position: string) {
        this.companyName = CompanyName;
        this.position = Position;
    }
}

export class Stepper {
    stepOne: Stepone;
    stepTwo: Steptwo;
    stepThree: Stepthree;

    constructor(StepOne: Stepone, StepTwo: Steptwo, StepThree: Stepthree) {
        this.stepOne = StepOne;
        this.stepTwo = StepTwo;
        this.stepThree = StepThree;
    }
}