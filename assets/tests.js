'use strict';

define('ember-app/tests/acceptance/flexberry/i-i-s-hardware-and-software-accounting-branch-office-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s hardware and software accounting branch office l');

  (0, _qunit.test)('testing i-i-s-hardware-and-software-accounting-branch-office-l', function (assert) {
    visit('/i-i-s-hardware-and-software-accounting-branch-office-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(() => {
      const listNotEmpty = find('.object-list-view-helper-column').length > 0;

      const controller = this.application.__container__.lookup('controller:' + currentRouteName());
      const newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-hardware-and-software-accounting-hardware-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s hardware and software accounting hardware l');

  (0, _qunit.test)('testing i-i-s-hardware-and-software-accounting-hardware-l', function (assert) {
    visit('/i-i-s-hardware-and-software-accounting-hardware-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(() => {
      const listNotEmpty = find('.object-list-view-helper-column').length > 0;

      const controller = this.application.__container__.lookup('controller:' + currentRouteName());
      const newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-hardware-and-software-accounting-hardware-type-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s hardware and software accounting hardware type l');

  (0, _qunit.test)('testing i-i-s-hardware-and-software-accounting-hardware-type-l', function (assert) {
    visit('/i-i-s-hardware-and-software-accounting-hardware-type-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(() => {
      const listNotEmpty = find('.object-list-view-helper-column').length > 0;

      const controller = this.application.__container__.lookup('controller:' + currentRouteName());
      const newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-hardware-and-software-accounting-operations-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s hardware and software accounting operations l');

  (0, _qunit.test)('testing i-i-s-hardware-and-software-accounting-operations-l', function (assert) {
    visit('/i-i-s-hardware-and-software-accounting-operations-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(() => {
      const listNotEmpty = find('.object-list-view-helper-column').length > 0;

      const controller = this.application.__container__.lookup('controller:' + currentRouteName());
      const newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-hardware-and-software-accounting-user-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s hardware and software accounting user l');

  (0, _qunit.test)('testing i-i-s-hardware-and-software-accounting-user-l', function (assert) {
    visit('/i-i-s-hardware-and-software-accounting-user-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(() => {
      const listNotEmpty = find('.object-list-view-helper-column').length > 0;

      const controller = this.application.__container__.lookup('controller:' + currentRouteName());
      const newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-hardware-and-software-accounting-vendor-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s hardware and software accounting vendor l');

  (0, _qunit.test)('testing i-i-s-hardware-and-software-accounting-vendor-l', function (assert) {
    visit('/i-i-s-hardware-and-software-accounting-vendor-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(() => {
      const listNotEmpty = find('.object-list-view-helper-column').length > 0;

      const controller = this.application.__container__.lookup('controller:' + currentRouteName());
      const newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-hardware-and-software-accounting-workplace-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s hardware and software accounting workplace l');

  (0, _qunit.test)('testing i-i-s-hardware-and-software-accounting-workplace-l', function (assert) {
    visit('/i-i-s-hardware-and-software-accounting-workplace-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(() => {
      const listNotEmpty = find('.object-list-view-helper-column').length > 0;

      const controller = this.application.__container__.lookup('controller:' + currentRouteName());
      const newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hardware-and-software-accounting-branch-office-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hardware-and-software-accounting-branch-office-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hardware-and-software-accounting-branch-office-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hardware-and-software-accounting-branch-office-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hardware-and-software-accounting-branch-office-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hardware-and-software-accounting-branch-office-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hardware-and-software-accounting-hardware-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hardware-and-software-accounting-hardware-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hardware-and-software-accounting-hardware-type-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hardware-and-software-accounting-hardware-type-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hardware-and-software-accounting-hardware-type-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hardware-and-software-accounting-hardware-type-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hardware-and-software-accounting-hardware-type-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hardware-and-software-accounting-hardware-type-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hardware-and-software-accounting-operations-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hardware-and-software-accounting-operations-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hardware-and-software-accounting-operations-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hardware-and-software-accounting-operations-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hardware-and-software-accounting-operations-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hardware-and-software-accounting-operations-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hardware-and-software-accounting-user-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hardware-and-software-accounting-user-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hardware-and-software-accounting-user-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hardware-and-software-accounting-user-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hardware-and-software-accounting-user-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hardware-and-software-accounting-user-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hardware-and-software-accounting-vendor-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hardware-and-software-accounting-vendor-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hardware-and-software-accounting-vendor-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hardware-and-software-accounting-vendor-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hardware-and-software-accounting-vendor-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hardware-and-software-accounting-vendor-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hardware-and-software-accounting-workplace-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hardware-and-software-accounting-workplace-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hardware-and-software-accounting-workplace-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hardware-and-software-accounting-workplace-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hardware-and-software-accounting-workplace-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hardware-and-software-accounting-workplace-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('enums/i-i-s-hardware-and-software-accounting-t-action.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'enums/i-i-s-hardware-and-software-accounting-t-action.js should pass ESLint\n\n');
  });

  QUnit.test('enums/i-i-s-hardware-and-software-accounting-t-state.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'enums/i-i-s-hardware-and-software-accounting-t-state.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-hardware-and-software-accounting-branch-office-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-hardware-and-software-accounting-branch-office-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-hardware-and-software-accounting-branch-office-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-hardware-and-software-accounting-branch-office-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-hardware-and-software-accounting-hardware-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-hardware-and-software-accounting-hardware-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-hardware-and-software-accounting-hardware-type-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-hardware-and-software-accounting-hardware-type-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-hardware-and-software-accounting-hardware-type-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-hardware-and-software-accounting-hardware-type-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-hardware-and-software-accounting-operations-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-hardware-and-software-accounting-operations-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-hardware-and-software-accounting-operations-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-hardware-and-software-accounting-operations-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-hardware-and-software-accounting-user-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-hardware-and-software-accounting-user-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-hardware-and-software-accounting-user-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-hardware-and-software-accounting-user-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-hardware-and-software-accounting-vendor-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-hardware-and-software-accounting-vendor-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-hardware-and-software-accounting-vendor-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-hardware-and-software-accounting-vendor-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-hardware-and-software-accounting-workplace-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-hardware-and-software-accounting-workplace-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-hardware-and-software-accounting-workplace-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-hardware-and-software-accounting-workplace-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-hardware-and-software-accounting-branch-office.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-hardware-and-software-accounting-branch-office.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-hardware-and-software-accounting-hardware-type.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-hardware-and-software-accounting-hardware-type.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-hardware-and-software-accounting-hardware.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-hardware-and-software-accounting-hardware.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-hardware-and-software-accounting-operations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-hardware-and-software-accounting-operations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-hardware-and-software-accounting-software.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-hardware-and-software-accounting-software.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-hardware-and-software-accounting-user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-hardware-and-software-accounting-user.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-hardware-and-software-accounting-vendor.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-hardware-and-software-accounting-vendor.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-hardware-and-software-accounting-workplace.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-hardware-and-software-accounting-workplace.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-hardware-and-software-accounting-branch-office-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-hardware-and-software-accounting-branch-office-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-hardware-and-software-accounting-branch-office-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-hardware-and-software-accounting-branch-office-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-hardware-and-software-accounting-hardware-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-hardware-and-software-accounting-hardware-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-hardware-and-software-accounting-hardware-type-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-hardware-and-software-accounting-hardware-type-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-hardware-and-software-accounting-hardware-type-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-hardware-and-software-accounting-hardware-type-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-hardware-and-software-accounting-operations-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-hardware-and-software-accounting-operations-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-hardware-and-software-accounting-operations-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-hardware-and-software-accounting-operations-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-hardware-and-software-accounting-user-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-hardware-and-software-accounting-user-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-hardware-and-software-accounting-user-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-hardware-and-software-accounting-user-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-hardware-and-software-accounting-vendor-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-hardware-and-software-accounting-vendor-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-hardware-and-software-accounting-vendor-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-hardware-and-software-accounting-vendor-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-hardware-and-software-accounting-workplace-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-hardware-and-software-accounting-workplace-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-hardware-and-software-accounting-workplace-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-hardware-and-software-accounting-workplace-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-hardware-and-software-accounting-branch-office.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-hardware-and-software-accounting-branch-office.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-hardware-and-software-accounting-hardware-type.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-hardware-and-software-accounting-hardware-type.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-hardware-and-software-accounting-hardware.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-hardware-and-software-accounting-hardware.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-hardware-and-software-accounting-operations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-hardware-and-software-accounting-operations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-hardware-and-software-accounting-software.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-hardware-and-software-accounting-software.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-hardware-and-software-accounting-user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-hardware-and-software-accounting-user.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-hardware-and-software-accounting-vendor.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-hardware-and-software-accounting-vendor.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-hardware-and-software-accounting-workplace.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-hardware-and-software-accounting-workplace.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/translations.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-hardware-and-software-accounting-branch-office.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-hardware-and-software-accounting-branch-office.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-hardware-and-software-accounting-hardware-type.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-hardware-and-software-accounting-hardware-type.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-hardware-and-software-accounting-hardware.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-hardware-and-software-accounting-hardware.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-hardware-and-software-accounting-operations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-hardware-and-software-accounting-operations.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-hardware-and-software-accounting-software.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-hardware-and-software-accounting-software.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-hardware-and-software-accounting-user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-hardware-and-software-accounting-user.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-hardware-and-software-accounting-vendor.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-hardware-and-software-accounting-vendor.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-hardware-and-software-accounting-workplace.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-hardware-and-software-accounting-workplace.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-branch-office-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-branch-office-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-branch-office.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-branch-office.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-hardware-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-hardware-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-hardware-type-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-hardware-type-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-hardware-type.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-hardware-type.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-hardware.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-hardware.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-operations-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-operations-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-operations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-operations.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-software-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-software-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-software.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-software.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-user-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-user-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-user.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-vendor-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-vendor-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-vendor.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-vendor.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-workplace-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-workplace-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-workplace.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-workplace.js should pass ESLint\n\n');
  });

  QUnit.test('models/custom-inflector-rules.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/custom-inflector-rules.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-hardware-and-software-accounting-branch-office.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-hardware-and-software-accounting-branch-office.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-hardware-and-software-accounting-hardware-type.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-hardware-and-software-accounting-hardware-type.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-hardware-and-software-accounting-hardware.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-hardware-and-software-accounting-hardware.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-hardware-and-software-accounting-operations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-hardware-and-software-accounting-operations.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-hardware-and-software-accounting-software.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-hardware-and-software-accounting-software.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-hardware-and-software-accounting-user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-hardware-and-software-accounting-user.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-hardware-and-software-accounting-vendor.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-hardware-and-software-accounting-vendor.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-hardware-and-software-accounting-workplace.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-hardware-and-software-accounting-workplace.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hardware-and-software-accounting-branch-office-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hardware-and-software-accounting-branch-office-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hardware-and-software-accounting-branch-office-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hardware-and-software-accounting-branch-office-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hardware-and-software-accounting-branch-office-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hardware-and-software-accounting-branch-office-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hardware-and-software-accounting-hardware-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hardware-and-software-accounting-hardware-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hardware-and-software-accounting-hardware-type-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hardware-and-software-accounting-hardware-type-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hardware-and-software-accounting-hardware-type-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hardware-and-software-accounting-hardware-type-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hardware-and-software-accounting-hardware-type-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hardware-and-software-accounting-hardware-type-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hardware-and-software-accounting-operations-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hardware-and-software-accounting-operations-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hardware-and-software-accounting-operations-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hardware-and-software-accounting-operations-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hardware-and-software-accounting-operations-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hardware-and-software-accounting-operations-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hardware-and-software-accounting-user-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hardware-and-software-accounting-user-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hardware-and-software-accounting-user-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hardware-and-software-accounting-user-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hardware-and-software-accounting-user-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hardware-and-software-accounting-user-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hardware-and-software-accounting-vendor-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hardware-and-software-accounting-vendor-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hardware-and-software-accounting-vendor-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hardware-and-software-accounting-vendor-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hardware-and-software-accounting-vendor-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hardware-and-software-accounting-vendor-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hardware-and-software-accounting-workplace-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hardware-and-software-accounting-workplace-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hardware-and-software-accounting-workplace-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hardware-and-software-accounting-workplace-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hardware-and-software-accounting-workplace-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hardware-and-software-accounting-workplace-l.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hardware-and-software-accounting-branch-office-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hardware-and-software-accounting-branch-office-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hardware-and-software-accounting-branch-office.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hardware-and-software-accounting-branch-office.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hardware-and-software-accounting-hardware-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hardware-and-software-accounting-hardware-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hardware-and-software-accounting-hardware-type-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hardware-and-software-accounting-hardware-type-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hardware-and-software-accounting-hardware-type.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hardware-and-software-accounting-hardware-type.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hardware-and-software-accounting-hardware.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hardware-and-software-accounting-hardware.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hardware-and-software-accounting-operations-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hardware-and-software-accounting-operations-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hardware-and-software-accounting-operations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hardware-and-software-accounting-operations.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hardware-and-software-accounting-software-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hardware-and-software-accounting-software-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hardware-and-software-accounting-software.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hardware-and-software-accounting-software.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hardware-and-software-accounting-user-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hardware-and-software-accounting-user-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hardware-and-software-accounting-user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hardware-and-software-accounting-user.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hardware-and-software-accounting-vendor-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hardware-and-software-accounting-vendor-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hardware-and-software-accounting-vendor.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hardware-and-software-accounting-vendor.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hardware-and-software-accounting-workplace-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hardware-and-software-accounting-workplace-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hardware-and-software-accounting-workplace.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hardware-and-software-accounting-workplace.js should pass ESLint\n\n');
  });

  QUnit.test('services/offline-globals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/offline-globals.js should pass ESLint\n\n');
  });

  QUnit.test('services/store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/store.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/i-i-s-hardware-and-software-accounting-t-action.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/i-i-s-hardware-and-software-accounting-t-action.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/i-i-s-hardware-and-software-accounting-t-state.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/i-i-s-hardware-and-software-accounting-t-state.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('ember-app/tests/helpers/ember-i18n/test-helpers', ['ember-i18n/test-support/-private/t', 'ember-i18n/test-support/-private/assert-translation'], function (_t2, _assertTranslation2) {
  'use strict';

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  Ember.Test.registerHelper('t', function (app, key, interpolations) {
    return (0, _t2.default)(app.__container__, key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember.Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    const text = (0, _t2.default)(app.__container__, key, interpolations);

    (0, _assertTranslation2.default)(element, key, text);
  });
});
define('ember-app/tests/helpers/ember-prop-types', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createComponent = createComponent;

  const { VERSION } = Ember;

  /**
   * Determine if we are on a version of Ember that includes Glimmer 2
   * @returns {Boolean} whether or not we are on Glimmer 2
   */
  function isGlimmer2() {
    const [major, minor] = VERSION.split('.');
    return parseInt(major) > 1 && parseInt(minor) > 9;
  }

  /**
   * Programitcally instantiate instance of component class
   * @param {Ember.Component} component - component class to instantiate
   * @returns {Ember.Component} instance of component class
   */
  function createComponent(component) {
    if (isGlimmer2()) {
      return component.create({ renderer: {} });
    }

    return component.create();
  }
});
define('ember-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-app/tests/helpers/start-app', 'ember-app/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name, options = {}) {
    (0, _qunit.module)(name, {
      beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach() {
        let afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(() => (0, _destroyApp.default)(this.application));
      }
    });
  };
});
define('ember-app/tests/helpers/start-app', ['exports', 'ember-app/app', 'ember-app/config/environment', 'ember-flexberry/test-support'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    let attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(() => {
      let application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ember-app/tests/test-helper', ['ember-app/app', 'ember-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('ember-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/flexberry/i-i-s-hardware-and-software-accounting-branch-office-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-hardware-and-software-accounting-branch-office-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-hardware-and-software-accounting-hardware-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-hardware-and-software-accounting-hardware-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-hardware-and-software-accounting-hardware-type-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-hardware-and-software-accounting-hardware-type-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-hardware-and-software-accounting-operations-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-hardware-and-software-accounting-operations-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-hardware-and-software-accounting-user-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-hardware-and-software-accounting-user-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-hardware-and-software-accounting-vendor-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-hardware-and-software-accounting-vendor-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-hardware-and-software-accounting-workplace-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-hardware-and-software-accounting-workplace-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-hardware-and-software-accounting-branch-office-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-hardware-and-software-accounting-branch-office-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-hardware-and-software-accounting-branch-office-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-hardware-and-software-accounting-branch-office-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-hardware-and-software-accounting-hardware-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-hardware-and-software-accounting-hardware-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-hardware-and-software-accounting-hardware-type-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-hardware-and-software-accounting-hardware-type-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-hardware-and-software-accounting-hardware-type-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-hardware-and-software-accounting-hardware-type-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-hardware-and-software-accounting-operations-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-hardware-and-software-accounting-operations-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-hardware-and-software-accounting-operations-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-hardware-and-software-accounting-operations-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-hardware-and-software-accounting-user-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-hardware-and-software-accounting-user-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-hardware-and-software-accounting-user-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-hardware-and-software-accounting-user-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-hardware-and-software-accounting-vendor-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-hardware-and-software-accounting-vendor-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-hardware-and-software-accounting-vendor-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-hardware-and-software-accounting-vendor-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-hardware-and-software-accounting-workplace-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-hardware-and-software-accounting-workplace-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-hardware-and-software-accounting-workplace-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-hardware-and-software-accounting-workplace-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-hardware-and-software-accounting-branch-office-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-hardware-and-software-accounting-branch-office-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-hardware-and-software-accounting-hardware-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-hardware-and-software-accounting-hardware-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-hardware-and-software-accounting-hardware-type-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-hardware-and-software-accounting-hardware-type-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-hardware-and-software-accounting-operations-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-hardware-and-software-accounting-operations-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-hardware-and-software-accounting-software-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-hardware-and-software-accounting-software-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-hardware-and-software-accounting-user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-hardware-and-software-accounting-user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-hardware-and-software-accounting-vendor-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-hardware-and-software-accounting-vendor-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-hardware-and-software-accounting-workplace-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-hardware-and-software-accounting-workplace-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-hardware-and-software-accounting-branch-office-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-hardware-and-software-accounting-branch-office-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-hardware-and-software-accounting-branch-office-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-hardware-and-software-accounting-branch-office-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-hardware-and-software-accounting-hardware-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-hardware-and-software-accounting-hardware-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-hardware-and-software-accounting-hardware-type-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-hardware-and-software-accounting-hardware-type-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-hardware-and-software-accounting-hardware-type-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-hardware-and-software-accounting-hardware-type-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-hardware-and-software-accounting-operations-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-hardware-and-software-accounting-operations-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-hardware-and-software-accounting-operations-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-hardware-and-software-accounting-operations-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-hardware-and-software-accounting-user-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-hardware-and-software-accounting-user-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-hardware-and-software-accounting-user-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-hardware-and-software-accounting-user-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-hardware-and-software-accounting-vendor-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-hardware-and-software-accounting-vendor-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-hardware-and-software-accounting-vendor-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-hardware-and-software-accounting-vendor-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-hardware-and-software-accounting-workplace-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-hardware-and-software-accounting-workplace-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-hardware-and-software-accounting-workplace-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-hardware-and-software-accounting-workplace-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-hardware-and-software-accounting-branch-office-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-hardware-and-software-accounting-branch-office-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-hardware-and-software-accounting-hardware-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-hardware-and-software-accounting-hardware-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-hardware-and-software-accounting-hardware-type-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-hardware-and-software-accounting-hardware-type-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-hardware-and-software-accounting-operations-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-hardware-and-software-accounting-operations-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-hardware-and-software-accounting-software-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-hardware-and-software-accounting-software-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-hardware-and-software-accounting-user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-hardware-and-software-accounting-user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-hardware-and-software-accounting-vendor-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-hardware-and-software-accounting-vendor-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-hardware-and-software-accounting-workplace-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-hardware-and-software-accounting-workplace-test.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/unit/controllers/i-i-s-hardware-and-software-accounting-branch-office-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-hardware-and-software-accounting-branch-office-e', 'Unit | Controller | i-i-s-hardware-and-software-accounting-branch-office-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    let controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-hardware-and-software-accounting-branch-office-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-hardware-and-software-accounting-branch-office-l', 'Unit | Controller | i-i-s-hardware-and-software-accounting-branch-office-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    let controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-hardware-and-software-accounting-hardware-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-hardware-and-software-accounting-hardware-l', 'Unit | Controller | i-i-s-hardware-and-software-accounting-hardware-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    let controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-hardware-and-software-accounting-hardware-type-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-hardware-and-software-accounting-hardware-type-e', 'Unit | Controller | i-i-s-hardware-and-software-accounting-hardware-type-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    let controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-hardware-and-software-accounting-hardware-type-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-hardware-and-software-accounting-hardware-type-l', 'Unit | Controller | i-i-s-hardware-and-software-accounting-hardware-type-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    let controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-hardware-and-software-accounting-operations-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-hardware-and-software-accounting-operations-e', 'Unit | Controller | i-i-s-hardware-and-software-accounting-operations-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    let controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-hardware-and-software-accounting-operations-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-hardware-and-software-accounting-operations-l', 'Unit | Controller | i-i-s-hardware-and-software-accounting-operations-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    let controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-hardware-and-software-accounting-user-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-hardware-and-software-accounting-user-e', 'Unit | Controller | i-i-s-hardware-and-software-accounting-user-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    let controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-hardware-and-software-accounting-user-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-hardware-and-software-accounting-user-l', 'Unit | Controller | i-i-s-hardware-and-software-accounting-user-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    let controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-hardware-and-software-accounting-vendor-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-hardware-and-software-accounting-vendor-e', 'Unit | Controller | i-i-s-hardware-and-software-accounting-vendor-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    let controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-hardware-and-software-accounting-vendor-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-hardware-and-software-accounting-vendor-l', 'Unit | Controller | i-i-s-hardware-and-software-accounting-vendor-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    let controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-hardware-and-software-accounting-workplace-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-hardware-and-software-accounting-workplace-e', 'Unit | Controller | i-i-s-hardware-and-software-accounting-workplace-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    let controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-hardware-and-software-accounting-workplace-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-hardware-and-software-accounting-workplace-l', 'Unit | Controller | i-i-s-hardware-and-software-accounting-workplace-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    let controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/models/i-i-s-hardware-and-software-accounting-branch-office-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hardware-and-software-accounting-branch-office', 'Unit | Model | i-i-s-hardware-and-software-accounting-branch-office', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-hardware-and-software-accounting-branch-office', 'model:i-i-s-hardware-and-software-accounting-hardware-type', 'model:i-i-s-hardware-and-software-accounting-hardware', 'model:i-i-s-hardware-and-software-accounting-operations', 'model:i-i-s-hardware-and-software-accounting-software', 'model:i-i-s-hardware-and-software-accounting-user', 'model:i-i-s-hardware-and-software-accounting-vendor', 'model:i-i-s-hardware-and-software-accounting-workplace', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-hardware-and-software-accounting-hardware-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hardware-and-software-accounting-hardware', 'Unit | Model | i-i-s-hardware-and-software-accounting-hardware', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-hardware-and-software-accounting-branch-office', 'model:i-i-s-hardware-and-software-accounting-hardware-type', 'model:i-i-s-hardware-and-software-accounting-hardware', 'model:i-i-s-hardware-and-software-accounting-operations', 'model:i-i-s-hardware-and-software-accounting-software', 'model:i-i-s-hardware-and-software-accounting-user', 'model:i-i-s-hardware-and-software-accounting-vendor', 'model:i-i-s-hardware-and-software-accounting-workplace', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-hardware-and-software-accounting-hardware-type-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hardware-and-software-accounting-hardware-type', 'Unit | Model | i-i-s-hardware-and-software-accounting-hardware-type', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-hardware-and-software-accounting-branch-office', 'model:i-i-s-hardware-and-software-accounting-hardware-type', 'model:i-i-s-hardware-and-software-accounting-hardware', 'model:i-i-s-hardware-and-software-accounting-operations', 'model:i-i-s-hardware-and-software-accounting-software', 'model:i-i-s-hardware-and-software-accounting-user', 'model:i-i-s-hardware-and-software-accounting-vendor', 'model:i-i-s-hardware-and-software-accounting-workplace', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-hardware-and-software-accounting-operations-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hardware-and-software-accounting-operations', 'Unit | Model | i-i-s-hardware-and-software-accounting-operations', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-hardware-and-software-accounting-branch-office', 'model:i-i-s-hardware-and-software-accounting-hardware-type', 'model:i-i-s-hardware-and-software-accounting-hardware', 'model:i-i-s-hardware-and-software-accounting-operations', 'model:i-i-s-hardware-and-software-accounting-software', 'model:i-i-s-hardware-and-software-accounting-user', 'model:i-i-s-hardware-and-software-accounting-vendor', 'model:i-i-s-hardware-and-software-accounting-workplace', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-hardware-and-software-accounting-software-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hardware-and-software-accounting-software', 'Unit | Model | i-i-s-hardware-and-software-accounting-software', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-hardware-and-software-accounting-branch-office', 'model:i-i-s-hardware-and-software-accounting-hardware-type', 'model:i-i-s-hardware-and-software-accounting-hardware', 'model:i-i-s-hardware-and-software-accounting-operations', 'model:i-i-s-hardware-and-software-accounting-software', 'model:i-i-s-hardware-and-software-accounting-user', 'model:i-i-s-hardware-and-software-accounting-vendor', 'model:i-i-s-hardware-and-software-accounting-workplace', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-hardware-and-software-accounting-user-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hardware-and-software-accounting-user', 'Unit | Model | i-i-s-hardware-and-software-accounting-user', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-hardware-and-software-accounting-branch-office', 'model:i-i-s-hardware-and-software-accounting-hardware-type', 'model:i-i-s-hardware-and-software-accounting-hardware', 'model:i-i-s-hardware-and-software-accounting-operations', 'model:i-i-s-hardware-and-software-accounting-software', 'model:i-i-s-hardware-and-software-accounting-user', 'model:i-i-s-hardware-and-software-accounting-vendor', 'model:i-i-s-hardware-and-software-accounting-workplace', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-hardware-and-software-accounting-vendor-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hardware-and-software-accounting-vendor', 'Unit | Model | i-i-s-hardware-and-software-accounting-vendor', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-hardware-and-software-accounting-branch-office', 'model:i-i-s-hardware-and-software-accounting-hardware-type', 'model:i-i-s-hardware-and-software-accounting-hardware', 'model:i-i-s-hardware-and-software-accounting-operations', 'model:i-i-s-hardware-and-software-accounting-software', 'model:i-i-s-hardware-and-software-accounting-user', 'model:i-i-s-hardware-and-software-accounting-vendor', 'model:i-i-s-hardware-and-software-accounting-workplace', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-hardware-and-software-accounting-workplace-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hardware-and-software-accounting-workplace', 'Unit | Model | i-i-s-hardware-and-software-accounting-workplace', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-hardware-and-software-accounting-branch-office', 'model:i-i-s-hardware-and-software-accounting-hardware-type', 'model:i-i-s-hardware-and-software-accounting-hardware', 'model:i-i-s-hardware-and-software-accounting-operations', 'model:i-i-s-hardware-and-software-accounting-software', 'model:i-i-s-hardware-and-software-accounting-user', 'model:i-i-s-hardware-and-software-accounting-vendor', 'model:i-i-s-hardware-and-software-accounting-workplace', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/routes/i-i-s-hardware-and-software-accounting-branch-office-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-hardware-and-software-accounting-branch-office-e', 'Unit | Route | i-i-s-hardware-and-software-accounting-branch-office-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-hardware-and-software-accounting-branch-office-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-hardware-and-software-accounting-branch-office-l', 'Unit | Route | i-i-s-hardware-and-software-accounting-branch-office-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-hardware-and-software-accounting-hardware-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-hardware-and-software-accounting-hardware-l', 'Unit | Route | i-i-s-hardware-and-software-accounting-hardware-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-hardware-and-software-accounting-hardware-type-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-hardware-and-software-accounting-hardware-type-e', 'Unit | Route | i-i-s-hardware-and-software-accounting-hardware-type-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-hardware-and-software-accounting-hardware-type-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-hardware-and-software-accounting-hardware-type-l', 'Unit | Route | i-i-s-hardware-and-software-accounting-hardware-type-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-hardware-and-software-accounting-operations-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-hardware-and-software-accounting-operations-e', 'Unit | Route | i-i-s-hardware-and-software-accounting-operations-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-hardware-and-software-accounting-operations-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-hardware-and-software-accounting-operations-l', 'Unit | Route | i-i-s-hardware-and-software-accounting-operations-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-hardware-and-software-accounting-user-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-hardware-and-software-accounting-user-e', 'Unit | Route | i-i-s-hardware-and-software-accounting-user-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-hardware-and-software-accounting-user-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-hardware-and-software-accounting-user-l', 'Unit | Route | i-i-s-hardware-and-software-accounting-user-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-hardware-and-software-accounting-vendor-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-hardware-and-software-accounting-vendor-e', 'Unit | Route | i-i-s-hardware-and-software-accounting-vendor-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-hardware-and-software-accounting-vendor-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-hardware-and-software-accounting-vendor-l', 'Unit | Route | i-i-s-hardware-and-software-accounting-vendor-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-hardware-and-software-accounting-workplace-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-hardware-and-software-accounting-workplace-e', 'Unit | Route | i-i-s-hardware-and-software-accounting-workplace-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-hardware-and-software-accounting-workplace-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-hardware-and-software-accounting-workplace-l', 'Unit | Route | i-i-s-hardware-and-software-accounting-workplace-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-hardware-and-software-accounting-branch-office-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hardware-and-software-accounting-branch-office', 'Unit | Serializer | i-i-s-hardware-and-software-accounting-branch-office', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-hardware-and-software-accounting-branch-office', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-hardware-and-software-accounting-t-action', 'transform:i-i-s-hardware-and-software-accounting-t-state', 'model:i-i-s-hardware-and-software-accounting-branch-office', 'model:i-i-s-hardware-and-software-accounting-hardware-type', 'model:i-i-s-hardware-and-software-accounting-hardware', 'model:i-i-s-hardware-and-software-accounting-operations', 'model:i-i-s-hardware-and-software-accounting-software', 'model:i-i-s-hardware-and-software-accounting-user', 'model:i-i-s-hardware-and-software-accounting-vendor', 'model:i-i-s-hardware-and-software-accounting-workplace', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    let record = this.subject();

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-hardware-and-software-accounting-hardware-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hardware-and-software-accounting-hardware', 'Unit | Serializer | i-i-s-hardware-and-software-accounting-hardware', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-hardware-and-software-accounting-hardware', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-hardware-and-software-accounting-t-action', 'transform:i-i-s-hardware-and-software-accounting-t-state', 'model:i-i-s-hardware-and-software-accounting-branch-office', 'model:i-i-s-hardware-and-software-accounting-hardware-type', 'model:i-i-s-hardware-and-software-accounting-hardware', 'model:i-i-s-hardware-and-software-accounting-operations', 'model:i-i-s-hardware-and-software-accounting-software', 'model:i-i-s-hardware-and-software-accounting-user', 'model:i-i-s-hardware-and-software-accounting-vendor', 'model:i-i-s-hardware-and-software-accounting-workplace', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    let record = this.subject();

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-hardware-and-software-accounting-hardware-type-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hardware-and-software-accounting-hardware-type', 'Unit | Serializer | i-i-s-hardware-and-software-accounting-hardware-type', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-hardware-and-software-accounting-hardware-type', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-hardware-and-software-accounting-t-action', 'transform:i-i-s-hardware-and-software-accounting-t-state', 'model:i-i-s-hardware-and-software-accounting-branch-office', 'model:i-i-s-hardware-and-software-accounting-hardware-type', 'model:i-i-s-hardware-and-software-accounting-hardware', 'model:i-i-s-hardware-and-software-accounting-operations', 'model:i-i-s-hardware-and-software-accounting-software', 'model:i-i-s-hardware-and-software-accounting-user', 'model:i-i-s-hardware-and-software-accounting-vendor', 'model:i-i-s-hardware-and-software-accounting-workplace', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    let record = this.subject();

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-hardware-and-software-accounting-operations-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hardware-and-software-accounting-operations', 'Unit | Serializer | i-i-s-hardware-and-software-accounting-operations', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-hardware-and-software-accounting-operations', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-hardware-and-software-accounting-t-action', 'transform:i-i-s-hardware-and-software-accounting-t-state', 'model:i-i-s-hardware-and-software-accounting-branch-office', 'model:i-i-s-hardware-and-software-accounting-hardware-type', 'model:i-i-s-hardware-and-software-accounting-hardware', 'model:i-i-s-hardware-and-software-accounting-operations', 'model:i-i-s-hardware-and-software-accounting-software', 'model:i-i-s-hardware-and-software-accounting-user', 'model:i-i-s-hardware-and-software-accounting-vendor', 'model:i-i-s-hardware-and-software-accounting-workplace', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    let record = this.subject();

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-hardware-and-software-accounting-software-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hardware-and-software-accounting-software', 'Unit | Serializer | i-i-s-hardware-and-software-accounting-software', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-hardware-and-software-accounting-software', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-hardware-and-software-accounting-t-action', 'transform:i-i-s-hardware-and-software-accounting-t-state', 'model:i-i-s-hardware-and-software-accounting-branch-office', 'model:i-i-s-hardware-and-software-accounting-hardware-type', 'model:i-i-s-hardware-and-software-accounting-hardware', 'model:i-i-s-hardware-and-software-accounting-operations', 'model:i-i-s-hardware-and-software-accounting-software', 'model:i-i-s-hardware-and-software-accounting-user', 'model:i-i-s-hardware-and-software-accounting-vendor', 'model:i-i-s-hardware-and-software-accounting-workplace', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    let record = this.subject();

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-hardware-and-software-accounting-user-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hardware-and-software-accounting-user', 'Unit | Serializer | i-i-s-hardware-and-software-accounting-user', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-hardware-and-software-accounting-user', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-hardware-and-software-accounting-t-action', 'transform:i-i-s-hardware-and-software-accounting-t-state', 'model:i-i-s-hardware-and-software-accounting-branch-office', 'model:i-i-s-hardware-and-software-accounting-hardware-type', 'model:i-i-s-hardware-and-software-accounting-hardware', 'model:i-i-s-hardware-and-software-accounting-operations', 'model:i-i-s-hardware-and-software-accounting-software', 'model:i-i-s-hardware-and-software-accounting-user', 'model:i-i-s-hardware-and-software-accounting-vendor', 'model:i-i-s-hardware-and-software-accounting-workplace', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    let record = this.subject();

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-hardware-and-software-accounting-vendor-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hardware-and-software-accounting-vendor', 'Unit | Serializer | i-i-s-hardware-and-software-accounting-vendor', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-hardware-and-software-accounting-vendor', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-hardware-and-software-accounting-t-action', 'transform:i-i-s-hardware-and-software-accounting-t-state', 'model:i-i-s-hardware-and-software-accounting-branch-office', 'model:i-i-s-hardware-and-software-accounting-hardware-type', 'model:i-i-s-hardware-and-software-accounting-hardware', 'model:i-i-s-hardware-and-software-accounting-operations', 'model:i-i-s-hardware-and-software-accounting-software', 'model:i-i-s-hardware-and-software-accounting-user', 'model:i-i-s-hardware-and-software-accounting-vendor', 'model:i-i-s-hardware-and-software-accounting-workplace', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    let record = this.subject();

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-hardware-and-software-accounting-workplace-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hardware-and-software-accounting-workplace', 'Unit | Serializer | i-i-s-hardware-and-software-accounting-workplace', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-hardware-and-software-accounting-workplace', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-hardware-and-software-accounting-t-action', 'transform:i-i-s-hardware-and-software-accounting-t-state', 'model:i-i-s-hardware-and-software-accounting-branch-office', 'model:i-i-s-hardware-and-software-accounting-hardware-type', 'model:i-i-s-hardware-and-software-accounting-hardware', 'model:i-i-s-hardware-and-software-accounting-operations', 'model:i-i-s-hardware-and-software-accounting-software', 'model:i-i-s-hardware-and-software-accounting-user', 'model:i-i-s-hardware-and-software-accounting-vendor', 'model:i-i-s-hardware-and-software-accounting-workplace', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    let record = this.subject();

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/config/environment', [], function() {
  var prefix = 'ember-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
