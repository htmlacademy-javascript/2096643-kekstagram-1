import './util.js';
import {photosData} from './data.js';
import {renderPhoto} from './photo-thumbnail.js';
import './full-photo.js';
import { renderBigPicture } from './full-photo.js';
import './form-upload.js';
import './scale-photo.js';
import './effects.js';
renderPhoto(photosData, renderBigPicture);

