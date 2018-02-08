/* Zadanie:
 * Jeśli użytkownik w widoku nowej wiadomości:
 *   * wybierze znajomego
 *   * wpisze tekst
 *   * i wciśnie przycisk enter
 * to:
 *    1. powinny pojawić się wszystkie wcześniejsze wiadomości z tym znajomym
 *    2. na końcu listy powinna pojawić się nowa wiadomość
 *    3. powinien zmienić się label "New message" na "Messages"
 */

var friends = [
  "Dawid Dawcikowski",
  "Ewu Dawcikowska",
  "Stefka",
  "Lola",
  "Buka Bukiszon",
  "Jebułka",
  "Evulins"
];

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
        sentAt: 'Tue Jan 30 2018 21:39:57 GMT+0100 (CET)',
        seen: false,
        delivered: true
      }
    }
  ],
  getAll: function() {
   return conversations.list;
  },



/*{
      friend: {
        name: 'Dawid',
        surname: 'Dawcikowski',
        avatar: 'dawid.jpg'
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
        text: 'Hejka',
        sentAt: 'Tue Feb 04 2018 13:02:21 GMT+0100 (CET)',
        sentByMe: false,
        seen: false,
        delivered: false
      }
    },
    */
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


  getConversationWith: function(full_name) {
    var result = conversations.list.filter(function(element) {
      return element.friend.name + " " + element.friend.surname === full_name;
    });
    return result[0];
  },

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

// na podstawie danych z obiektu conversations
// wyświetla wszystkie elementy na liście
function showConversations(conversationList) {
  // w pętli dodaj wszystkie konwersacje do listy #messages
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
    $("#messagesList").append(conversation);

    $(".topBar #close").click(function(event){
       event.preventDefault();
      $(".chat").hide();
      $(".messengerApp").show();
    });
  }

  
}

function showChat(conversation) {
  
  var allMessages = conversation.messages.concat([conversation.lastMessage]);
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

    var myMessage = `
      <div class="me">
          <ul>
            <p class="date">${wrappedDate.fromNow()}</p>
            <li class="myMessage"><span>${messageContent}</span></li>
          </ul>
        </div>
    `;

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
}

function clearChat() {
  $(".chatMessages").empty();
}

function clearConversations() {
  $("ul#messagesList").empty();
}

function changeName(full_name) {
  $(".chat .topBar a p.name").text(full_name);
}


function getIcon(dupa) {
  if (dupa.delivered && dupa.seen) {
    return '<span class="fa fa-check-circle seen"></span>'
  } else if (dupa.delivered && !dupa.seen) {
    return '<span class="fa fa-circle seen"></span>'
  } else {
    return '<span class="fa fa-circle-o seen"></span>'
  }
}


$(".writeMessage").click(function(event) {
   event.preventDefault();
  $(".messengerApp").hide();
  $(".chatWindow").show();
});


$(".top .tools").click(function(event) {
 event.preventDefault();
 $(".chatWindow").hide();
 $(".messengerApp").show();

});




// ta funkcja wywoła się od razy po przeczytaniu tego pliku (po każdym odświeżeniu strony)
(function() {
  console.log("DSsdds")
  showConversations(conversations.getAll());

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
  
  $(".newForm").submit(function(event) {
    event.preventDefault();
    var newMessage = $(".bottom input").val();
    var person = $("select").val();
     var minLength = 1;

    if (newMessage.length < minLength) {
        alert("Your message must have at least " + minLength + " character");
        return;
      }

    conversations.addMessage(person, newMessage);
    //ukrywam newmessage pokazuje conversation, uzywam funckji showchat
    $(".chatWindow").hide();
    $(".chat").show();
    clearChat();
    var conversation = conversations.getConversationWith(person);
    showChat(conversation);
    changeName(person);
    $(".newForm")[0].reset();
  });

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


  $(".likeButton").click(function(event) {
    event.preventDefault();
    clearChat();
    var newMessage = "";
    var person = $(".chat").find(".topBar .name").text();
    conversations.addMessage(person, newMessage);
    var conversation = conversations.getConversationWith(person);
    showChat(conversation);
  });

  $("#searchForm").submit(function(event) {
    event.preventDefault();
    var input = $("input").val();
    var result = conversations.searchConversations(input);
    clearConversations();
    showConversations(result);
  });

})();
