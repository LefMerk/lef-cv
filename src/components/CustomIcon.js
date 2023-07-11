import ajax from '../assets/ajax.svg';
import tauri from '../assets/tauri.svg';

function AjaxIcon() {

  return (
      <img className="w-4" src={ajax} alt="ajax-logo" />
  );
}

function TauriIcon() {

  return (
      <img className="w-4" src={tauri} alt="tauri-logo" />
  );
}

export { AjaxIcon, TauriIcon };
