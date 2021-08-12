import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-hardware-and-software-accounting-hardware-type', 'Unit | Model | i-i-s-hardware-and-software-accounting-hardware-type', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-hardware-and-software-accounting-branch-office',
    'model:i-i-s-hardware-and-software-accounting-hardware-type',
    'model:i-i-s-hardware-and-software-accounting-hardware',
    'model:i-i-s-hardware-and-software-accounting-operations',
    'model:i-i-s-hardware-and-software-accounting-software',
    'model:i-i-s-hardware-and-software-accounting-user',
    'model:i-i-s-hardware-and-software-accounting-vendor',
    'model:i-i-s-hardware-and-software-accounting-workplace',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
