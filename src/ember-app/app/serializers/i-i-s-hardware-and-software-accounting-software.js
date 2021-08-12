import { Serializer as SoftwareSerializer } from
  '../mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-software';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(SoftwareSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
