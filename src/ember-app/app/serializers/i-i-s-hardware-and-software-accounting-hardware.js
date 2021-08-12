import { Serializer as HardwareSerializer } from
  '../mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-hardware';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(HardwareSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
