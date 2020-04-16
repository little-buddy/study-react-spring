/**
 * Created by buddy on 2020-04-06.
 */
const UA = window.navigator.userAgent.toLocaleLowerCase();

export const isIos = () => /iphone|ipad|ipod/.test(UA);

export const isAndroid = () => /Android/.test(UA);

export const isWx = () => /micromessenger/.test(UA);
