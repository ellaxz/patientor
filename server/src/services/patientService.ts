import patientsData from "../../data/patients"
import patientData from "../../data/patients"
import { NewPatient, NonSensitivePatientData, Patient } from "../types"
import { v1 as uuid } from "uuid"

const getPatients = (): Array<Patient> => {
  return patientData
}

const getNonSensitivePatientsData = (): Array<NonSensitivePatientData> => {
  return patientData.map((patient) => ({
    id: patient.id,
    name: patient.name,
    dateOfBirth: patient.dateOfBirth,
    gender: patient.gender,
    occupation: patient.occupation,
  }))
}

const addPatient = (entry: NewPatient): Patient => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const newPatient = { id: uuid(), ...entry }
  patientsData.push(newPatient)
  return newPatient
}
export default { getPatients, getNonSensitivePatientsData, addPatient }
