import { Flex, Heading } from '@chakra-ui/react';
import { CardProps } from '../../types/card';
import Card from '../../components/Card/Card';
import DiscordSVG from '../../components/icons/Discord';
import GithubSVG from '../../components/icons/Github';
import ShikimoriSVG from '../../components/icons/Shikimori';

const IndexPage = () => {
  const things: CardProps[] = [
    {
      index: 'thing_0',
      title: 'ResiCalc',
      href: 'https://resicalc.waseeen.ru',
      source: 'https://github.com/waseeen/resicalc',
    },
    {
      index: 'thing_1',
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
        />
      ),
    },
  ];
  const links: CardProps[] = [
    {
      index: 'link_2',
      title: 'Telegram',
      href: 'https://t.me/esaweene',
    },
    {
      index: 'link_1',
      title: 'Github',
      href: 'https://github.com/waseeen',
      icon: (
        <GithubSVG height={43} width={43} style={{ marginTop: 'auto', marginBottom: 'auto' }} />
      ),
    },
    {
      index: 'link_0',
      title: 'osu! profile',
      href: 'https://osu.ppy.sh/users/14798336',
    },
    {
      index: 'link_4',
      title: 'Shikimori',
      href: 'https://shikimori.one/waseeeen',
      icon: (
        <ShikimoriSVG height={43} width={43} style={{ marginTop: 'auto', marginBottom: 'auto' }} />
      ),
    },
    {
      index: 'link_5',
      title: 'Discord',
      href: 'https://discord.com/users/422000277563113472',
      icon: (
        <DiscordSVG height={43} width={43} style={{ marginTop: 'auto', marginBottom: 'auto' }} />
      ),
    },
    {
      index: 'link_3',
      title: 'Spotify',
      href: 'https://open.spotify.com/user/lwsqzdazgpkj4g0doe17v7pj0',
    },
  ];
  return (
    <>
      <Heading size={'lg'}>some things:</Heading>
      <Flex flexWrap={'wrap'} justify={'center'} columnGap={40} rowGap={4}>
        {things.map((card, i) => (
          <Card
            key={i}
            index={card.index}
            title={card.title}
            href={card.href}
            icon={card.icon}
            source={card.source}
          />
        ))}
      </Flex>
      <Heading size={'lg'}>some links:</Heading>
      <Flex flexWrap={'wrap'} justify={'center'} columnGap={40} rowGap={4}>
        {links.map((card, i) => (
          <Card key={i} index={card.index} title={card.title} href={card.href} icon={card.icon} />
        ))}
      </Flex>
    </>
  );
};

export default IndexPage;
