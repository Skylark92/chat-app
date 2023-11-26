const User = require('../Models/user');
const userController = {}

userController.saveUser = async (userName, sid) => {
  // 이미 존재하는 유저인지 확인
  let user = await User.findOne({ name: userName });

  // 신규 정보 등록
  if (!user) {
    user = new User({
      name: userName,
      token: sid,
      online: true,
    })
  }

  user.token = sid;
  user.online = true;

  await user.save();
  return user;
}

userController.checkUser = async (sid) => {
  const user = await User.findOne({ token: sid });
  if (!user) throw new Error('user not found');
  return user;
}

module.exports = userController;