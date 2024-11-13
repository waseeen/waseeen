import AppPage from '../components/Page/Page';

const WishlistPage = () => {
  return (
    <AppPage config={{ elements: [], title: 'Вишлист васена' }}>
      <ul className="wishlist">
        <li>
          <a target="_blank" href="https://ozon.ru/t/Rr9qlB">
            Удлинитель - 830р.
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.wildberries.ru/catalog/170416935/detail.aspx?targetUrl=SN"
          >
            Кабель магнитный - 326р.
          </a>{' '}
          Можно несколько
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.wildberries.ru/catalog/201780315/detail.aspx?targetUrl=SN"
          >
            Шуруповерт - 2415р.
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.wildberries.ru/catalog/233722873/detail.aspx?targetUrl=SN"
          >
            Органайзер - 985р.
          </a>
        </li>
        <li>
          <a target="_blank" href="https://market.yandex.ru/cc/3nWRgUq">
            Газлифт - 1187р.
          </a>
        </li>
        <li>
          <a target="_blank" href="https://market.yandex.ru/cc/RrDKpk0">
            Лейка - 954р.
          </a>
        </li>
      </ul>
    </AppPage>
  );
};

export default WishlistPage;
