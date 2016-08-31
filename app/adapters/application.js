import AirtableAdapter from "ember-airtable/adapter";

export default AirtableAdapter.extend({

  // API Version + Base ID
  namespace: 'v0/appORZW5oQ4Rqi22P',

  headers: {
    'Accept': 'application/json',
    // API Token
    'Authorization': `Bearer YOUR_API_KEY`
  }
});

