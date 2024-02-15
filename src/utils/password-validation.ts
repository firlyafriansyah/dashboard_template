export default function PasswordValidation(password: string) {
  const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  return pattern.test(password);
}
