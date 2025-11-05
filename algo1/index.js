export function checkAge(age) {
  if (age <= 10) return "Enfant";
  else if (age <= 17) return "Adolescent";
  else if (age <= 50) return "Majeur";
  else return "Senior";
}
