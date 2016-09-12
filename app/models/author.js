import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  bio: DS.attr('string'),
  avatar: DS.attr(),
  posts: DS.hasMany('post')
});

