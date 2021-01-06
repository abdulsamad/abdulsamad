const { verify } = require('hcaptcha');

exports.handler = async (event) => {
  const { token } = event.queryStringParameters;
  const secret = process.env.SITE_RECAPTCHA_SECRET;

  try {
    const res = verify(secret, token);

    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ err }),
    };
  }
};
