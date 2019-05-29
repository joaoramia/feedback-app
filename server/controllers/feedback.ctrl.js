const User = require('../models/User');
const Site = require('../models/Site');

exports.postAnswer = async (req, res, next) => {
  try {
    const data = req.body;
    const user = await User.findOne({ siteToken: data.token });

    if (user && data.siteUrl && data.siteUrl.includes(user.siteUrl)) {
      let site = await Site.findOne({ siteToken: data.token });
      const answer = {
        code: data.value,
        date: +new Date()
      };

      if (!site) {
        site = new Site({ siteUrl: data.siteUrl, siteToken: data.token, answers: [answer] });
        await site.save();
      } else {
        site.answers.push(answer);
        await site.save();
      }
      res.status(200).send({ success: true });
    } else {
      res.status(403).send({ message: 'siteUrl does not match user' });
    }
  } catch (err) {
    console.log(err);
    return res.status(403).send({ message: 'Something went wrong.' });
  }
};

exports.getAnswers = async (req, res, next) => {
  try {
    const { userId } = req;
    if (!userId) {
      return res.status(404).send({ message: 'User not found' });
    }
    const user = await User.findById(userId);
    const { name, email, id, siteUrl, siteToken } = user;

    const site = await Site.findOne({ siteToken });

    if (!site) {
      res.status(404).send({ message: 'Site not yet configured' });
    } else {
      res.status(200).send({ data: site });
    }
  } catch (err) {
    return res.status(500).send({ message: 'Something went wrong.' });
  }
};
