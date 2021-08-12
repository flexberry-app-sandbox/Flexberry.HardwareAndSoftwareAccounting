import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISHardware_and_Software_accountingBranchOfficeLForm from './forms/i-i-s-hardware-and-software-accounting-branch-office-l';
import IISHardware_and_Software_accountingHardwareLForm from './forms/i-i-s-hardware-and-software-accounting-hardware-l';
import IISHardware_and_Software_accountingHardwareTypeLForm from './forms/i-i-s-hardware-and-software-accounting-hardware-type-l';
import IISHardware_and_Software_accountingOperationsLForm from './forms/i-i-s-hardware-and-software-accounting-operations-l';
import IISHardware_and_Software_accountingUserLForm from './forms/i-i-s-hardware-and-software-accounting-user-l';
import IISHardware_and_Software_accountingVendorLForm from './forms/i-i-s-hardware-and-software-accounting-vendor-l';
import IISHardware_and_Software_accountingWorkplaceLForm from './forms/i-i-s-hardware-and-software-accounting-workplace-l';
import IISHardware_and_Software_accountingBranchOfficeEForm from './forms/i-i-s-hardware-and-software-accounting-branch-office-e';
import IISHardware_and_Software_accountingHardwareTypeEForm from './forms/i-i-s-hardware-and-software-accounting-hardware-type-e';
import IISHardware_and_Software_accountingOperationsEForm from './forms/i-i-s-hardware-and-software-accounting-operations-e';
import IISHardware_and_Software_accountingUserEForm from './forms/i-i-s-hardware-and-software-accounting-user-e';
import IISHardware_and_Software_accountingVendorEForm from './forms/i-i-s-hardware-and-software-accounting-vendor-e';
import IISHardware_and_Software_accountingWorkplaceEForm from './forms/i-i-s-hardware-and-software-accounting-workplace-e';
import IISHardware_and_Software_accountingBranchOfficeModel from './models/i-i-s-hardware-and-software-accounting-branch-office';
import IISHardware_and_Software_accountingHardwareTypeModel from './models/i-i-s-hardware-and-software-accounting-hardware-type';
import IISHardware_and_Software_accountingHardwareModel from './models/i-i-s-hardware-and-software-accounting-hardware';
import IISHardware_and_Software_accountingOperationsModel from './models/i-i-s-hardware-and-software-accounting-operations';
import IISHardware_and_Software_accountingSoftwareModel from './models/i-i-s-hardware-and-software-accounting-software';
import IISHardware_and_Software_accountingUserModel from './models/i-i-s-hardware-and-software-accounting-user';
import IISHardware_and_Software_accountingVendorModel from './models/i-i-s-hardware-and-software-accounting-vendor';
import IISHardware_and_Software_accountingWorkplaceModel from './models/i-i-s-hardware-and-software-accounting-workplace';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-hardware-and-software-accounting-branch-office': IISHardware_and_Software_accountingBranchOfficeModel,
    'i-i-s-hardware-and-software-accounting-hardware-type': IISHardware_and_Software_accountingHardwareTypeModel,
    'i-i-s-hardware-and-software-accounting-hardware': IISHardware_and_Software_accountingHardwareModel,
    'i-i-s-hardware-and-software-accounting-operations': IISHardware_and_Software_accountingOperationsModel,
    'i-i-s-hardware-and-software-accounting-software': IISHardware_and_Software_accountingSoftwareModel,
    'i-i-s-hardware-and-software-accounting-user': IISHardware_and_Software_accountingUserModel,
    'i-i-s-hardware-and-software-accounting-vendor': IISHardware_and_Software_accountingVendorModel,
    'i-i-s-hardware-and-software-accounting-workplace': IISHardware_and_Software_accountingWorkplaceModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        accounting: {
          caption: 'accounting',
          title: 'accounting',
          'i-i-s-hardware-and-software-accounting-operations-l': {
            caption: 'i-i-s-hardware-and-software-accounting-operations-l',
            title: 'i-i-s-hardware-and-software-accounting-operations-l'
          },
          'i-i-s-hardware-and-software-accounting-workplace-l': {
            caption: 'i-i-s-hardware-and-software-accounting-workplace-l',
            title: 'i-i-s-hardware-and-software-accounting-workplace-l'
          }
        },
        references: {
          caption: 'references',
          title: 'references',
          'i-i-s-hardware-and-software-accounting-user-l': {
            caption: 'i-i-s-hardware-and-software-accounting-user-l',
            title: 'i-i-s-hardware-and-software-accounting-user-l'
          },
          'i-i-s-hardware-and-software-accounting-vendor-l': {
            caption: 'i-i-s-hardware-and-software-accounting-vendor-l',
            title: 'i-i-s-hardware-and-software-accounting-vendor-l'
          },
          'i-i-s-hardware-and-software-accounting-branch-office-l': {
            caption: 'i-i-s-hardware-and-software-accounting-branch-office-l',
            title: 'i-i-s-hardware-and-software-accounting-branch-office-l'
          },
          'i-i-s-hardware-and-software-accounting-hardware-type-l': {
            caption: 'i-i-s-hardware-and-software-accounting-hardware-type-l',
            title: 'i-i-s-hardware-and-software-accounting-hardware-type-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-hardware-and-software-accounting-branch-office-l': IISHardware_and_Software_accountingBranchOfficeLForm,
    'i-i-s-hardware-and-software-accounting-hardware-l': IISHardware_and_Software_accountingHardwareLForm,
    'i-i-s-hardware-and-software-accounting-hardware-type-l': IISHardware_and_Software_accountingHardwareTypeLForm,
    'i-i-s-hardware-and-software-accounting-operations-l': IISHardware_and_Software_accountingOperationsLForm,
    'i-i-s-hardware-and-software-accounting-user-l': IISHardware_and_Software_accountingUserLForm,
    'i-i-s-hardware-and-software-accounting-vendor-l': IISHardware_and_Software_accountingVendorLForm,
    'i-i-s-hardware-and-software-accounting-workplace-l': IISHardware_and_Software_accountingWorkplaceLForm,
    'i-i-s-hardware-and-software-accounting-branch-office-e': IISHardware_and_Software_accountingBranchOfficeEForm,
    'i-i-s-hardware-and-software-accounting-hardware-type-e': IISHardware_and_Software_accountingHardwareTypeEForm,
    'i-i-s-hardware-and-software-accounting-operations-e': IISHardware_and_Software_accountingOperationsEForm,
    'i-i-s-hardware-and-software-accounting-user-e': IISHardware_and_Software_accountingUserEForm,
    'i-i-s-hardware-and-software-accounting-vendor-e': IISHardware_and_Software_accountingVendorEForm,
    'i-i-s-hardware-and-software-accounting-workplace-e': IISHardware_and_Software_accountingWorkplaceEForm
  },

});

export default translations;
