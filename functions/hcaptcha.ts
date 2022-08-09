import { Handler } from "@netlify/functions";
import { verify } from "hcaptcha";

const handler: Handler = async (event, context) => {
  try {
    const { token } = event.body as any;
    const secret = process.env.SITE_HCAPTCHA_SECRET as string;

    // No token found
    if (!token) throw new Error("No token found");

    //
    const res = await verify(secret, token);

    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (err) {
    // Catching Errors
    return {
      statusCode: 500,
      body: JSON.stringify({ err }),
    };
  }
};

export { handler };
