const checkAge = (age) => {
  if (age < 18) {
    return (age = "Vous êtes mineur.");
  }
  if (age >= 18 && age <= 65) {
    return (age = "Vous êtes majeur.");
  }
  if (age >= 65) {
    return (age = "Vous êtes senior.");
  }
};
export default checkAge;
