function handleDateFormat(date, hours = 0) {
  const removesUTC = date.split(/[.Z]/);
  const unformattedDate = new Date(removesUTC[0])
  const options = {
    hour: 'numeric', 
    minute: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  }
  const formattedDate = new Intl.DateTimeFormat('pt-BR', options).format(unformattedDate.setHours(unformattedDate.getHours() - hours))
  return formattedDate
}

export default handleDateFormat;
