import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function Rating( {name, icon, rating} ) {
  const full = <FontAwesomeIcon icon={solid("circle")} />;
  const empty = <FontAwesomeIcon icon={regular("circle")} />;
  let starRating = [];

  for (let i = 0; i < 5; i++) {
    starRating.push( i < rating ? full : empty );
  }

  return (
    <div className="skill-item">
      {icon}
      <div className="skill-name">{name}</div>
      <div className="skill-rating">{starRating}</div>
    </div>
  );
}

export default Rating;
