import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

function InfoPersonal({
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
}) {
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleChangeDocumentType = (e) => {
    setDocumentType(e.target.value);
  };
  const handleChangeDocumentNumber = (e) => {
    setDocumentNumber(e.target.value);
  };
  const handleChangeTownship = (e) => {
    setTownship(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <Typography variant="h5" sx={{ mb: 1 }}>
        Información Personal
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="patientName"
            name="patientName"
            label="Nombre del Paciente"
            fullWidth
            autoComplete="name"
            variant="filled"
            value={name}
            onChange={handleChangeName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Numero de Teléfono"
            fullWidth
            autoComplete="tel"
            type="tel"
            variant="filled"
            value={phoneNumber}
            onChange={handleChangePhoneNumber}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required>
            <InputLabel id="documentType">Tipo de documento</InputLabel>
            <Select
              labelId="documentType"
              id="documentType"
              label="Tipo de documento"
              variant="filled"
              required
              value={documentType}
              onChange={handleChangeDocumentType}
            >
              <MenuItem value="CC">Cédula de ciudadanía (CC)</MenuItem>
              <MenuItem value="TI">Tarjeta de identidad (TI)</MenuItem>
              <MenuItem value="NUIP">Registro civil (NUIP)</MenuItem>
              <MenuItem value="CE">Cédula de extranjería (CE)</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="documentNumber"
            name="documentNumber"
            label="Numero de Documento"
            fullWidth
            type="number"
            variant="filled"
            value={documentNumber}
            onChange={handleChangeDocumentNumber}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="township"
            name="township"
            label="Municipio de Residencia"
            fullWidth
            type="text"
            autoComplete="address-level2"
            variant="filled"
            value={township}
            onChange={handleChangeTownship}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="email"
            name="email"
            label="Correo Electrónico"
            fullWidth
            type="email"
            autoComplete="email"
            variant="filled"
            value={email}
            onChange={handleChangeEmail}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default InfoPersonal;
