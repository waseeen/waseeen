import DiscordSVG from '../../components/icons/Discord';
import GithubSVG from '../../components/icons/Github';
import ShikimoriSVG from '../../components/icons/Shikimori';
import { CardProps } from '../../types/card';
import { PageElement, PageElementType } from '../../types/element';
// import PageWrap from '../../components/PageWrap/PageWrap';
// import { Flex, Heading, Container } from '@chakra-ui/react';
import AppPage from '../../components/Page/Page';

const IndexPage = () => {
  const things: CardProps[] = [
    {
      type: PageElementType.CARD,
      title: 'ResiCalc',
      href: 'https://resicalc.waseeen.ru',
      source: 'https://github.com/waseeen/resicalc',
    },
    {
      type: PageElementType.CARD,
      title: 'Pixel Battle',
      href: 'https://pb.waseeen.ru',
      source: 'https://github.com/waseeen/pixel-front',
      icon: (
        <img
          src={`https://pb.waseeen.ru/favicon.ico`}
          height={43}
          width={43}
          style={{
            marginTop: 'auto',
            marginBottom: 'auto',
            borderRadius: '50%',
          }}
          alt="waseeen pixel battle logo"
        />
      ),
    },
  ];
  const links: CardProps[] = [
    {
      type: PageElementType.CARD,
      title: 'Telegram',
      href: 'https://t.me/esaweene',
    },
    {
      type: PageElementType.CARD,
      title: 'Github',
      href: 'https://github.com/waseeen',
      icon: (
        <GithubSVG height={43} width={43} style={{ marginTop: 'auto', marginBottom: 'auto' }} />
      ),
    },
    {
      type: PageElementType.CARD,
      title: 'Spotify',
      href: 'https://open.spotify.com/user/lwsqzdazgpkj4g0doe17v7pj0',
    },
    {
      type: PageElementType.CARD,
      title: 'Discord',
      href: 'https://discord.com/users/422000277563113472',
      icon: (
        <DiscordSVG height={43} width={43} style={{ marginTop: 'auto', marginBottom: 'auto' }} />
      ),
    },
    {
      type: PageElementType.CARD,
      title: 'osu! profile',
      href: 'https://osu.ppy.sh/users/14798336',
    },
    {
      type: PageElementType.CARD,
      title: 'Shikimori',
      href: 'https://shikimori.one/waseeeen',
      icon: (
        <ShikimoriSVG height={43} width={43} style={{ marginTop: 'auto', marginBottom: 'auto' }} />
      ),
    },
  ];

  const elements: PageElement[] = [
    {
      type: PageElementType.TITLE,
      title: 'some things:',
    },
    {
      type: PageElementType.GROUP,
      cards: things,
    },
    {
      type: PageElementType.TITLE,
      title: 'some links:',
    },
    {
      type: PageElementType.GROUP,
      cards: links,
    },
  ];
  return (
    <>
      <AppPage config={{ elements, title: "Waseeen's field" }} />
      {/* <Flex justify="center" sx={{ width: '100%', py: '20px' }}>
        <Heading>Waseeen's field</Heading>
      </Flex>
      <Container maxW="container.xl" mt={4} p={4} bgColor="#2a2c34" borderRadius="10px">
        <PageWrap elements={elements} />
      </Container> */}
    </>
  );
};

export default IndexPage;
