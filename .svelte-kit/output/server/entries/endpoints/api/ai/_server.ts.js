import { s as serializeNonPOJOs } from "../../../../chunks/index4.js";
import { j as json } from "../../../../chunks/index.js";
async function POST({ request, fetch, url, locals: { company, user } }) {
  try {
    let data = await request.json();
    let u = "anonymous-user";
    if (user) {
      const { id, email, username, name } = user;
      u = JSON.stringify({
        id,
        name,
        username,
        email
      });
    }
    data = {
      ...data,
      user: u,
      conversation_id: "c_1f04f704a788e6e4",
      site: url.origin
    };
    const response = await fetch("https://askq-five.vercel.app/api/ai", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json"
      }
    }).then((res) => res.json());
    return json({ success: true, data: response });
  } catch (error) {
    error = serializeNonPOJOs(error);
    return json({ success: false, error });
  }
}
export {
  POST
};
