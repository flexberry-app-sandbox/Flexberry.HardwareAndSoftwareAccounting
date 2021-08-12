import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  surname: DS.attr('string'),
  isAdmin: DS.attr('boolean')
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-hardware-and-software-accounting-user.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  surname: {
    descriptionKey: 'models.i-i-s-hardware-and-software-accounting-user.validations.surname.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  isAdmin: {
    descriptionKey: 'models.i-i-s-hardware-and-software-accounting-user.validations.isAdmin.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('UserE', 'i-i-s-hardware-and-software-accounting-user', {
    name: attr('Name', { index: 0 }),
    surname: attr('Surname', { index: 1 }),
    isAdmin: attr('Is admin', { index: 2 })
  });

  modelClass.defineProjection('UserL', 'i-i-s-hardware-and-software-accounting-user', {
    name: attr('Name', { index: 0 }),
    surname: attr('Surname', { index: 1 }),
    isAdmin: attr('Is admin', { index: 2 })
  });
};
