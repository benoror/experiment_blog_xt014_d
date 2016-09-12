import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post')
    });
  },

  setupController(controller, model) {
    controller.setProperties(model);
    this._super(...arguments);
  }
});

