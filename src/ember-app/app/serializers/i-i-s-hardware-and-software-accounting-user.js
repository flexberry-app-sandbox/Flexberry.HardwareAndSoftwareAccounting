import { Serializer as UserSerializer } from
  '../mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-user';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(UserSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
