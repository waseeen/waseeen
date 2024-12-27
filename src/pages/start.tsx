import { PageElement, PageElementType } from '../types/element';
import AppPage from '../components/Page/Page';
import useTitle from '../hooks/useTitle';

const IndexPage = () => {
  useTitle('startpage');
  const elements: PageElement[] = [
    {
      type: PageElementType.GROUP,
      cards: [
        {
          type: PageElementType.CARD,
          title: 'cybershoke',
          href: 'https://cybershoke.net/',
        },
        {
          type: PageElementType.CARD,
          title: 'google',
          href: 'https://google.com/',
        },
        {
          type: PageElementType.CARD,
          title: 'csstats',
          href: 'https://csstats.gg/',
        },
        {
          type: PageElementType.CARD,
          title: 'csnades',
          href: 'https://csnades.gg/',
        },
      ],
    },
  ];
  return <AppPage config={{ elements, title: 'startpage' }} />;
};

export default IndexPage;
