import Cta from "components/Cta";

export default function ContactPage() {
  return (
    <form
      id="contact"
      name="contact"
      method="POST"
      action="/thank-you"
      netlify-honeypot="robot"
      data-netlify="netlify"
    >
      <Cta top="Hello" bottom="stranger!" />
      <p>
        Thinking about contacting me? Before you do, I must let you know that I
        am<strong>not available</strong> for freelance. I&apos;d be glad to hear
        your thoughts, questions, or about your fun projects!
      </p>
      <fieldset>
        <label>Name</label>
        <input type="text" name="name" required minLength={2} maxLength={255} />

        <label>E-mail</label>
        <input type="email" name="email" required />

        <label>Subject</label>
        <input
          type="text"
          name="subject"
          required
          minLength={2}
          maxLength={255}
        />

        <label>Message</label>
        <textarea name="message" required></textarea>

        <input className="hide" type="text" name="robot" />

        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}
