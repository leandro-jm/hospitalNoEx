import { Get, Route } from "tsoa";

interface PatientResponse {
    name: string;
    age: number;
    temperature: number,
    bloodPressure: number,
    heartRate: number
  }

@Route("hospital")
export default class HospitalController {

    @Get("/patients")
    public patients(): PatientResponse {

        let healthPeople: PatientResponse[] = [
            {
                name: "John Doe",
                age: 30,
                temperature: 37,
                bloodPressure: 120,
                heartRate: 80
                
            },
        ];
        
        return healthPeople[0];
    }
}



