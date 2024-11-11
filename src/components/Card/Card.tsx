import { Box, Spacer } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { hoveredBox } from '../../jotai';
import classes from './card.module.css';
import clsx from 'clsx';
import GithubSVG from '../icons/Github';
import { CardProps } from '../../types/card';
import { useId } from 'react';
const Card = ({ title, href, source, icon }: CardProps) => {
  const index = useId();
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
          src={`https://f1.allesedv.com/43/${new URL(href).hostname}`}
          height={43}
          width={43}
          style={{
            marginTop: 'auto',
            marginBottom: 'auto',
            borderRadius: '50%',
          }}
          alt={`${title} logo`}
        />
      )}
      <Spacer />
      {title}
      <Spacer />
      {source && (
        <>
          <div
            onClick={(e) => {
              e.preventDefault();
              window.open(source, '_blank');
            }}
            className={classes.source__link}
          >
            <GithubSVG width={43} height={43} style={{ marginTop: 'auto', marginBottom: 'auto' }} />
          </div>
        </>
      )}
    </Box>
  );
};

export default Card;
