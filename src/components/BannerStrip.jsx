const BannerStrip = ({ newsItems }) => {
  return (
    <div className="news-ticker-container">
      <div className="news-ticker">
        {newsItems.map((item, index) => {
          // Split the item into quote and author
          const [quote, author] = item.split("-");

          return (
            <div key={index} className="news-item">
              <span
                style={{
                  fontFamily: "Kanit",
                  fontWeight: "300",
                  fontStyle: "italic",
                }}
              >
                {quote}
              </span>
              <span
                style={{ fontFamily: "Kanit", fontStyle: "bold" }}
              >{` - ${author}`}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BannerStrip;
