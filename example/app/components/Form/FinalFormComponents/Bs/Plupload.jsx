import React from 'react';
import Wrap from './Wrappers/Wrap';
import Plupload from '../Components/PluploadBinder';
import decorator from '../utils/decorator';

export default decorator({type: 'text', component: Plupload})(Wrap);
