export const isPasswordValid = (password) => {
  if (password.length < 8) {
    return "Password must be at least 8 characters long.";
  }
  if (password.length > 15) {
    return "Password must be at most 15 characters long.";
  }
  if (!password.match(/[a-z]/)) {
    return "Password must contain at least one lowercase letter.";
  }
  if (!password.match(/[A-Z]/)) {
    return "Password must contain at least one uppercase letter.";
  }
  if (!password.match(/[0-9]/)) {
    return "Password must contain at least one number.";
  }
  if (!password.match(/[^a-zA-Z0-9]/)) {
    return "Password must contain at least one special character.";
  }
  if (password.match(" ")) return "Password must not contain spaces.";
  return null;
};
