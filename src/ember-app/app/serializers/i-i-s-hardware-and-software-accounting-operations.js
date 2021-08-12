import { Serializer as OperationsSerializer } from
  '../mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-operations';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(OperationsSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
