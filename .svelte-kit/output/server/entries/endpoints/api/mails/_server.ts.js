import { convert } from "html-to-text";
import pretty from "pretty";
import { c as create_ssr_component } from "../../../../chunks/index3.js";
import nodemailer from "nodemailer";
import { j as json } from "../../../../chunks/index.js";
const render = ({ template, props, options }) => {
  const { html } = (
    // @ts-ignore
    template.render(props)
  );
  if (options?.plainText) {
    return renderAsPlainText(html);
  }
  const doctype = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
  const markup = html;
  const document = `${doctype}${markup}`;
  if (options?.pretty) {
    return pretty(document);
  }
  return document;
};
const renderAsPlainText = (markup) => {
  return convert(markup, {
    selectors: [
      { selector: "img", format: "skip" },
      { selector: "#__svelte-email-preview", format: "skip" }
    ]
  });
};
const Mailer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
async function GET({ url }) {
  try {
    const data = url.searchParams.get("data");
    if (!data) {
      return json({ success: false, error: "Missing data parameter" });
    }
    const jsonData = JSON.parse(data);
    const result = await sendMailAsync(jsonData);
    return json({ success: true, info: result });
  } catch (error) {
    return json({ success: false, error: error.message || "An error occurred" });
  }
}
async function sendMailAsync(data) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 25,
    secure: false,
    auth: {
      user: data?.sender,
      pass: data?.password
    }
  });
  const emailHtml = render({
    template: Mailer,
    props: {
      authorName: data?.more?.school_name,
      authorImage: data?.more?.school_logo,
      baseUrl: data?.more?.school_url,
      code: data?.more?.code,
      reviewText: data?.more?.school_description,
      identification: data?.identification
    }
  });
  const options = {
    from: data?.sender,
    to: data?.receiver,
    subject: data?.subject,
    html: emailHtml
  };
  return new Promise((resolve, reject) => {
    transporter.sendMail(options, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
}
async function POST({ request }) {
  return json({ success: "ok" });
}
export {
  GET,
  POST
};
