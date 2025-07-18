import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle as faSolidCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle as faRegularCircle } from '@fortawesome/free-regular-svg-icons'

export default function Rating({ name, icon, rating }) {
  const full = <FontAwesomeIcon icon={faSolidCircle} />;
  const empty = <FontAwesomeIcon icon={faRegularCircle} />;
  let starRating = [];

  for (let i = 0; i < 5; i++) {
    starRating.push(i < rating ? full : empty);
  }

  return (
    <div className="flex flex-initial items-center gap-2.5 text-base">
      {icon}
      <div className="w-36">{name}</div>
      {/* <div className="flex gap-1 m-0.5">{starRating}</div> */}
    </div>
  );
}
