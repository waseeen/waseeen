import { Flex, Heading, Container, extendTheme } from '@chakra-ui/react';
import { PageConfig } from '../../types/page';
import PageWrap from '../PageWrap/PageWrap';
import { useAtom } from 'jotai';
import { themeState } from '../../jotai';
import { useEffect } from 'react';

const AppPage = ({ config }: { config: PageConfig }) => {
  const { elements, bgColor, fgColor, title } = config;
  // const { elements, bgColor, title } = config;
  const [theme, setTheme] = useAtom(themeState);
  useEffect(() => {
    const newTheme = extendTheme({
      fonts: {
        heading: `'Roboto Mono', monospace`,
        body: `'Roboto Mono', monospace`,
      },
      semanticTokens: {
        colors: {
          'chakra-body-bg': {
            _light: bgColor ?? '#2e3d45',
          },
          'chakra-body-text': {
            _light: fgColor ?? 'white',
          },
        },
      },
      initialColorMode: 'light',
      useSystemColorMode: false,
    });
    setTheme(() => newTheme);
    return () => setTheme(theme);
  }, [bgColor, fgColor, setTheme, theme]);
  return (
    <>
      {title && (
        <Flex justify="center" sx={{ width: '100%', py: '20px' }}>
          <Heading>{title}</Heading>
        </Flex>
      )}
      <Container maxW="container.xl" mt={4} p={4} bgColor={'#2a2c34'} borderRadius="10px">
        <PageWrap elements={elements} />
      </Container>
    </>
  );
};

export default AppPage;
