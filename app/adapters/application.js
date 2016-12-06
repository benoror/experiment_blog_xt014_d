import AirtableAdapter from "ember-airtable/adapter";

export default AirtableAdapter.extend({
  host: 'https://keen-gorilla.gomix.me',
  //host: 'https://proxyblogxt014d.now.sh',
  //host: 'http://localhost:4214',
  namespace: 'api'
});

