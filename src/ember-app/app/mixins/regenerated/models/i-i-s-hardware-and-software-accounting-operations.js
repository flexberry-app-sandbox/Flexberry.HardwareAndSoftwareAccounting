import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  date: DS.attr('date'),
  action: DS.attr('i-i-s-hardware-and-software-accounting-t-action'),
  state: DS.attr('i-i-s-hardware-and-software-accounting-t-state'),
  hardware: DS.belongsTo('i-i-s-hardware-and-software-accounting-hardware', { inverse: null, async: false }),
  admin: DS.belongsTo('i-i-s-hardware-and-software-accounting-user', { inverse: null, async: false })
});

export let ValidationRules = {
  date: {
    descriptionKey: 'models.i-i-s-hardware-and-software-accounting-operations.validations.date.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  action: {
    descriptionKey: 'models.i-i-s-hardware-and-software-accounting-operations.validations.action.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  state: {
    descriptionKey: 'models.i-i-s-hardware-and-software-accounting-operations.validations.state.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  hardware: {
    descriptionKey: 'models.i-i-s-hardware-and-software-accounting-operations.validations.hardware.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  admin: {
    descriptionKey: 'models.i-i-s-hardware-and-software-accounting-operations.validations.admin.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('OperationsE', 'i-i-s-hardware-and-software-accounting-operations', {
    date: attr('Date', { index: 0 }),
    action: attr('Action', { index: 1 }),
    state: attr('State', { index: 2 }),
    hardware: belongsTo('i-i-s-hardware-and-software-accounting-hardware', 'Hardware', {
      inventoryNumber: attr('Inventory number', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'inventoryNumber' }),
    admin: belongsTo('i-i-s-hardware-and-software-accounting-user', 'Admin', {
      name: attr('Name', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('OperationsL', 'i-i-s-hardware-and-software-accounting-operations', {
    date: attr('Date', { index: 0 }),
    action: attr('Action', { index: 1 }),
    state: attr('State', { index: 2 }),
    hardware: belongsTo('i-i-s-hardware-and-software-accounting-hardware', 'Inventory number', {
      inventoryNumber: attr('Inventory number', { index: 3 })
    }, { index: -1, hidden: true }),
    admin: belongsTo('i-i-s-hardware-and-software-accounting-user', 'Name', {
      name: attr('Name', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
