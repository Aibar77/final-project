import "./Menu.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";
const Menu = ({ searchValue }) => {
  const [posts, setPosts] = useState([]);
  const [wineSort, setWineSort] = useState("reds");
  const [sortedItems, setSortedItems] = useState("default");
  useEffect(() => {
    axios
      .get(`https://api.sampleapis.com/wines/${wineSort}`)
      .then((data) => setPosts(data.data.slice(80, 100)));
  }, [wineSort]);
  const sortedPosts = posts.sort(function (a, b) {
    if (sortedItems === "default") return;
    if (sortedItems === "popular") {
      return (
        Number(a.rating.reviews.match(/\d+/)) -
        Number(b.rating.reviews.match(/\d+/))
      );
    } else if (sortedItems === "rating") {
      return Number(a.rating.average[0]) - Number(b.rating.average[0]);
    } else if (sortedItems === "name") {
      if (a.wine[0] < b.wine[0]) {
        return -1;
      } else if (a.wine[0] > b.wine[0]) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  const renderItems = () => {
    const filteredItems = sortedPosts.filter((post) =>
      post.wine.toLowerCase().includes(searchValue.toLowerCase())
    );
    return filteredItems.length === 0 ? (
      <h1 className="no-items">Ничего не нашлось...</h1>
    ) : (
      filteredItems.map((post) => (
        <Card key={post.id} item={{ ...post, id: wineSort + post.id }} />
      ))
    );
  };

  return (
    <main className="menu-wrapper">
      <section className="menu-filter top-line">
        <label>
          <span>Сорт:</span>{" "}
          <select
            name="wineSort"
            id="wineSort"
            value={wineSort}
            onChange={(e) => setWineSort(e.target.value)}
          >
            <option value="reds">Красное вино</option>
            <option value="whites">Белое вино</option>
            <option value="sparkling">Игристое вино</option>
            <option value="rose">Розовое вино</option>
            <option value="dessert">Сухое вино</option>
            <option value="port">Портвейн</option>
          </select>
        </label>
        <label>
          <span>Сортировка:</span>{" "}
          <select
            name="sortItems"
            id="sortItems"
            value={sortedItems}
            onChange={(e) => setSortedItems(e.target.value)}
          >
            <option value="default">По умолчанию</option>
            <option value="popular">По популярности</option>
            <option value="rating">По рейтингу</option>
            <option value="name">По названию</option>
          </select>
        </label>
      </section>
      <section className="content-menu">{renderItems()}</section>
    </main>
  );
};

export default Menu;
