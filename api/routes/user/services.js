const jwt = require("jsonwebtoken");
const userModel = require("../../model/user");
const validPassword = require("../../libs/passwordUnit").validPassword;
const genPassword = require("../../libs/passwordUnit").genPassword;

module.exports = {
  authenticate,
  getById,
  register
};

async function authenticate({ username, password }) {
  const user = await userModel.findOne({ username });
  const isValid = validPassword(password, user.hash, user.salt);
  if (isValid) {
    const token = jwt.sign(
      {
        sub: user._id,
        role: user.role,
      },
      "secret",
      { 
        expiresIn: '1d'
      }
    );
    const { hash,salt,role, ...userWithoutPasswordRole } = user._doc;
    return {
      ...userWithoutPasswordRole,
      token: 'Bearer '+ token,
    };
  }
}

// async function getAll() {
//   return user.map((u) => {
//     const { password, ...userWithoutPassword } = u;
//     return userWithoutPassword;
//   });
// }

async function getById(id) {
  const user = await userModel.findOne({_id:id});
  if (!user) return;
  return user;
}
async function register({username,password,role,phone}){
    const passwordData = genPassword(password)
    const userDoc = userModel.create({
        username : username, 
        salt : passwordData.salt,
        hash : passwordData.hash,
        role: role,
        phone: phone
    })
    return userDoc
}
