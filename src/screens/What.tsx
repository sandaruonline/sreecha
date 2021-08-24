import Head from 'next/head';

import Link from "@components/Link";
import PageWrapper from "@components/PageWrapper";

const Home = () => {
  return (
    <PageWrapper forceReadableWidth>
      <Head>
        <title>What I Do | 5R33CH4</title>
      </Head>
      <h1>What I Do</h1>
      <p>16 y/o developer, inventor and designer.</p>
      <p>
        I design, build and publish projects of quality and reliability.
        Currently, I'm director and developer at{" "}<Link href="https://github.com/tesseract-org">Tesseract</Link>.
      </p>
      <p>In my free time, I invest in and help startups with strategy, development, fundraising and more. Got a big descision to make? I'm always down to chat to new founders.</p>
      <p>I'm always looking out for new projects to write code for. If you're interested, DM me in Discord</p>
    </PageWrapper>
  );
};

export default Home;
