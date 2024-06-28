import { Box, Spacer } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { hoveredBox } from '../../jotai';
import classes from './card.module.css';
import clsx from 'clsx';
import GithubSVG from '../icons/Github';
import { CardProps } from '../../types/card';
const Card = ({ title, href, index, source, icon }: CardProps) => {
  const [hovered, setHovered] = useAtom(hoveredBox);
  return (
    <Box
      as="a"
      href={href}
      target="_blank"
      className={clsx({
        [classes.card]: true,
        [classes.card__hovered]: hovered === index,
        [classes.card__unhovered]: hovered !== index && hovered !== null,
      })}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
    >
      {icon ? (
        icon
      ) : (
        <img
          src={`https://f1.allesedv.com/43/${href}`}
          height={43}
          width={43}
          style={{
            marginTop: 'auto',
            marginBottom: 'auto',
            borderRadius: '50%',
          }}
        />
      )}
      <Spacer />
      {title}
      <Spacer />
      {source && (
        <>
          <a href={source} target="_blank" className={classes.source__link}>
            <GithubSVG width={43} height={43} style={{ marginTop: 'auto', marginBottom: 'auto' }} />
          </a>
        </>
      )}
    </Box>
  );
};

export default Card;
