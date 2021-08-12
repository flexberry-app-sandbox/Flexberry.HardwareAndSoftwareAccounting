import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  inventoryNumber: DS.attr('string'),
  name: DS.attr('string'),
  dateAdded: DS.attr('date'),
  hardwareType: DS.belongsTo('i-i-s-hardware-and-software-accounting-hardware-type', { inverse: null, async: false }),
  employee: DS.belongsTo('i-i-s-hardware-and-software-accounting-user', { inverse: null, async: false }),
  workplace: DS.belongsTo('i-i-s-hardware-and-software-accounting-workplace', { inverse: 'hardware', async: false })
});

export let ValidationRules = {
  inventoryNumber: {
    descriptionKey: 'models.i-i-s-hardware-and-software-accounting-hardware.validations.inventoryNumber.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name: {
    descriptionKey: 'models.i-i-s-hardware-and-software-accounting-hardware.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  dateAdded: {
    descriptionKey: 'models.i-i-s-hardware-and-software-accounting-hardware.validations.dateAdded.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  hardwareType: {
    descriptionKey: 'models.i-i-s-hardware-and-software-accounting-hardware.validations.hardwareType.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  employee: {
    descriptionKey: 'models.i-i-s-hardware-and-software-accounting-hardware.validations.employee.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  workplace: {
    descriptionKey: 'models.i-i-s-hardware-and-software-accounting-hardware.validations.workplace.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('HardwareE', 'i-i-s-hardware-and-software-accounting-hardware', {
    inventoryNumber: attr('Inventory number', { index: 0 }),
    name: attr('Name', { index: 1 }),
    dateAdded: attr('Date added', { index: 2 }),
    hardwareType: belongsTo('i-i-s-hardware-and-software-accounting-hardware-type', 'Hardware type', {
      name: attr('Name', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'name' }),
    employee: belongsTo('i-i-s-hardware-and-software-accounting-user', 'Employee', {
      name: attr('Name', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('HardwareL', 'i-i-s-hardware-and-software-accounting-hardware', {
    inventoryNumber: attr('Inventory Number', { index: 0 }),
    name: attr('Name', { index: 1 }),
    dateAdded: attr('Date Added', { index: 2 }),
    hardwareType: belongsTo('i-i-s-hardware-and-software-accounting-hardware-type', 'Hardware Type', {
      name: attr('Hardware Type', { index: 3 })
    }, { index: -1, hidden: true }),
    employee: belongsTo('i-i-s-hardware-and-software-accounting-user', 'Employee', {
      name: attr('Employee', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
