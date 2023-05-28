export const initialName = (firstName, lastName) => {
  let initial = firstName[0];
  if (lastName.length > 0) initial += lastName[0];
  return initial.toUpperCase();
};

export const countAge = (dob) => {
  const currDate = new Date();
  const birthDate = new Date(dob);

  let months = (currDate.getFullYear() - birthDate.getFullYear()) * 12;
  months -= birthDate.getMonth();
  months += currDate.getMonth();

  months = months <= 0 ? 0 : months;

  let year = Math.floor(months / 12);
  year = year > 1 ? year.toString() + " years" : year.toString() + " year";

  let month = months % 12;
  month = month > 1 ? month.toString() + " months" : month.toString() + " month";

  if (months <= 12) return month;

  return year + " " + month;
};