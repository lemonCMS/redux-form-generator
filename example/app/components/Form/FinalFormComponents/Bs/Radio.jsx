import React from 'react';
import Wrap from './Wrappers/Wrap';
import Radio from '../Components/Radio';
import decorator from '../utils/decorator';

export default decorator({type: 'text', component: Radio})(Wrap);
