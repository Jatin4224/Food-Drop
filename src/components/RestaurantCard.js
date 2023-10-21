const RestaurantCard = (props) => {
  const { resName, cuisine, rating } = props;
  return (
    <div className="res-card">
      <img
        className="ramen-image"
        src="data:image/jpeg;base64,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"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h5>{rating}</h5>
      <h5>48mins</h5>
    </div>
  );
};

export default RestaurantCard;