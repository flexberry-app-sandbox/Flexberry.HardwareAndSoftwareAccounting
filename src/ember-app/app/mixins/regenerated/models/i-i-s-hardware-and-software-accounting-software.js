import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  version: DS.attr('string'),
  isFreeware: DS.attr('boolean'),
  vendor: DS.belongsTo('i-i-s-hardware-and-software-accounting-vendor', { inverse: null, async: false }),
  workplace: DS.belongsTo('i-i-s-hardware-and-software-accounting-workplace', { inverse: 'software', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-hardware-and-software-accounting-software.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  version: {
    descriptionKey: 'models.i-i-s-hardware-and-software-accounting-software.validations.version.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  isFreeware: {
    descriptionKey: 'models.i-i-s-hardware-and-software-accounting-software.validations.isFreeware.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  vendor: {
    descriptionKey: 'models.i-i-s-hardware-and-software-accounting-software.validations.vendor.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  workplace: {
    descriptionKey: 'models.i-i-s-hardware-and-software-accounting-software.validations.workplace.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('SoftwareE', 'i-i-s-hardware-and-software-accounting-software', {
    name: attr('Name', { index: 0 }),
    version: attr('Version', { index: 1 }),
    isFreeware: attr('Is freeware', { index: 2 }),
    vendor: belongsTo('i-i-s-hardware-and-software-accounting-vendor', 'Vendor', {
      name: attr('Name', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'name' })
  });
};
