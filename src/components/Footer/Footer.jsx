import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Политика конфиденциальности и защита прав. Copyriting 2023 ©</p>
      <nav>
        <ul>
          <li>instagram</li>
          <li>facebook</li>
          <li>twitter</li>
          <li>headhunter</li>
          <li>youtube</li>
        </ul>
      </nav>
      <p className="createdBy">
        Сайт создан <span className="creator">by Mambet Aibar</span>
      </p>
    </footer>
  );
};
export default Footer;
