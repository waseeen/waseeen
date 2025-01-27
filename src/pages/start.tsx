import { PageElement, PageElementType } from '../types/element';
import AppPage from '../components/Page/Page';
import useTitle from '../hooks/useTitle';
import { useState } from 'react';
import { IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const openSearch = (query: string) => {
  const params = new URLSearchParams();
  params.set('q', query);
  window.open(`https://google.com/search?${params}`, '_self');
};

const IndexPage = () => {
  const [query, setQuery] = useState('');
  useTitle('startpage');
  const elements: PageElement[] = [
    {
      type: PageElementType.GROUP,
      cards: [
        {
          type: PageElementType.CARD,
          title: 'cybershoke',
          href: 'https://cybershoke.net/',
          target: '_self',
        },
        {
          type: PageElementType.CARD,
          title: 'google',
          href: 'https://google.com/',
          target: '_self',
        },
        {
          type: PageElementType.CARD,
          title: 'csstats',
          href: 'https://csstats.gg/',
          target: '_self',
        },
        {
          type: PageElementType.CARD,
          title: 'csnades',
          href: 'https://csnades.gg/',
          target: '_self',
        },
        {
          type: PageElementType.CARD,
          title: 'youtube',
          href: 'https://youtube.com/',
          target: '_self',
        },
      ],
    },
  ];
  return (
    <AppPage config={{ elements, title: 'startpage' }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          openSearch(query);
        }}
      >
        <InputGroup>
          <Input
            placeholder="Google search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <InputRightElement>
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<SearchIcon />}
              onClick={() => {
                openSearch(query);
              }}
            />
          </InputRightElement>
        </InputGroup>
      </form>
    </AppPage>
  );
};

export default IndexPage;
