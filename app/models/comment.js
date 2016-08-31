import DS from 'ember-data';

export default DS.Model.extend({
  timestamp: DS.attr('date'),
  email: DS.attr('string'),
  name: DS.attr('string'),
  comment: DS.attr('string'),
  //post: DS.belongsTo('post')
});
