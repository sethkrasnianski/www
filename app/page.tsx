import PageHeading from "components/PageHeading";
import styles from "styles/Home.module.scss";

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <PageHeading eyebrow="Seth John Krasnianski">
          <span className={styles.heroLine}>Senior</span>
          <span className={styles.heroAccent}>Software Engineer</span>
        </PageHeading>
      </section>

      <section className={styles.body}>
        <p className={styles.paragraph}>
          Welcome to my humble corner of the web. I am Seth, a senior software
          engineer at{" "}
          <a
            className={styles.linkMojo}
            target="_blank"
            rel="noreferrer"
            href="https://www.mojotech.com"
          >
            MojoTech
          </a>
          . Orchestrating the life cycle of web applications and solving hard
          problems is what I do for a living. When I&apos;m not on{" "}
          <a
            className={styles.linkJs}
            target="_blank"
            rel="noreferrer"
            href="https://stackoverflow.com/users/1842294/seth?tab=topactivity"
          >
            JavaScript
          </a>{" "}
          benders, you&apos;ll find me contributing to the open source community
          on{" "}
          <a
            className={styles.linkGh}
            target="_blank"
            rel="noreferrer"
            href="http://github.com/sethkrasnianski"
          >
            GitHub
          </a>
          .
        </p>

        <div className={styles.sectionLabel}>
          <span>In My Spare Time</span>
          <span className={styles.hairline} />
        </div>

        <p className={styles.paragraph}>
          I&apos;m an avid adventurer and try to spend as much time as I can
          traveling the world. Rain forests are amazing, but I really dig nature
          in general; hiking, swimming, biking, and generally doing anything
          outdoors. Otherwise you can find me spending time with my great big
          family.
        </p>
      </section>
    </>
  );
}
