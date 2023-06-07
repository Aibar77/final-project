import "./About.scss";
const About = () => {
  return (
    <main className="about-wrapper">
      <div className="top-line"></div>
      <div className="about-content">
        <h1>О компании Zira</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis,
          quasi consectetur accusamus temporibus repellat unde ea harum totam
          earum saepe sit eligendi facere non provident atque, quidem odio!
          Expedita, aspernatur?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam nihil
          sunt laborum beatae enim natus eligendi perspiciatis provident in
          nesciunt!
        </p>
        <iframe
          width="425"
          height="350"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=76.93618029356004%2C43.25171633312786%2C76.93869084119798%2C43.253003734097184&amp;layer=mapnik&amp;marker=43.252360037014306%2C76.937435567379"
          style={{
            border: "1px solid black",
            margin: "30px 10px",
          }}
        ></iframe>
      </div>
    </main>
  );
};

export default About;
