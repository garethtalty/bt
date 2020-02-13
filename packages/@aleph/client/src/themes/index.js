import * as bt from './bt';
import * as another from './another';

const defaultBrand = 'bt';
const allThemes = { bt, another };
const activeTheme = allThemes[defaultBrand];

export { activeTheme, bt, another };
