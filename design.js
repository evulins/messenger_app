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
        surname: '',
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
        surname: '',
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
        surname: '',
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
        surname: '',
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
        surname: 'Dawciskowka',
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
  addMessage: function(friend, message) {
    
    // jeśli konwersacja z tym znajomym jeszcze nie istnieje to
    // dodaj nową konwersację i
    // dodaj nową wiadomość do obiektu lastMessage
    //     if (!friend.messages) {
    //       return conversations.list.
    //      } else {

    //      }


    //     // jeśli konwersacja z tym znajomym już istnieje to
    //     // przenieś wiadomość z obiektu lastMessage dla tej konwersacji do listy messages
    //     // zastąp wartości w obiekcie lastMessage dla tej konwersacji nową wiadomością
  },
  getConversationWith: function(full_name) {
    var result = conversations.list.filter(function (element) {
      return element.friend.name + " " + element.friend.surname === full_name;
    });
    return result[0];
  }

};

// na podstawie danych z obiektu conversations
// wyświetla wszystkie elementy na liście
function showConversations() {
  // w pętli dodaj wszystkie konwersacje do listy #messages
  for (var i = 0; i < conversations.getAll().length; i++) {
    var current = conversations.getAll()[i];
    var wrappedDate = moment(new Date(current.lastMessage.sentAt));
    var conversation = `
      <li id="one">
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
  /*
  {
    friend: {
      name: 'Dawid',
      surname: 'Dawcikowski',
      avatar: 'dawid.jpg'
    },
    messages: [
      {
        text: 'Dawcik. Dlaczego śmierdzisz kupą?',
        sentAt: 'Tue Jan 01 2018 08:31:38 GMT+0100 (CET)',
        sentByMe: true,
        seen: false,
        delivered: false
      },
      {
        text: 'bo nie myłem tyłka od środy',
        sentAt: 'Tue Jan 01 2018 08:31:57 GMT+0100 (CET)',
        sentByMe: false,
        seen: false,
        delivered: false
      }
    ],
    lastMessage: {
      text: 'Hejka',
      sentAt: 'Tue Jan 02 2018 21:39:57 GMT+0100 (CET)',
      sentByMe: false,
      seen: false,
      delivered: false
    }
  }

  */
  // dodaj kolejne wiadomości z listy conversation.messages jako dzieci elementu #chatMessages
  // wzoruj się na tym jak dodawane są konwersacje w funkcji showConversations
  // będziesz potrzebowała dwóch zmiennych:
  // * dla kody HTML który będzie wyświetlony dla twojej wiadomości
  // * dla kody HTML który będzie wyświetlony dla wiadomości znajomego
  
  var allMessages = conversation.messages.concat([conversation.lastMessage]);
  allMessages.sort(function(a, b) {
    var dateA = new Date(a.sentAt);
    var dateB = new Date(b.sentAt);
    return dateA - dateB;
  });

  for (var i = 0; i < allMessages.length; i++) {
    var current = allMessages[i];
    var wrappedDate = moment(new Date(current.sentAt));
    var myMessage = `
      <div class="me">
          <ul>
            <p class="date">${wrappedDate.fromNow()}</p>
            <li class="myMessage"><span>${current.text}</span></li>
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
          <li class="reMessage"><span>${current.text}</span></li>
        </ul>
      </div>
    `;

    $(".chatMessages").append(current.sentByMe ? myMessage : reply);
  }
}

function clearChat() {
  $(".chatMessages").empty();
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


$(".top .tools").click(function(event){
 event.preventDefault();
  $(".chatWindow").hide();
  $(".messengerApp").show();
});



// ta funkcja wywoła się od razy po przeczytaniu tego pliku (po każdym odświeżeniu strony)
(function() {
  console.log("DSsdds")
  showConversations();

  $("li").click(function(event) {
    event.preventDefault();
    $(".messengerApp").hide();
    $(".chat").show();
    clearChat();
    var person = $(this).find(".textMessage .name span").text();
    changeName(person);
    var conversation = conversations.getConversationWith(person);
    showChat(conversation);
  // 1. pobierz imię i nazwisko z HTML klikniętego <li> i zapisz to do zmiennej
  // 2. wywołaj funkcję getConversationWith i przekaż jako parametr wcześniej pobrane imię i nazwisko
  //    żeby pobrać obiekt konwersacji z tą osobą i zapisz go do zmiennej
  // 3. wywołaj funkcję showChat i przekaż jako paramert obiekt conversation, który pobrałaś wcześniej
  });
})();
