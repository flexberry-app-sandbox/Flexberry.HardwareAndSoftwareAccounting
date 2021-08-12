import { Serializer as VendorSerializer } from
  '../mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-vendor';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(VendorSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
