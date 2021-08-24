import Head from 'next/head';

import Link from '@components/Link';
import PageWrapper from '../components/PageWrapper';

const Etc = () => (
  <PageWrapper>
    <Head>
      <title>More | 5R33CH4</title>
    </Head>
    <h1>/etc</h1>
    <h2> Thanks</h2>
    <p>Thanks for visiting. I hope you enjoyed your stay.
    <p>Made using everything from sicks and stones to React & Nextjs and by improving each component.</p>
    The source code for this website is available at <Link href={"https://github.com/5R33CH4/sreecha"}>5R33CH4/sreecha</Link>.</p>
    <h2> Contact</h2>
    <p>I'm most responsive through Discord DMs, you can <Link href={"https://discord.gg/zBfSCasSnX/"}>click here</Link> to DM me on Discord.</p>
    <p>Otherwise you can also send me a message via my twitter <a href={""}>@5R33CH4</a></p>
    <h2> Other</h2>
    <ul>
      <li><Link href="/presence">/presence</Link></li>
      <li><a href={"https://socials.sreecha.me/"}>Socials</a></li>
    </ul>
  </PageWrapper>
)

export default Etc;