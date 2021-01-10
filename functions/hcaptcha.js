const { verify } = require('hcaptcha');

exports.handler = async (event) => {
  const { token } = event.queryStringParameters;
  const secret = process.env.SITE_HCAPTCHA_SECRET;

  try {
    const res = await verify(secret, token);

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
