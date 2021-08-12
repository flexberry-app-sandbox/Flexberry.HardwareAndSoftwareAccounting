import { Serializer as BranchOfficeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-hardware-and-software-accounting-branch-office';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(BranchOfficeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
