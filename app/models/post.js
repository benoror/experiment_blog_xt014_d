import DS from 'ember-data';

export default DS.Model.extend({
  timestamp: DS.attr('date'),
  published: DS.attr('boolean'),
  title: DS.attr('string'),
  body: DS.attr('string'),
  headerImage: DS.attr('string'),
  author: DS.belongsTo('author'),
  comments: DS.hasMany('comments')
});

