import jwt from "jsonwebtoken";

export const jwtSign = (data) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET_KEY);
  return token;
};

export const jwtVerify = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  console.log(decoded)
  return decoded
};
