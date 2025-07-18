import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Rating( {name, icon, rating} ) {
  const full = <FontAwesomeIcon icon={solid("circle")} />;
  const empty = <FontAwesomeIcon icon={regular("circle")} />;
  let starRating = [];

  for (let i = 0; i < 5; i++) {
    starRating.push( i < rating ? full : empty );
  }

  return (
    <div className="flex flex-initial items-center gap-2.5 text-base">
      {icon}
      <div className="w-36">{name}</div>
      {/* <div className="flex gap-1 m-0.5">{starRating}</div> */}
    </div>
  );
}