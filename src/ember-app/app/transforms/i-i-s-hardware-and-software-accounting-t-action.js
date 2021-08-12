import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tActionEnum from '../enums/i-i-s-hardware-and-software-accounting-t-action';

export default FlexberryEnum.extend({
  enum: tActionEnum,
  sourceType: 'IIS.Hardware_and_Software_accounting.tAction'
});
