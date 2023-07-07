import ajax from '../assets/ajax.svg';
import tauri from '../assets/tauri.svg';

function AjaxIcon() {

  return (
      <img className="customIcon" src={ajax} alt="ajax-logo" />
  );
}

function TauriIcon() {

  return (
      <img className="customIcon" src={tauri} alt="tauri-logo" />
  );
}

export { AjaxIcon, TauriIcon };
