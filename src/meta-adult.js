// eslint-disable-next-line import/no-extraneous-dependencies
import moment from 'moment';
import R from 'ramda';
import pkg from '../package.json';
import sites from './adult';

export default {
  name: 'Manga OnlineViewer Adult',
  author: 'Tago',
  updateURL: 'https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer_Adult.meta.js',
  downloadURL: 'https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer_Adult.user.js',
  namespace: 'https://github.com/TagoDR',
  description: `Shows all pages at once in online view for these sites: ${R.pluck('name', sites).join(', ')}`,
  version: pkg.version,
  license: pkg.license,
  date: moment().format('YYYY-MM-DD'),
  grant: [
    'GM_getValue',
    'GM_setValue',
    'GM_listValues',
    'GM_deleteValue',
    'GM_xmlhttpRequest',
  ],
  connect: '*',
  require: [
    'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jquery-scrollTo/2.1.2/jquery.scrollTo.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.5/jszip.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.11.5/sweetalert2.all.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jscolor/2.0.4/jscolor.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/color-scheme/1.0.0/color-scheme.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/ramda/0.24.1/ramda.min.js',
  ],
  include: R.pluck('url', sites),
};
