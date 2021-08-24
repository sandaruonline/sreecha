import Head from 'next/head';
import styled from "styled-components";

import PageWrapper from "@components/PageWrapper";
import Co from "@components/Co";
import Repo from "@components/Repo";

const GreentreeIcon = '/p-static/images/greentree-icon.png' as string;
const RevoltIcon = '/p-static/images/revolt-icon.png' as string;
const TesseractIcon = '/p-static/images/tesseract-icon.png' as string;

const Where = () => {
  return (
    <PageWrapper>
      <Head>
        <title>Where I've Done It | 5R33CH4</title>
      </Head>
      <h1> Where I've Done It</h1>
      <h3> Companies</h3>
      <CoWrapper>
        <Co url="https://github.com/tesseract-org" name="Tesseract Org" iconReference={TesseractIcon} tagline="Code Development Org" role="Founder & Developer" what="Revolutionise the world by </>. Made to create software and automations to 'make life just a click away'" />
        <Co url="https://revoltstudio.github.io/" name="Revolt Studio" iconReference={RevoltIcon} tagline="Game Development" role="Developer" what="Make video games for the consumer market." />
        <Co url="https://greentree.team/" name="GreenTree Team" iconReference={GreentreeIcon} tagline="Software Development" role="Admin & Developer" what="A team of developers who code awesome Open-Source Projects" />
      </CoWrapper>

      <h1>᲼᲼᲼᲼᲼᲼</h1>
      <b><h3> Open-source Projects</h3></b>
      <Repo name="Pine" url="https://github.com/5R33CH4/Pine" primaryLanguage="JavaScript" description="🌐 Best ever Web Browser to give the user the most from what the www has to offer." />
      <Repo name="Mango" url="https://read-mango.herokuapp.com/" primaryLanguage="JavaScript" description="🍋 Manga Reader on the Web." />
      <Repo name="Termex" url="https://github.com/5R33CH4/Termex" primaryLanguage="TypeScript" description="💻 Termex - an Terminal File Explorer" />
      <Repo name="B00GL3" url="https://github.com/5R33CH4/boogle" primaryLanguage="sass" description="Better Google : A 🔍 Engine than Works !" />
      <Repo name="Gradient Gen" url="https://github.com/5R33CH4/GradientGen" primaryLanguage="HTML" description="🔮 Custom gradient image generator" />
      
      <Repo name="sreecha.me" url="https://github.com/5R33CH4/sreecha" primaryLanguage="TypeScript" description="This very epic website !" />
      
      <h1>᲼᲼᲼᲼᲼᲼</h1>
      <h3> Side Projects...</h3>
      <Repo name="Oneshot" url="https://github.com/5R33CH4/OneShot" primaryLanguage="JavaScript" description="Adjustable gaming Crosshair Overlay for any screen." />
      <Repo name="Game-of-Life Emulator" url="https://github.com/5R33CH4/OneShot" primaryLanguage="JavaScript" description="Game of Life - Done the best possible way." />
      <Repo name="Stream Torrent" url="https://github.com/5R33CH4/streamtorrent" primaryLanguage="JavaScript" description="Stream Torrent directly without having to download it!" />
      
      <h1>᲼᲼᲼᲼᲼᲼</h1>
      <h3> Coming Soon...</h3>
      <Repo name="5R33CH4-CLI" url="https://github.com/5R33CH4/5R33CH4-CLI" primaryLanguage="Python" description="The one and only All-in-One CLI You would ever need." />

    </PageWrapper>
  )
}

const CoWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 2rem 2rem;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export default Where;