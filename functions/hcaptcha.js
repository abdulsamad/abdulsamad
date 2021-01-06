const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { token } = event.queryStringParameters;
  const secret = process.env.SITE_RECAPTCHA_SECRET;

  const verifyURL = `https://hcaptcha.com/siteverify?response=${token}&&secret=${secret}`;

  try {
    const res = await fetch(verifyURL, {
      method: 'POST',
    });

    return {
      statusCode: 200,
      body: JSON.stringify(res.json()),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ err }),
    };
  }
};
