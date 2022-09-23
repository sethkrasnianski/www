import Cta from "components/Cta";
import type { ReactElement } from "react";

export default function ContactPage(): ReactElement {
  return (
    <section className="content" id="thank-you">
      <Cta top="Thank You" bottom="For Contacting Me!" />
      <p>
        After I decode the binary to text, bit by bit, your message should be
        ready to read. Once that&apos;s done, I&apos;ll have my people get in
        touch with your people... or whatever it is that we&apos;re supposed to
        do.
      </p>
    </section>
  );
}
