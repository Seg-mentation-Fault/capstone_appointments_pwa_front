import { useState } from 'react';

const useDataForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [township, setTownship] = useState('');
  const [email, setEmail] = useState('');
  const [eps, setEps] = useState('');
  const [appointmentType, setAppointmentType] = useState('');
  const [specializationType, setSpecializationType] = useState('');
  const [coosaludDiagnostic, setCoosaludDiagnostic] = useState('');

  return {
    name,
    setName,
    phoneNumber,
    setPhoneNumber,
    documentType,
    setDocumentType,
    documentNumber,
    setDocumentNumber,
    township,
    setTownship,
    email,
    setEmail,
    eps,
    setEps,
    appointmentType,
    setAppointmentType,
    specializationType,
    setSpecializationType,
    coosaludDiagnostic,
    setCoosaludDiagnostic,
  };
};

export { useDataForm };
