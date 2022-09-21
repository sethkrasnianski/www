import type { ReactElement } from "react";

export default function HomePage(): ReactElement {
  return (
    <section className="content" id="home">
      <hgroup className="cta">
        <h1>Full Stack</h1>
        <h1>Web Development</h1>
      </hgroup>
      <p>
        Welcome to my humble abode. I am Seth John Krasnianski, a Software
        Engineer at{" "}
        <a className="mojotech" href="https://www.mojotech.com">
          MojoTech
        </a>
        . Orchestrating the life cycle of web applications and solving problems
        is what I do for a living. When not on{" "}
        <a
          className="javascript"
          href="http://stackoverflow.com/users/1842294/seth?tab=tags"
        >
          JavaScript
        </a>{" "}
        benders, you can find me contributing to the open source community on{" "}
        <a className="github" href="http://github.com/sethkrasnianski">
          GitHub
        </a>
        .
      </p>
      <h2>In My Spare Time</h2>
      <p>
        I&apos;m an avid adventurer and try to spend as much time as I can
        traveling the world. Rain forests are amazing, but I really dig nature
        in general. Hiking, swimming, biking, and generally doing anything
        outdoors are what you&apos;ll find me doing outside of programming and
        traveling. Otherwise you can find me spending some time with my great
        big family.
      </p>
    </section>
  );
}
