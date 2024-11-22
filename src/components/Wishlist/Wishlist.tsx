import { LinkProps } from '../../types/linklist';
import classes from './wishlist.module.css';

const Wishlist = ({ links }: { links: LinkProps[] }) => {
  return (
    <ul className={classes.wishlist}>
      {links.map((link) => (
        <li>
          <a target="_blank" href={link.href}>
            {link.title}
          </a>
          {link.note && ' ' + link.note}
        </li>
      ))}
    </ul>
  );
};

export default Wishlist;
