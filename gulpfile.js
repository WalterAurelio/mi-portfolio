import pkg from 'gulp';
const { src, dest, series } = pkg;
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';

const path_imgs = './src/assets/imgs/original/*';
const path_dest = './src/assets/imgs/min';
const path_minified_imgs = path_dest + '/*';
const path_dest_webp_imgs = './src/assets/imgs/webp';

function minifyImages() {
  return src(path_imgs)
    .pipe(imagemin())
    .pipe(dest(path_dest));
}

function webpifyImages() {
  return src(path_minified_imgs)
    .pipe(webp())
    .pipe(dest(path_dest_webp_imgs))
}

export const minimages = minifyImages;
export const webpimages = webpifyImages;