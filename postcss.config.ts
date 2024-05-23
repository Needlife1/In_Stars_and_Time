import postcssSortMediaQueries from 'postcss-sort-media-queries';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [postcssSortMediaQueries({ sort: 'mobile-first' }), autoprefixer],
};
