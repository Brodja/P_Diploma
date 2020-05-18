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
var currentEdit = 2;

edit_1.onclick = function () {
    if (currentEdit % 2 == 0) {
        document.getElementById("edit__contanier").style.display = "none";
        document.getElementById("edit__contanier__2").style.display = "block";
        document.getElementById("about_age_edit").value = document.getElementById(
            "about_age"
        ).innerText;
        document.getElementById("about_me_edit").value = document.getElementById(
            "about_me"
        ).innerText;
        document.getElementById(
            "about_school_edit"
        ).value = document.getElementById("about_school").innerText;
        document.getElementById("about_work_edit").value = document.getElementById(
            "about_work"
        ).innerText;
        document.getElementById("about_hobby_edit").value = document.getElementById(
            "about_hobby"
        ).innerText;
        document.getElementById(
            "about_education_edit"
        ).value = document.getElementById("about_education").innerText;
        document.getElementById("about_like_edit").value = document.getElementById(
            "about_like"
        ).innerText;
        document.getElementById("edit_1").innerText = "Зберегти";
    } else {
        document.getElementById("about_me").innerText = document.getElementById(
            "about_me_edit"
        ).value;
        document.getElementById("about_school").innerText = document.getElementById(
            "about_school_edit"
        ).value;
        document.getElementById("about_work").innerText = document.getElementById(
            "about_work_edit"
        ).value;
        document.getElementById("about_hobby").innerText = document.getElementById(
            "about_hobby_edit"
        ).value;
        document.getElementById(
            "about_education"
        ).innerText = document.getElementById("about_education_edit").value;
        document.getElementById("about_like").innerText = document.getElementById(
            "about_like_edit"
        ).value;
        document.getElementById("about_age").innerText = document.getElementById(
            "about_age_edit"
        ).value;
        document.getElementById("edit__contanier__2").style.display = "none";
        document.getElementById("edit__contanier").style.display = "block";
        document.getElementById("edit_1").innerText = "Редагувати";
    }
    currentEdit++;
};

const btn = document.querySelector('.button__like');

let like = true,
    likeCount = document.querySelector('.button__like__2').innerHTML;

btn.addEventListener('click', () => {
    likeCount = like ? ++likeCount : --likeCount;
    like = !like;
    document.querySelector('.button__like__2').innerHTML = likeCount;
});
