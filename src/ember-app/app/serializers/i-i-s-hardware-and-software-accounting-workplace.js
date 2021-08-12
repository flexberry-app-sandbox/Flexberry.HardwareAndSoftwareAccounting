import { Serializer as WorkplaceSerializer } from
  '../mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-workplace';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(WorkplaceSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
