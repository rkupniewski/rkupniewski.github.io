// render all of our messages in the ui
Template.chatBox.helpers({
  "messages": function() {
	  
    return chatCollection.find();    
  }
});

// get the value for handlerbar helper user
Template.chatMessage.helpers({
  "user": function() {
    if(this.userId == 'ty') {
      return this.userId;
    } else if(this.userId) {
      getUsername(this.userId);
      return Session.get('user-' + this.userId);
    } 
  }
});

// when Send Chat clicked at the message to the collection
Template.chatBox.events({
  "click #send": function() {
	  try{
		  var tresc='Wiadomość';
	 if (Meteor.user().username=='null'){
	 }
	 else {
    var message = $('#chat-message').val();
    if (message==''){
		return 0;
			}
	else{
    chatCollection.insert({
      userId: 'ty',
      message: message
    });
}
  }
}
catch(TypeError){
	alert("Aby pisać musisz się zalogować!");
	return 0;
}
    $('#chat-message').val(null);
    
    chatStream.emit('chat', message);
  }
  
});

Template.chatMessage.helpers({
  "kolor": function() {
    if(this.userId == 'ty') {
		var kolor='blue';
      return kolor;
    } 
  }
});
chatStream.on('chat', function(message) {
  chatCollection.insert({
    userId: this.userId,
    subscriptionId: this.subscriptionId,
    message: message
  });
});

Template.chatMessage.helpers({
  "user": function() {
    if(this.userId == 'ty') {
      return this.userId;
    } else if(this.userId) {
      getUsername(this.userId);
      return Session.get('user-' + this.userId);
    } 
  }
});


// when Send Chat clicked at the message to the collection
