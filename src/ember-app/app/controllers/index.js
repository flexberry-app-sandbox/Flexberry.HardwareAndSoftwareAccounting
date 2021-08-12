import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.accounting.caption'),
          title: i18n.t('forms.application.sitemap.accounting.title'),
          children: [{
            link: 'i-i-s-hardware-and-software-accounting-operations-l',
            caption: i18n.t('forms.application.sitemap.accounting.i-i-s-hardware-and-software-accounting-operations-l.caption'),
            title: i18n.t('forms.application.sitemap.accounting.i-i-s-hardware-and-software-accounting-operations-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-hardware-and-software-accounting-workplace-l',
            caption: i18n.t('forms.application.sitemap.accounting.i-i-s-hardware-and-software-accounting-workplace-l.caption'),
            title: i18n.t('forms.application.sitemap.accounting.i-i-s-hardware-and-software-accounting-workplace-l.title'),
            icon: 'file',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.references.caption'),
          title: i18n.t('forms.application.sitemap.references.title'),
          children: [{
            link: 'i-i-s-hardware-and-software-accounting-user-l',
            caption: i18n.t('forms.application.sitemap.references.i-i-s-hardware-and-software-accounting-user-l.caption'),
            title: i18n.t('forms.application.sitemap.references.i-i-s-hardware-and-software-accounting-user-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-hardware-and-software-accounting-vendor-l',
            caption: i18n.t('forms.application.sitemap.references.i-i-s-hardware-and-software-accounting-vendor-l.caption'),
            title: i18n.t('forms.application.sitemap.references.i-i-s-hardware-and-software-accounting-vendor-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-hardware-and-software-accounting-branch-office-l',
            caption: i18n.t('forms.application.sitemap.references.i-i-s-hardware-and-software-accounting-branch-office-l.caption'),
            title: i18n.t('forms.application.sitemap.references.i-i-s-hardware-and-software-accounting-branch-office-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-hardware-and-software-accounting-hardware-type-l',
            caption: i18n.t('forms.application.sitemap.references.i-i-s-hardware-and-software-accounting-hardware-type-l.caption'),
            title: i18n.t('forms.application.sitemap.references.i-i-s-hardware-and-software-accounting-hardware-type-l.title'),
            icon: 'folder open',
            children: null
          }]
        }
      ]
    };
  }),
})