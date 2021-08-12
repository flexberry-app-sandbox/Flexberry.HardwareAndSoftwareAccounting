import { Serializer as HardwareTypeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-hardware-type';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(HardwareTypeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
