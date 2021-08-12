import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-hardware-and-software-accounting-operations', 'Unit | Serializer | i-i-s-hardware-and-software-accounting-operations', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-hardware-and-software-accounting-operations',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-hardware-and-software-accounting-t-action',
    'transform:i-i-s-hardware-and-software-accounting-t-state',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
