function Card({title, subtext, src}) {
  return (
    <div class="card">
      <div class="card__image">
        <img src={src} alt="VR" />
      </div>
      <div class="card__text">
        <h3>{title}</h3>
          <p>{subtext}</p>
          <a href="#"><span>Learn More</span> <img src="img/short_arrow.svg" alt="arrow" /></a>
      </div>
    </div>
  );
}

export default Card;
