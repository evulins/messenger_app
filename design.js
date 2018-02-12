
//Global variable
//List of friends

var friends = [
"Dawid Dawcikowski",
"Ewu Dawcikowska",
"Stefka",
"Lola",
"Buka Bukiszon",
"Jebułka",
"Evulins"
];

//List of objects containg firends and my conversations with them

var conversations = {
  list: [
    {
    friend: {
      name: 'Dawid',
      surname: 'Dawcikowski',
      avatar: 'dawid.jpg'
     },
    messages: [
    {
      text: 'Dawcik, how are you?',
      sentAt: 'Tue Feb 06 2018 13:02:21 GMT+0100 (CET)',
      sentByMe: true,
      seen: false,
      delivered: false
    },
    {
      text: 'I am fine. Just chillin ',
      sentAt: 'Tue Feb 05 2018 13:02:21 GMT+0100 (CET)',
      sentByMe: false,
      seen: false,
      delivered: false
    }
  ],
    lastMessage: {
      text: 'Hejka',
      sentAt: 'Tue Feb 04 2018 13:02:21 GMT+0100 (CET)',
      sentByMe: false,
      seen: false,
      delivered: false
    }
  },
  {
    friend: {
      name: 'Stefka',
      surname: 'Stefka',
      avatar: 'stefka.jpg'
    },
    messages: [
    {
      text: 'Miau, where is my food???',
      sentAt: 'Tue Feb 06 2018 13:02:21 GMT+0100 (CET)',
      sentByMe: true,
      seen: false,
      delivered: false
    },
    {
      text: 'I dont know :(',
      sentAt: 'Tue Feb 05 2018 13:02:21 GMT+0100 (CET)',
      sentByMe: false,
      seen: false,
      delivered: false
    }
    ],
    lastMessage: {
      text: 'I have to write really long text, to see if the line will hide',
      sentAt: 'Tue Jan 30 2018 21:39:57 GMT+0100 (CET)',
      seen: false,
      delivered: true
    }
  },
  {
    friend: {
      name: 'Lola',
      surname: 'Lola',
      avatar: 'lola.jpg'
    },
    messages: [
    {
      text: 'Hi, where is Stefka? I want to play',
      sentAt: 'Tue Feb 06 2018 13:02:21 GMT+0100 (CET)',
      sentByMe: true,
      seen: false,
      delivered: false
    },
    {
      text: 'She is eating her cucumber',
      sentAt: 'Tue Feb 05 2018 13:02:21 GMT+0100 (CET)',
      sentByMe: false,
      seen: false,
      delivered: false
    }
    ],
    lastMessage: {
      text: 'Muszę napsiać bardzo długi teskt, żeby sprawdzić, czy się zawija lub skraca.',
      sentAt: 'Tue Jan 30 2018 21:39:57 GMT+0100 (CET)',
      seen: true,
      delivered: true
    }
  },
  {
    friend: {
      name: 'Cats',
      surname: '',
      avatar: 'koty.jpg'
    },
    messages: [
    {
      text: 'Hi, what time we will meet tonight?',
      sentAt: 'Tue Feb 06 2018 13:02:21 GMT+0100 (CET)',
      sentByMe: true,
      seen: false,
      delivered: false
    },
    {
      text: 'at 9pm',
      sentAt: 'Tue Feb 05 2018 13:02:21 GMT+0100 (CET)',
      sentByMe: false,
      seen: false,
      delivered: false
    }
    ],
    lastMessage: {
      text: 'Muszę napsiać bardzo długi teskt, żeby sprawdzić, czy się zawija lub skraca.',
      sentAt: 'Tue Jan 30 2018 21:39:57 GMT+0100 (CET)',
      seen: false,
      delivered: true
    }
  },
  {
    friend: {
      name: 'Buka',
      surname: 'Bukiszon',
      avatar: 'buka.jpg'
    },
    messages: [
    {
      text: 'Woof! Woof!',
      sentAt: 'Tue Feb 06 2018 13:02:21 GMT+0100 (CET)',
      sentByMe: true,
      seen: false,
      delivered: false
    },
    {
      text: 'Come on girl, lets play',
      sentAt: 'Tue Feb 05 2018 13:02:21 GMT+0100 (CET)',
      sentByMe: false,
      seen: false,
      delivered: false
    }
    ],
    lastMessage: {
      text: 'Muszę napsiać bardzo długi teskt, żeby sprawdzić, czy się zawija lub skraca.',
      sentAt: 'Tue Jan 30 2018 21:39:57 GMT+0100 (CET)',
      seen: false,
      delivered: true
    }
  },
  {
    friend: {
      name: 'Jebułka',
      surname: 'Bułka',
      avatar: 'jebulka.jpg'
    },
    messages: [
    {
      text: 'purr, purr',
      sentAt: 'Tue Feb 06 2018 13:02:21 GMT+0100 (CET)',
      sentByMe: true,
      seen: false,
      delivered: false
    },
    {
      text: 'Come on kitty, kitty',
      sentAt: 'Tue Feb 05 2018 13:02:21 GMT+0100 (CET)',
      sentByMe: false,
      seen: false,
      delivered: false
    }
    ],
    lastMessage: {
      text: 'Muszę napsiać bardzo długi teskt, żeby sprawdzić, czy się zawija lub skraca.',
      sentAt: 'Tue Jan 30 2018 21:39:57 GMT+0100 (CET)',
      seen: false,
      delivered: true
    }
  },
  {
    friend: {
      name: 'Evulins',
      surname: 'Sar',
      avatar: 'ewu.jpg'
    },
    messages: [
    {
      text: 'Dawcik. Dlaczego śmierdzisz kupą?',
      sentAt: 'Tue Feb 06 2018 13:02:21 GMT+0100 (CET)',
      sentByMe: true,
      seen: false,
      delivered: false
    },
    {
      text: 'bo nie myłem tyłka od środy',
      sentAt: 'Tue Feb 05 2018 13:02:21 GMT+0100 (CET)',
      sentByMe: false,
      seen: false,
      delivered: false
    }
    ],
    lastMessage: {
      text: 'Muszę napsiać bardzo długi teskt, żeby sprawdzić, czy się zawija lub skraca.',
      sentAt: 'Mon Jan 29 2018 21:39:57 GMT+0100 (CET)',
      seen: false,
      delivered: true
    }
  },
  {
    friend: {
      name: 'Ewu',
      surname: 'Dawcikowska',
      avatar: 'awatar.jpg'
    },
    messages: [
    {
      text: 'Dawcik. Dlaczego masz takie duże oczy?',
      sentAt: 'Tue Feb 06 2018 13:02:21 GMT+0100 (CET)',
      sentByMe: true,
      seen: false,
      delivered: false
    },
    {
      text: 'Żeby Cię lepiej widzieć!',
      sentAt: 'Tue Feb 05 2018 13:02:21 GMT+0100 (CET)',
      sentByMe: false,
      seen: false,
      delivered: false
    }
    ],
    lastMessage: {
      text: 'Muszę napsiać bardzo długi teskt, żeby sprawdzić, czy się zawija lub skraca.',
      sentAt: 'Tue Jan 30 2018 21:39:57 GMT+0100 (CET)',
      seen: false,
      delivered: true
    }
  },
  {
    friend: {
      name: 'Ewu',
      surname: 'Dawcikowska',
      avatar: 'awatar.jpg'
    },
    messages: [
    {
      text: 'Test, textMessage',
      sentAt: 'Tue Feb 06 2018 13:02:21 GMT+0100 (CET)',
      sentByMe: true,
      seen: false,
      delivered: false
    },
    {
      text: 'Reply',
      sentAt: 'Tue Feb 05 2018 13:02:21 GMT+0100 (CET)',
      sentByMe: false,
      seen: false,
      delivered: false
    }
    ],
    lastMessage: {
      text: 'Muszę napsiać bardzo długi teskt, żeby sprawdzić, czy się zawija lub skraca.',
      sentAt: 'Tue Jan 30 2018 21:39:57 GMT+0100 (CET)',
      seen: false,
      delivered: true
    }
  }
  ],

//Gets all conversations
getAll: function() {
  return conversations.list;
},

//Adds message
addMessage: function(friend, message) {
  var conversation = conversations.getConversationWith(friend);
  var oldMessage = {
    text: conversation.lastMessage.text,
    sentAt: conversation.lastMessage.sentAt,
    sentByMe: conversation.lastMessage.sentByMe,
    seen: conversation.lastMessage.seen,
    delivered: conversation.lastMessage.delivered
  }
  conversation.messages.push(oldMessage);

  conversation.lastMessage.text = message;
  conversation.lastMessage.sentAt = new Date().toString();
  conversation.lastMessage.sentByMe = true;
  conversation.lastMessage.seen = false;
  conversation.lastMessage.delivered = true;

},

//Gets conversations with selected person based on her name and surname
getConversationWith: function(full_name) {
  var result = conversations.list.filter(function(element) {
    return element.friend.name + " " + element.friend.surname === full_name;
  });
  return result[0];
},

//Searches all conversation by phrase
searchConversations: function(phrase) {
  var results = conversations.list.filter(function(element) {
    var name = element.friend.name.toUpperCase();
    var surname = element.friend.surname.toUpperCase();
    var searchContent = phrase.toUpperCase();
    return name.indexOf(searchContent) > -1 || surname.indexOf(searchContent) > -1;
  });
  return results;
}

};

//Based on the data from conversations object, shows all elements on the list
function showConversations(conversationList) {

  for (var i = 0; i < conversationList.length; i++) {
    var current = conversationList[i];
    var wrappedDate = moment(new Date(current.lastMessage.sentAt));
    var conversation = `
    <li id="conversation">
    <div class="avatar">
    <img src="avatars/${current.friend.avatar}">
    </div>
    <div class="textMessage">
    <p class="name"><span>${current.friend.name} ${current.friend.surname}</span></p>
    <p class="text"><span>${current.lastMessage.text}</span></p>
    </div>
    <div class="messageDetails">
    <p class="date"><span>${wrappedDate.fromNow()}</span></p>
    ${getIcon(current.lastMessage)}
    </div>
    </li>
    `;
    // Adds all conversations to list #messagesList
    $("#messagesList").append(conversation);
    //Clicking on the icon "x", closes the chat window. After that main messenger window appears.
    $(".topBar #close").click(function(event){
     event.preventDefault();
     $(".chat").hide();
     $(".messengerApp").show();
   });
  }  
}

//Shows conversation with selected person
function showChat(conversation) {

  var allMessages = conversation.messages.concat([conversation.lastMessage]);
  //Puts messages in date order
  allMessages.sort(function(a, b) {
    var dateA = new Date(a.sentAt);
    var dateB = new Date(b.sentAt);
    return dateA - dateB;
  });

  for (var i = 0; i < allMessages.length; i++) {
    var current = allMessages[i];
    var wrappedDate = moment(new Date(current.sentAt));
    var messageContent;

    if (current.text.length > 0) {
      messageContent = current.text;  
    } else {
      messageContent = '<div class="fa fa-thumbs-o-up like"></div>';
    }

    // My Message
    var myMessage = `
    <div class="me">
    <ul>
    <p class="date">${wrappedDate.fromNow()}</p>
    <li class="myMessage"><span>${messageContent}</span></li>
    </ul>
    </div>
    `;
    // Message from friend
    var reply = `
    <div class="reply">
    <p class="date">${wrappedDate.fromNow()}</p>
    <div class="avatar">
    <img src="avatars/${conversation.friend.avatar}">
    </div>
    <ul>
    <li class="reMessage"><span>${messageContent}</span></li>
    </ul>
    </div>
    `;

    $(".chatMessages").append(current.sentByMe ? myMessage : reply);
  }
  //Scrolls to the lates sent message
  $(".chatMessages").scroll();
  $(".chatMessages").animate({ 
    scrollTop: 5220
  }, 10440);

}

//Clears chat window from previous messages to the other person

function clearChat() {
  $(".chatMessages").empty();
}

//Clears list messages
function clearConversations() {
  $("ul#messagesList").empty();
}

//Changes name in topbar and shows the full name of person with whom I chat
function changeName(full_name) {
  $(".chat .topBar a p.name").text(full_name);
}

//Shows conversations in chat windowe with the person selected from the conversation list
function registerClickConversation() {
  $("li#conversation").click(function(event) {
    event.preventDefault();
    $(".messengerApp").hide();
    $(".chat").show();
    clearChat();
    var person = $(this).find(".textMessage .name span").text();
    changeName(person);
    var conversation = conversations.getConversationWith(person);
    showChat(conversation);

  });
}

//Shows different icons based on information if the message has been seen and delivered
function getIcon(message) {
  if (message.delivered && message.seen) {
    return '<span class="fa fa-check-circle seen"></span>'
  } else if (message.delivered && !message.seen) {
    return '<span class="fa fa-circle seen"></span>'
  } else {
    return '<span class="fa fa-circle-o seen"></span>'
  }
}

//Activate new message icon and shows empty chat windowe
$(".writeMessage").click(function(event) {
 event.preventDefault();
 $(".messengerApp").hide();
 $(".chatWindow").show();
});

//Closes chat window and show main messanger view
$(".top .tools").click(function(event) {
 event.preventDefault();
 $(".chatWindow").hide();
 $(".messengerApp").show();

});




// This function is activating every time when page is reloding
(function() {
  console.log("test")
  showConversations(conversations.getAll());
  
  //After selecting person and typing message, sends new message.
  $(".newForm").submit(function(event) {
    event.preventDefault();
    var newMessage = $(".newForm .bottom input").val();
    var person = $("select").val();
    var minLength = 1;

   //If new message has less than one charakter, alert is showing
    if (newMessage.length < minLength) {
      alert("Your message must have at least " + minLength + " character");
      return;
    }
   //Adds new message to conversation with selected person
    conversations.addMessage(person, newMessage);
    //Hide window with new message and show chat window with selected person
    $(".chatWindow").hide();
    $(".chat").show();
    clearChat();
    var conversation = conversations.getConversationWith(person);
    showChat(conversation);
    changeName(person);
    $(".newForm")[0].reset();
  });
  //Sends like button and adds it to the new conversation
  $(".newLikeButton").click(function(event) {
    event.preventDefault();
    var newMessage = $(".newLikeButton").val();
    var person = $("select").val();
    conversations.addMessage(person, newMessage);

    $(".chatWindow").hide();
    $(".chat").show();
    clearChat();
    var conversation = conversations.getConversationWith(person);
    showChat(conversation);
    changeName(person);

  });

  registerClickConversation();

  //Sends message and adds it to the conversation 
  $(".chatForm").submit(function(event) {
    event.preventDefault();
    var newMessage = $(".chatForm .bottom input").val();
    var person = $(".chat").find(".topBar .name").text();
    var minLength = 1;

    if (newMessage.length < minLength) {
      alert("Your message must have at least " + minLength + " character");
      return;
    }
    clearChat();
    conversations.addMessage(person, newMessage);
    var conversation = conversations.getConversationWith(person);
    showChat(conversation);

    $(".chatForm")[0].reset();
    
  });

  //Sends like button and adds it to the existing conversation
  $(".likeButton").click(function(event) {
    event.preventDefault();
    clearChat();
    var newMessage = "";
    var person = $(".chat").find(".topBar .name").text();
    conversations.addMessage(person, newMessage);
    var conversation = conversations.getConversationWith(person);
    showChat(conversation);
  });


  //Search conversation be phrase and shows the result
  $("#searchForm").submit(function(event) {
    event.preventDefault();
    var input = $("#searchForm input").val();
    var result = conversations.searchConversations(input);
    clearConversations();
    showConversations(result);
    registerClickConversation();
  });

})();
