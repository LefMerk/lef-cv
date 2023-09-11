import ajax from '../assets/ajax.svg';
import tauri from '../assets/tauri.svg';
import mui from '../assets/mui.svg';

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

function MuiIcon() {
  return (
      <img className="w-4" src={mui} alt="mui-logo" />
  );
}

export { AjaxIcon, TauriIcon, MuiIcon };
