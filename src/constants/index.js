import { Platform } from 'react-native';

export const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
export const HEADER_HEIGHT = APPBAR_HEIGHT + STATUSBAR_HEIGHT;

export { default as YasColors } from './Yas-Colors'
export { default as YasDimensions } from './Yas-Dimensions'
export { default as YasFontSizes } from './Yas-Font-Sizes'
