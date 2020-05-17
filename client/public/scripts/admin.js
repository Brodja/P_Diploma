next_1.onclick = function () {
    document.getElementById("register_step_1").style.display = "none";
    document.getElementById("register_step_2").style.display = "block";
};
next_2.onclick = function () {
    document.getElementById("register_step_2").style.display = "none";
    document.getElementById("register_step_3").style.display = "block";

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
};
back_1.onclick = function () {
    document.getElementById("register_step_1").style.display = "block";
    document.getElementById("register_step_2").style.display = "none";
};
back_2.onclick = function () {
    document.getElementById("register_step_2").style.display = "block";
    document.getElementById("register_step_3").style.display = "none";
};

reg_btn.onclick = function () {
    document.getElementById("reg").style.display = "block";
    document.getElementById("login_form").style.display = "none";
};
log_btn.onclick = function () {
    document.getElementById("reg").style.display = "none";
    document.getElementById("login_form").style.display = "block";
};
log_btn_2.onclick = function () {
    document.getElementById("reg").style.display = "none";
    document.getElementById("login_form").style.display = "block";
};
log_btn_3.onclick = function () {
    document.getElementById("reg").style.display = "none";
    document.getElementById("login_form").style.display = "block";
};


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

$("form").on("submit", e => {
    e.preventDefault();
    let value = $(e.target).attr("class");
    let selector = "." + value;
    $.ajax({
        url: "/" + value,
        type: "POST",
        data: {
            username: $(selector + " [name=username]").val(),
            password: $(selector + " [name=password]").val()
        },
        beforeSend: () => {
            $(selector + " input").prop("disabled", true);
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