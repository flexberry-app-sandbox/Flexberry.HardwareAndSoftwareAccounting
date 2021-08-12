import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Hardware_and_ software_accounting',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Hardware_and_ software_accounting',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Hardware_and_ software_accounting',
          title: 'Hardware_and_ software_accounting'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        accounting: {
          caption: 'Accounting',
          title: 'Accounting',
          'i-i-s-hardware-and-software-accounting-operations-l': {
            caption: 'Operations',
            title: ''
          },
          'i-i-s-hardware-and-software-accounting-workplace-l': {
            caption: 'Workplace',
            title: ''
          }
        },
        references: {
          caption: 'References',
          title: 'References',
          'i-i-s-hardware-and-software-accounting-user-l': {
            caption: 'User',
            title: 'User'
          },
          'i-i-s-hardware-and-software-accounting-vendor-l': {
            caption: 'Vendor',
            title: 'Vendor'
          },
          'i-i-s-hardware-and-software-accounting-branch-office-l': {
            caption: 'Branch',
            title: 'Branch office'
          },
          'i-i-s-hardware-and-software-accounting-hardware-type-l': {
            caption: 'Hardware Type',
            title: 'Hardware type'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
