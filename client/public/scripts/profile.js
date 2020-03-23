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

$("form").on("submit", e => {
    e.preventDefault();
    let value = $(e.target).attr("class");
    let selector = "." + value;
    $.ajax({
        url: "/edit",
        type: "POST",
        data: {
            about1: $(selector + " [name=about1]").val(),
            about2: $(selector + " [name=about2]").val(),
            about3: $(selector + " [name=about3]").val()
        },
        beforeSend: () => {
            $(selector + " button").prop("disabled", true);
        },
        success: res => {
            alert(response(res));
            location.reload();
        },
        error: res => {
            alert(response(res));
        },
        complete: () => {
            $(selector + " button").prop("disabled", false);
        }
    });
});

// Изменение пользователя
function EditUser(userId, userName, userAge) {
    $.ajax({
        url: "edit/users",
        contentType: "application/json",
        method: "PUT",
        data: JSON.stringify({
            about1: $(selector + " [name=about1]").val(),
            about2: $(selector + " [name=about2]").val(),
            about3: $(selector + " [name=about3]").val()
        }),
        success: function (user) {
            reset();
            console.log(user);
            $("tr[data-rowid='" + user._id + "']").replaceWith(row(user));
        }
    })
}
