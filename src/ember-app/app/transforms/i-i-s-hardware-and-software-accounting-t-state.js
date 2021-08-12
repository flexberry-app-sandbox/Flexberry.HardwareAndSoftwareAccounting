import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tStateEnum from '../enums/i-i-s-hardware-and-software-accounting-t-state';

export default FlexberryEnum.extend({
  enum: tStateEnum,
  sourceType: 'IIS.Hardware_and_Software_accounting.tState'
});
