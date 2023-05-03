import bcrypt from "bcrypt";

export const hashPassword = (paswd, saltRounds) => {
  // generate slat
  const salt = bcrypt.genSaltSync(saltRounds);
  // console.log(salt);

  // create hash
  return bcrypt.hashSync(paswd, salt, (err, hash) => (!err ? hash : err));
};

export const comparePassword = (plainPaswd, hashedPaswd) => {
  return bcrypt.compareSync(plainPaswd, hashedPaswd, (err, result) =>
    !err ? result : err
  );
};
