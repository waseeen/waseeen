import AppPage from '../components/Page/Page';
import { PageElement, PageElementType } from '../types/element';

const WishlistPage = () => {
  const config: PageElement[] = [
    {
      type: PageElementType.LINKLIST,
      links: [
        {
          title: 'Удлиннитель - 830р',
          href: 'https://ozon.ru/t/Rr9qlB',
        },
        {
          title: 'Кабель магнитный - 326р',
          href: 'https://www.wildberries.ru/catalog/170416935/detail.aspx?targetUrl=SN',
          note: 'можно несколько',
        },
        {
          title: 'Шуруповерт - 2 415р',
          href: 'https://www.wildberries.ru/catalog/201780315/detail.aspx?targetUrl=SN',
        },
        {
          title: 'Органайзер - 985р',
          href: 'https://www.wildberries.ru/catalog/233722873/detail.aspx?targetUrl=SN',
        },
        // {
        //   title: 'Газлифт - 1 187р',
        //   href: 'https://market.yandex.ru/cc/3nWRgUq',
        // },
        {
          title: 'Лейка - 954р',
          href: 'https://market.yandex.ru/cc/RrDKpk0',
        },
        {
          title: 'Мать - 19 632р',
          href: 'https://market.yandex.ru/cc/H5AwSqA',
        },
        {
          title: 'Лампочка - 957р',
          href: 'https://market.yandex.ru/cc/OJISpWh',
          note: 'можно много',
        },
        {
          title: 'Коврик - 578р',
          href: 'https://market.yandex.ru/cc/6OXBGKt',
        },
        // {
        //   title: 'Тачпад - 2 159р',
        //   href: 'https://ozon.ru/t/yDNaL4G',
        // },
        // {
        //   title: 'Подставка для пластинок - 2 256р',
        //   href: 'https://ozon.ru/t/gbbkrJg',
        // },
        {
          title: 'Футболка - 1 552р',
          href: 'https://www.wildberries.ru/catalog/225262607/detail.aspx',
          note: 'или любую другую от этого бренда, размер M(46) или больше',
        },
      ],
    },
  ];
  return <AppPage config={{ title: 'Вишлист васена', elements: config }} />;
};

export default WishlistPage;
