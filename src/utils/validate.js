export const checkValidData = (email, password) => {
  // const isValidName = /^[a-zA-Z]+([-'\s][a-zA-Z]+)*$/.test(name);
  const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
    email
  );
  const isValidPassword =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

  // if (!isValidName) return "Name is not Valid";
  if (!isValidEmail) return "Email is not Valid";
  if (!isValidPassword) return "Password is not Valid";

  return null;
};
