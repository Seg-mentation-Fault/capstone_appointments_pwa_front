import axios from 'axios';

const baseUrl = 'https://capstone-appointments-api-ta75cu5v6q-ue.a.run.app';

const postAppointment = async ({
  name,
  phoneNumber,
  documentType,
  documentNumber,
  township,
  email,
  eps,
  appointmentType,
  specializationType,
  coosaludDiagnostic,
}) => {
  const dataSend = {
    name,
    phone: phoneNumber,
    document_type: documentType,
    document_number: documentNumber,
    email: email || 'N/A',
    township,
    eps,
    requirement_type: appointmentType,
    specialization_type: specializationType || 'N/A',
    coosalud_diagnostic: coosaludDiagnostic || 'N/A',
    platform: 'Web',
  };

  try {
    const { data } = await fetchData(`${baseUrl}/appointments`, 'post', dataSend);

    return data;
  } catch (error) {
    console.error(error);
  }
};

const fetchData = async (url, method, data = {}) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  try {
    const result = await axios({
      method,
      url,
      headers,
      data,
    });

    return result;
  } catch (error) {
    console.error(`Shets api: ${error}`);
  }
};

export { postAppointment };
