import React from 'react';
import Wrap from './Wrappers/Wrap';
import Checkbox from '../Components/Checkbox';
import decorator from '../utils/decorator';

export default decorator({type: 'text', component: Checkbox})(Wrap);
