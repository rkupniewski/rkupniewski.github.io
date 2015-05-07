if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  Template.czesc.helpers({
    counter2: function () {
      return Session.get('counter2');
    }
  });

  Template.czesc.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter2', Session.get('counter2') + 2);
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
