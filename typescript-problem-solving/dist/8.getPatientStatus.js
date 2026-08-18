"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPatientStatus = (patient) => {
    if (patient.type === 'general') {
        return "General Patient!";
    }
    else if (patient.type === 'emergency') {
        if (patient.emergencyLevel === 1) {
            return "Critical Emergency";
        }
        else if (patient.emergencyLevel === 2) {
            return "Serious Emergency";
        }
    }
    return "Moderate Emergency";
};
const hasan = { name: "Hasan", age: 45, type: "emergency", emergencyLevel: 3 };
const karim = { name: "Karim", age: 60, type: "emergency", emergencyLevel: 1 };
const rahim = { name: "Rahim", age: 35, type: "general" };
console.log(getPatientStatus(hasan));
console.log(getPatientStatus(karim));
console.log(getPatientStatus(rahim));
//# sourceMappingURL=8.getPatientStatus.js.map