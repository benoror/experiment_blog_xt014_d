import Ember from 'ember';

export default Ember.Component.extend({
  size: 200,
  email: '',

  url: Ember.computed('email', 'size', function() {
    const email = this.get('email'),
        size = this.get('size');

    return 'http://www.gravatar.com/avatar/' +
      md5(email) + '?s=' + size;
  })

});
