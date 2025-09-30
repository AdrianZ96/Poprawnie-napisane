import '@fontsource/imperial-script';
import s from './navi.module.css';

export function Nav() {
  return (
    <div className={s.main}>
      <ul className={s.list}>
        <li className={s.item}>Oferta</li>
        <li className={s.item}>Cennik</li>
        <li className={s.item}>O mnie</li>
        <li className={s.item}>Portfolio</li>
      </ul>
    </div>
  );
}
