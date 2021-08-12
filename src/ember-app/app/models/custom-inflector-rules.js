import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('operations', 'Operationss');
inflector.irregular('workplace', 'Workplaces');
inflector.irregular('hardware', 'Hardwares');
inflector.irregular('software', 'Softwares');
inflector.irregular('office', 'Offices');
inflector.irregular('vendor', 'Vendors');
inflector.irregular('type', 'Types');
inflector.irregular('user', 'Users');

export default {};
