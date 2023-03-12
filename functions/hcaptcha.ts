import type { Handler } from '@netlify/functions';
import { verify } from 'hcaptcha';

const handler: Handler = async (event) => {
  try {
    //  Check body contains data
    if (!event.body) throw new Error('No data found in body!');

    const { token } = JSON.parse(event.body);
    const secret = process.env.HCAPTCHA_SITE_SECRET;

    // No token found
    if (!token) throw new Error('No token found!');

    // Verify the hCaptcha token
    const res = await verify(secret, token);

    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (err) {
    const errMsg = err instanceof Error ? err.message : 'Something went wrong!';

    return {
      statusCode: 500,
      body: JSON.stringify({ err: errMsg }),
    };
  }
};

export { handler };
