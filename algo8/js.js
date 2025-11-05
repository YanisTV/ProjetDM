function verifEmail() {
  let email = "yanis@gmail.com";
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log(regex.test(email));
}
