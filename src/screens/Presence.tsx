import Head from 'next/head';

import Link from "@components/Link";
import PageWrapper from "../components/PageWrapper";

const Presence = () => (
    <PageWrapper forceReadableWidth>
        <Head>
            <title>Presence | 5R33CH4</title>
        </Head>
        <h1>👀 Presence</h1>
        <p>
            You may have noticed that while I'm doing something like listening to
            Spotify, programming in VSCode or playing a game, it'll appear in the
            bottom left of my site. This is thanks to an open-source project
      called <Link href={"https://lanyard.rest"}>Lanyard</Link> which pulls live presences from Discord and updates an API and WebSocket service. It takes {'<'}10 seconds to set up!
    </p>
    </PageWrapper>
);

export default Presence;
