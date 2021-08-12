import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-hardware-and-software-accounting-workplace-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-hardware-and-software-accounting-software+vendor':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'name',
            required: true,
            relationName: 'vendor',
            projection: 'VendorL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-hardware-and-software-accounting-hardware+hardwareType':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'name',
            required: true,
            relationName: 'hardwareType',
            projection: 'HardwareTypeL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-hardware-and-software-accounting-hardware+employee':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'name',
            required: true,
            relationName: 'employee',
            projection: 'UserL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
