import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-hardware-and-software-accounting-branch-office-l');
  this.route('i-i-s-hardware-and-software-accounting-branch-office-e',
  { path: 'i-i-s-hardware-and-software-accounting-branch-office-e/:id' });
  this.route('i-i-s-hardware-and-software-accounting-branch-office-e.new',
  { path: 'i-i-s-hardware-and-software-accounting-branch-office-e/new' });
  this.route('i-i-s-hardware-and-software-accounting-hardware-l');
  this.route('null',
  { path: 'null/:id' });
  this.route('null.new',
  { path: 'null/new' });
  this.route('i-i-s-hardware-and-software-accounting-hardware-type-l');
  this.route('i-i-s-hardware-and-software-accounting-hardware-type-e',
  { path: 'i-i-s-hardware-and-software-accounting-hardware-type-e/:id' });
  this.route('i-i-s-hardware-and-software-accounting-hardware-type-e.new',
  { path: 'i-i-s-hardware-and-software-accounting-hardware-type-e/new' });
  this.route('i-i-s-hardware-and-software-accounting-operations-l');
  this.route('i-i-s-hardware-and-software-accounting-operations-e',
  { path: 'i-i-s-hardware-and-software-accounting-operations-e/:id' });
  this.route('i-i-s-hardware-and-software-accounting-operations-e.new',
  { path: 'i-i-s-hardware-and-software-accounting-operations-e/new' });
  this.route('i-i-s-hardware-and-software-accounting-user-l');
  this.route('i-i-s-hardware-and-software-accounting-user-e',
  { path: 'i-i-s-hardware-and-software-accounting-user-e/:id' });
  this.route('i-i-s-hardware-and-software-accounting-user-e.new',
  { path: 'i-i-s-hardware-and-software-accounting-user-e/new' });
  this.route('i-i-s-hardware-and-software-accounting-vendor-l');
  this.route('i-i-s-hardware-and-software-accounting-vendor-e',
  { path: 'i-i-s-hardware-and-software-accounting-vendor-e/:id' });
  this.route('i-i-s-hardware-and-software-accounting-vendor-e.new',
  { path: 'i-i-s-hardware-and-software-accounting-vendor-e/new' });
  this.route('i-i-s-hardware-and-software-accounting-workplace-l');
  this.route('i-i-s-hardware-and-software-accounting-workplace-e',
  { path: 'i-i-s-hardware-and-software-accounting-workplace-e/:id' });
  this.route('i-i-s-hardware-and-software-accounting-workplace-e.new',
  { path: 'i-i-s-hardware-and-software-accounting-workplace-e/new' });
});

export default Router;
