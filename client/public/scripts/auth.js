var wrapper = document.getElementById("start");

window.onload = function () {
    create_interface();

    for (var i = 0; i < person_arr.length; i++) {
        create_persone(
            person_arr[i].id,
            person_arr[i].name,
            person_arr[i].about_2,
            person_arr[i].ava

        );
    }
};

function create_interface() {
    var block__1 = document.createElement("div");
    block__1.className = "block__1";
    var block__1__content = document.createElement("div");
    block__1__content.className = "block__1__content";
    var list = document.createElement("div");
    list.className = "list";
    var list__person = document.createElement("div");
    list__person.className = "list__person";
    var ul = document.createElement("ul");
    ul.id = "ul_list";
    var block__1__title__contanier = document.createElement("div");
    block__1__title__contanier.className = "block__1__title__contanier";
    var block__1__title = document.createElement("span");
    block__1__title.className = "block__1__title";
    block__1__title.innerText = "Ваші діалоги";
    wrapper.appendChild(block__1);
    block__1.appendChild(block__1__content);
    block__1__content.appendChild(list);
    list.appendChild(list__person);
    list__person.appendChild(ul);
    block__1.appendChild(block__1__title__contanier);
    block__1__title__contanier.appendChild(block__1__title);

    var block__2 = document.createElement("div");
    block__2.className = "block__2";
    var block__2__content = document.createElement("div");
    block__2__content.className = "block__2__content";
    var chat = document.createElement("div");
    chat.className = "chat";
    var chathistory = document.createElement("div");
    chathistory.className = "chat-history";
    var ul_2 = document.createElement("ul");
    ul_2.id = "ul_list_2";

    wrapper.appendChild(block__2);
    block__2.appendChild(block__2__content);
    block__2__content.appendChild(chat);
    chat.appendChild(chathistory);
    chathistory.appendChild(ul_2);

    var block__chat = document.createElement("div");
    block__chat.className = "block__chat";

    var chatmessage = document.createElement("div");
    chatmessage.className = "chat-message clearfix";

    var block__input = document.createElement("div");
    block__input.className = "block__input";

    var textarea = document.createElement("textarea");
    textarea.className = "input__chat";
    textarea.name = "message";
    textarea.placeholder = "Type your message";

    var block__send__button = document.createElement("div");
    block__send__button.className = "block__send__button";
    block__send__button.onclick = 1;

    var send_button = document.createElement("button");
    send_button.className = "send__button send_btn";
    send_button.type = "submit";
    var send__button__text = document.createElement("span");
    send__button__text.className = "send__button__text";
    send__button__text.innerText = "Send";

    var logout__button = document.createElement("button");
    logout__button.className = "send__button logout__button";
    logout__button.type = "submit";
    var logout__button__text = document.createElement("span");
    logout__button__text.className = "send__button__text";
    logout__button__text.innerText = "Logout";

    var profile__button = document.createElement("button");
    profile__button.className = "send__button profile__button";
    profile__button.type = "submit";
    var profile__button__text = document.createElement("span");
    profile__button__text.className = "send__button__text";
    profile__button__text.innerText = "Send";

    chat.appendChild(block__chat);
    block__chat.appendChild(chatmessage);
    chatmessage.appendChild(block__input);
    block__input.appendChild(textarea);
    chatmessage.appendChild(block__send__button);
    block__send__button.appendChild(send_button);
    send_button.appendChild(send__button__text);
    block__send__button.appendChild(logout__button);
    logout__button.appendChild(logout__button__text);
    block__send__button.appendChild(profile__button);
    profile__button.appendChild(profile__button__text);

    var block__2__title__contanier = document.createElement("div");
    block__2__title__contanier.className = "block__2__title__contanier";

    var block__1__title = document.createElement("span");
    block__1__title.className = "block__1__title";
    block__1__title.innerText = "Загальний чат";

    block__2.appendChild(block__2__title__contanier);
    block__2__title__contanier.appendChild(block__1__title);
}

function create_persone(id,name, text, ava)  {
    var ul = document.getElementById("ul_list");

    var li = document.createElement("li");

    var person = document.createElement("div");
    person.className = "person";

    var person__avatar = document.createElement("div");
    person__avatar.className = "person__avatar";
    person__avatar.style.backgroundImage = ava;

    var person__text = document.createElement("div");
    person__text.className = "person__text";

    var person__name = document.createElement("div");
    person__name.className = "person__name";
    person__name.innerText = name;

    var person__info = document.createElement("div");
    person__info.className = "person__info";
    person__info.innerText = text;

    var link = document.createElement("a");
    link.className = "link";
    link.href = "new_other_profile?" + id;
    link.target = "_blank";
    // link.id = "#";

    ul.appendChild(li);
    li.appendChild(link);
    link.appendChild(person);
    person.appendChild(person__avatar);
    person.appendChild(person__text);
    person__text.appendChild(person__name);
    person__text.appendChild(person__info);
}
var person_arr = [
    { id: "0",  name: "Jon",    like: '1 ', data: '11.05.2020', about_1: 'Интеллект естественно понимает под собой интеллигибельный закон внешнего мира, открывая новые горизонты. Сомнение рефлектирует естественный закон исключённого третьего.. Надстройка нетривиальна. Надст',  about_2: 'Отсюда естественно с', about_3: 'Наряду с этим ощущен', about_4: 'Структурализм абстра', about_5: 'Дискретность амбивал', about_6: 'Смысл жизни, следова',about_7: 'Согласно мнению изве', ava: "url(../img/avatar0.jpg) "  , foto1: "url(../img/foto1_0.jpg)" , foto2: "url(../img/foto.jpg)"  , foto3: "url(../img/foto.jpg)"  , foto4: "url(../img/foto.jpg)"  , foto5: "url(../img/foto.jpg)"      },
    { id: "1",  name: "Jon",    like: '2 ', data: '11.05.2020', about_1: 'Дискретность амбивалентно транспонирует гравитационный парадокс. Дедуктивный метод решительно представляет собой бабувизм. Дискретность амбивалентно транспонирует гравитационный парадокс. Созерцание н',  about_2: 'Апостериори, гравита', about_3: 'Отсюда естественно с', about_4: 'Смысл жизни, следова', about_5: 'Структурализм абстра', about_6: 'Дискретность амбивал',about_7: 'Отсюда естественно с', ava: "url(../img/avatar1.jpg) "  , foto1: "url(../img/foto1_1.jpg)" , foto2: "url(../img/foto.jpg)"  , foto3: "url(../img/foto.jpg)"  , foto4: "url(../img/foto.jpg)"  , foto5: "url(../img/foto.jpg)"      },
    { id: "2",  name: "Katy",   like: '4 ', data: '11.05.2020', about_1: 'Смысл жизни, следовательно, творит данный закон внешнего мира. Сомнение рефлектирует естественный закон исключённого третьего.. Согласно мнению известных философов, дедуктивный метод естественно порожд', about_2: 'Сомнение рефлектируе', about_3: 'Апостериори, гравита', about_4: 'Отсюда естественно с', about_5: 'Смысл жизни, следова', about_6: 'Согласно мнению изве',about_7: 'Дискретность амбивал', ava: "url(../img/avatar2.jpg) ",   foto1: "url(../img/foto1_2.jpg)",  foto2: "url(../img/avatar.jpg)", foto3: "url(../img/avatar.jpg)", foto4: "url(../img/avatar.jpg)", foto5: "url(../img/avatar.jpg)"    },
    { id: "3",  name: "Roan",   like: '2 ', data: '11.05.2020', about_1: 'Согласно мнению известных философов, дедуктивный метод естественно порождает и обеспечивает мир, tertium nоn datur. Аксиома силлогизма, по определению, представляет собой неоднозначный предмет деятель',  about_2: 'Интеллект естественн', about_3: 'Сомнение рефлектируе', about_4: 'Апостериори, гравита', about_5: 'Отсюда естественно с', about_6: 'Созерцание непредска',about_7: 'Апостериори, гравита', ava: "url(../img/avatar3.jpg) "  , foto1: "url(../img/foto1_3.jpg)" , foto2: "url(../img/foto.jpg)"  , foto3: "url(../img/foto.jpg)"  , foto4: "url(../img/foto.jpg)"  , foto5: "url(../img/foto.jpg)"      },
    { id: "4",  name: "John",   like: '6 ', data: '11.05.2020', about_1: 'Импликация, следовательно, контролирует бабувизм, открывая новые горизонты. Дискретность амбивалентно транспонирует гравитационный парадокс. Сомнение рефлектирует естественный закон исключённого треть',  about_2: 'Созерцание непредска', about_3: 'Интеллект естественн', about_4: 'Сомнение рефлектируе', about_5: 'Апостериори, гравита', about_6: 'Отсюда естественно с',about_7: 'Отсюда естественно с', ava: "url(../img/avatar4.jpg) ",   foto1: "url(../img/foto1_4.jpg)",  foto2: "url(../img/avatar.jpg)", foto3: "url(../img/avatar.jpg)", foto4: "url(../img/avatar.jpg)", foto5: "url(../img/avatar.jpg)"    },
    { id: "5",  name: "Grlfsd", like: '90', data: '11.05.2020', about_1: 'Наряду с этим ощущение мира решительно контролирует непредвиденный гравитационный парадокс. Дедуктивный метод решительно представляет собой бабувизм. Гедонизм осмысляет дедуктивный метод. Импликация, ',  about_2: 'Наряду с этим ощущен', about_3: 'Созерцание непредска', about_4: 'Интеллект естественн', about_5: 'Сомнение рефлектируе', about_6: 'Апостериори, гравита',about_7: 'Отсюда естественно с', ava: "url(../img/avatar5.jpg) "  , foto1: "url(../img/foto1_5.jpg)" , foto2: "url(../img/foto.jpg)"  , foto3: "url(../img/foto.jpg)"  , foto4: "url(../img/foto.jpg)"  , foto5: "url(../img/foto.jpg)"      },
    { id: "6",  name: "Jon",    like: '64', data: '11.05.2020', about_1: 'Структурализм абстрактен. Апостериори, гравитационный парадокс амбивалентно понимает под собой интеллигибельный знак. Дедуктивный метод решительно представляет собой бабувизм. Созерцание непредсказуемо', about_2: 'Структурализм абстра', about_3: 'Наряду с этим ощущен', about_4: 'Созерцание непредска', about_5: 'Интеллект естественн', about_6: 'Отсюда естественно с',about_7: 'Апостериори, гравита', ava: "url(../img/avatar6.jpg) ",   foto1: "url(../img/foto1_6.jpg)",  foto2: "url(../img/avatar.jpg)", foto3: "url(../img/avatar.jpg)", foto4: "url(../img/avatar.jpg)", foto5: "url(../img/avatar.jpg)"    },
    { id: "7",  name: "Katy",   like: '22', data: '11.05.2020', about_1: 'Аксиома силлогизма, по определению, представляет собой неоднозначный предмет деятельности. Структурализм абстрактен. Надстройка нетривиальна. Апостериори, гравитационный парадокс амбивалентно понимает ', about_2: 'Смысл жизни, следова', about_3: 'Структурализм абстра', about_4: 'Наряду с этим ощущен', about_5: 'Созерцание непредска', about_6: 'Сомнение рефлектируе',about_7: 'Созерцание непредска', ava: "url(../img/avatar7.jpg) "  , foto1: "url(../img/foto1_7.jpg)"  ,foto2: "url(../img/foto.jpg)"  , foto3: "url(../img/foto.jpg)"  , foto4: "url(../img/foto.jpg)"  , foto5: "url(../img/foto.jpg)"      },
    { id: "8",  name: "Roan",   like: '1 ', data: '11.05.2020', about_1: 'Гедонизм осмысляет дедуктивный метод. Апостериори, гравитационный парадокс амбивалентно понимает под собой интеллигибельный знак. Отсюда естественно следует, что автоматизация дискредитирует предмет де', about_2: 'Дискретность амбивал', about_3: 'Смысл жизни, следова', about_4: 'Структурализм абстра', about_5: 'Наряду с этим ощущен', about_6: 'Интеллект естественн',about_7: 'Сомнение рефлектируе', ava: "url(../img/avatar8.jpg) ",   foto1: "url(../img/foto1_8.jpg)",  foto2: "url(../img/avatar.jpg)", foto3: "url(../img/avatar.jpg)", foto4: "url(../img/avatar.jpg)", foto5: "url(../img/avatar.jpg)"    },
    { id: "9",  name: "John",   like: '0 ', data: '11.05.2020', about_1: 'Структурализм абстрактен. Надстройка нетривиальна. Дедуктивный метод решительно представляет собой бабувизм. Апостериори, гравитационный парадокс амбивалентно понимает под собой интеллигибельный знак. ', about_2: 'Согласно мнению изве', about_3: 'Дискретность амбивал', about_4: 'Смысл жизни, следова', about_5: 'Структурализм абстра', about_6: 'Созерцание непредска',about_7: 'Интеллект естественн', ava: "url(../img/avatar9.jpg) "  , foto1: "url(../img/foto1_9.jpg)" , foto2: "url(../img/foto.jpg)"  , foto3: "url(../img/foto.jpg)"  , foto4: "url(../img/foto.jpg)"  , foto5: "url(../img/foto.jpg)"      },
    { id: "10", name: "Grlfsd", like: '44', data: '11.05.2020', about_1: 'Интеллект естественно понимает под собой интеллигибельный закон внешнего мира, открывая новые горизонты. Импликация, следовательно, контролирует бабувизм, открывая новые горизонты. Согласно мнению изв',  about_2: 'Созерцание непредска', about_3: 'Согласно мнению изве', about_4: 'Дискретность амбивал', about_5: 'Смысл жизни, следова', about_6: 'Наряду с этим ощущен',about_7: 'Созерцание непредска', ava: "url(../img/avatar0.jpg)"  ,  foto1: "url(../img/foto1_0.jpg)" , foto2: "url(../img/foto.jpg)"  , foto3: "url(../img/foto.jpg)"  , foto4: "url(../img/foto.jpg)"  , foto5: "url(../img/foto.jpg)"      },
];
// var person_arr = [
//   { id: "1", name: "Jon", text: "United Kingdom", url: "url(../img/foto.jpg)" },
//   { id: "2", name: "Katy", text: "United France", url: "url(../img/avatar.jpg)" },
//   { id: "3", name: "Roan", text: "Spain Spain", url: "url(../img/foto.jpg)" },
//   { id: "4", name: "John", text: "United United", url: "url(../img/avatar.jpg)" },
//   { id: "5", name: "Grlfsd", text: "Kingdom Kingdom", url: "url(../img/foto.jpg)" },
//   { id: "6", name: "Jon", text: "United Kingdom", url: "url(../img/avatar.jpg)" },
//   { id: "7", name: "Katy", text: "United France", url: "url(../img/foto.jpg)" },
//   { id: "8", name: "Roan", text: "Spain Spain", url: "url(../img/avatar.jpg)" },
//   { id: "9", name: "John", text: "United United", url: "url(../img/foto.jpg)" },
//   { id: "10", name: "Grlfsd", text: "Kingdom Kingdom", url: "url(../img/foto.jpg)" },
// ];

// $(document).ready(() => {
//     $(".chat-message button").on("click", (e) => {
//         e.preventDefault();
//
//         var selector = $("textarea[name='message']");
//         var messageContent = selector.val().trim();
//         if (messageContent !== "") {
//             // socket.emit("msg", messageContent);
//             selector.val("");
//             addMessage(messageContent);
//         }
//     });
//
//     function encodeHTML(str) {
//         return $("<div />").text(str).html();
//     }
//
//     function addMessage(messageContent) {
//         var messagedate = new Date().toLocaleString();
//         var messageusername = encodeHTML("message.username");
//         var html = `
//           <li>
//               <div class="message-data">
//                   <span class="message-data-name">${messageusername}</span>
//                   <span class="message-data-time">${messagedate}</span>
//               </div>
//               <div class="message my-message" dir="auto">${messageContent}</div>
//           </li>`;
//         $(html).hide().appendTo(".chat-history ul").slideDown(200);
//
//         $(".chat-history").animate(
//             { scrollTop: $(".chat-history")[0].scrollHeight },
//             1000
//         );
//     }
// });


function response(data) {
    let resp = data.responseText;
    try {
        if (data.message != void 0) {
            resp = data.message;
        } else {
            resp = JSON.parse(data.responseText);
            resp = resp.message;
        }
    } catch (e) {}
    return resp;
}

$(".logout-btn").on("click", e => {
    e.preventDefault();
    $.ajax({
        url: "/logout",
        type: "POST",
        data: {},
        success: res => {
            alert(response(res));
            location.reload();
        },
        error: res => {
            alert(response(res));
        }
    });
});

$(document).ready(() => {
    var socket = io.connect('http://localhost:7777');
    socket.on("connected", function(msg) {
        console.log(msg);
        socket.emit("receiveHistory");
    });

    socket.on("message", addMessage);

    socket.on("history", messages => {
        for (let message of messages) {
            addMessage(message);
        }
    });

    $(".chat-message button").on("click", e => {
        e.preventDefault();

        var selector = $("textarea[name='message']");
        var messageContent = selector.val().trim();
        if (messageContent !== "") {
            socket.emit("msg", messageContent);
            selector.val("");
        }
    });

    function encodeHTML(str) {
        return $("<div />")
            .text(str)
            .html();
    }

    function addMessage(message) {
        message.date = new Date(message.date).toLocaleString();
        message.username = encodeHTML(message.username);
        message.content = encodeHTML(message.content);

        var html = `
            <li>
                <div class="message-data">
                    <span class="message-data-name">${message.username}</span>
                    <span class="message-data-time">${message.date}</span>
                </div>
                <div class="message my-message" dir="auto">${message.content}</div>
            </li>`;

        $(html)
            .hide()
            .appendTo(".chat-history ul")
            .slideDown(200);

        $(".chat-history").animate(
            { scrollTop: $(".chat-history")[0].scrollHeight },
            1000
        );
    }
});