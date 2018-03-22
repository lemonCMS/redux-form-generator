import React from 'react';
import Wrap from './Wrappers/Wrap';
import TinyMceInput from '../Components/TinyMceBinder';
import decorator from '../utils/decorator';

export default decorator({type: 'text', component: TinyMceInput})(Wrap);
