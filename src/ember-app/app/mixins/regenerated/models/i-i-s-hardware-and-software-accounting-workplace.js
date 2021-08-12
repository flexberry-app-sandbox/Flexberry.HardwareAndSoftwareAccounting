import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  inventoryNumber: DS.attr('string'),
  officeNumber: DS.attr('string'),
  place: DS.attr('string'),
  branch: DS.belongsTo('i-i-s-hardware-and-software-accounting-branch-office', { inverse: null, async: false }),
  software: DS.hasMany('i-i-s-hardware-and-software-accounting-software', { inverse: 'workplace', async: false }),
  hardware: DS.hasMany('i-i-s-hardware-and-software-accounting-hardware', { inverse: 'workplace', async: false })
});

export let ValidationRules = {
  inventoryNumber: {
    descriptionKey: 'models.i-i-s-hardware-and-software-accounting-workplace.validations.inventoryNumber.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  officeNumber: {
    descriptionKey: 'models.i-i-s-hardware-and-software-accounting-workplace.validations.officeNumber.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  place: {
    descriptionKey: 'models.i-i-s-hardware-and-software-accounting-workplace.validations.place.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  branch: {
    descriptionKey: 'models.i-i-s-hardware-and-software-accounting-workplace.validations.branch.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  software: {
    descriptionKey: 'models.i-i-s-hardware-and-software-accounting-workplace.validations.software.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  hardware: {
    descriptionKey: 'models.i-i-s-hardware-and-software-accounting-workplace.validations.hardware.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('WorkplaceE', 'i-i-s-hardware-and-software-accounting-workplace', {
    inventoryNumber: attr('Inventory number', { index: 0 }),
    officeNumber: attr('Office number', { index: 1 }),
    place: attr('Place', { index: 2 }),
    branch: belongsTo('i-i-s-hardware-and-software-accounting-branch-office', 'Branch', {
      name: attr('Name', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'name' }),
    software: hasMany('i-i-s-hardware-and-software-accounting-software', 'Software', {
      name: attr('Name', { index: 0 }),
      version: attr('Version', { index: 1 }),
      isFreeware: attr('Is freeware', { index: 2 }),
      vendor: belongsTo('i-i-s-hardware-and-software-accounting-vendor', 'Vendor', {
        name: attr('Name', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'name' })
    }),
    hardware: hasMany('i-i-s-hardware-and-software-accounting-hardware', 'Hardware', {
      inventoryNumber: attr('Inventory number', { index: 0 }),
      name: attr('Name', { index: 1 }),
      dateAdded: attr('Date added', { index: 2 }),
      hardwareType: belongsTo('i-i-s-hardware-and-software-accounting-hardware-type', 'Hardware type', {
        name: attr('Name', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'name' }),
      employee: belongsTo('i-i-s-hardware-and-software-accounting-user', 'Employee', {
        name: attr('Name', { index: 6, hidden: true })
      }, { index: 5, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('WorkplaceL', 'i-i-s-hardware-and-software-accounting-workplace', {
    inventoryNumber: attr('Inventory number', { index: 0 }),
    officeNumber: attr('Office number', { index: 1 }),
    place: attr('Place', { index: 2 }),
    branch: belongsTo('i-i-s-hardware-and-software-accounting-branch-office', 'Name', {
      name: attr('Name', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
