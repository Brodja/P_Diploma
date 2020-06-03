login.onclick = function () {
    let login = document.getElementById("login_login_field");
    let pass = document.getElementById("login_pass_field");
    if (login.value == "") {
        document.getElementById("err_login2_1").style.display = "block";
        return false;
    } else if (pass.value == "") {
        document.getElementById("err_login2_1").style.display = "none";
        document.getElementById("err_login2_2").style.display = "block";
    } else {
        document.getElementById("err_login2_2").style.display = "none";
        document.location='chat'
    }
};
function check_1() {
    let login = document.getElementById("login_login_field");
    let pass = document.getElementById("login_pass_field");
    if (login.value == "") {
        document.getElementById("err_login2_1").style.display = "block";
        return false;
    } else if (pass.value == "") {
        document.getElementById("err_login2_1").style.display = "none";
        document.getElementById("err_login2_2").style.display = "block";
    } else {
        document.getElementById("err_login2_2").style.display = "none";
    }
}
next_1.onclick = function () {
    let login = document.getElementById("register_login_field");
    let pass_1 = document.getElementById("register_pass_field");
    let pass_2 = document.getElementById("register_pass2_field");
    if (login.value == "") {
        document.getElementById("err_login_1").style.display = "block";
        return false;
    } else if (login.value.length < 5) {
        document.getElementById("err_login_1").style.display = "none";
        document.getElementById("err_login_2").style.display = "block";
        return false;
    } else if (pass_1.value == "") {
        document.getElementById("err_login_3").style.display = "block";
        document.getElementById("err_login_2").style.display = "none";
        document.getElementById("err_pass1_1").style.display = "block";
        return false;
    } else if (pass_1.value.length < 4) {
        document.getElementById("err_pass1_1").style.display = "none";
        document.getElementById("err_pass1_2").style.display = "block";
        return false;
    } else if (pass_1.value != pass_2.value) {
        document.getElementById("err_pass1_2").style.display = "none";
        document.getElementById("err_pass2_1").style.display = "block";
        return false;
    } else {
        document.getElementById("err_pass2_1").style.display = "none";
    }
    document.getElementById("register_step_1").style.display = "none";
    document.getElementById("register_step_2").style.display = "block";
};
function check_2() {
    let login = document.getElementById("register_login_field");
    let pass_1 = document.getElementById("register_pass_field");
    let pass_2 = document.getElementById("register_pass2_field");
    if (login.value == "") {
        document.getElementById("err_login_1").style.display = "block";
        document.getElementById("err_login_2").style.display = "none";
        document.getElementById("err_login_3").style.display = "none";
        document.getElementById("green_div_1").style.display = "none";
        document.getElementById("green_div_2").style.display = "none";
        document.getElementById("green_div_3").style.display = "none";
        document.getElementById("err_pass1_1").style.display = "none";
        document.getElementById("err_pass1_2").style.display = "none";
        document.getElementById("err_pass2_1").style.display = "none";
        document.getElementById("err_pass2_2").style.display = "none";
    } else if (login.value.length < 5) {
        document.getElementById("err_login_1").style.display = "none";
        document.getElementById("err_login_3").style.display = "none";
        document.getElementById("green_div_1").style.display = "none";
        document.getElementById("green_div_2").style.display = "none";
        document.getElementById("green_div_3").style.display = "none";
        document.getElementById("err_pass1_1").style.display = "none";
        document.getElementById("err_pass1_2").style.display = "none";
        document.getElementById("err_pass2_1").style.display = "none";
        document.getElementById("err_pass2_2").style.display = "none";
        document.getElementById("err_login_2").style.display = "block";
    } else if (pass_1.value == "") {
        document.getElementById("err_login_1").style.display = "none";
        document.getElementById("err_login_2").style.display = "none";
        document.getElementById("err_login_3").style.display = "block";
        document.getElementById("green_div_1").style.display = "block";
        document.getElementById("green_div_2").style.display = "none";
        document.getElementById("green_div_3").style.display = "none";
        document.getElementById("err_pass1_1").style.display = "block";
        document.getElementById("err_pass1_2").style.display = "none";
        document.getElementById("err_pass2_1").style.display = "none";
        document.getElementById("err_pass2_2").style.display = "none";
    } else if (pass_1.value.length < 4) {
        document.getElementById("err_login_1").style.display = "none";
        document.getElementById("err_login_2").style.display = "none";
        document.getElementById("err_login_3").style.display = "block";
        document.getElementById("green_div_1").style.display = "block";
        document.getElementById("green_div_2").style.display = "none";
        document.getElementById("green_div_3").style.display = "none";
        document.getElementById("err_pass1_1").style.display = "none";
        document.getElementById("err_pass1_2").style.display = "block";
        document.getElementById("err_pass2_1").style.display = "none";
        document.getElementById("err_pass2_2").style.display = "none";
    } else if (pass_1.value != pass_2.value && pass_2.value != pass_1.value) {
        document.getElementById("err_login_1").style.display = "none";
        document.getElementById("err_login_2").style.display = "none";
        document.getElementById("err_login_3").style.display = "block";
        document.getElementById("green_div_1").style.display = "block";
        document.getElementById("green_div_2").style.display = "block";
        document.getElementById("green_div_3").style.display = "none";
        document.getElementById("err_pass1_1").style.display = "none";
        document.getElementById("err_pass1_2").style.display = "none";
        document.getElementById("err_pass2_1").style.display = "block";
        document.getElementById("err_pass2_2").style.display = "none";
        return false;
    } else if (pass_1.value == pass_2.value && pass_2.value == pass_1.value) {
        document.getElementById("err_login_1").style.display = "none";
        document.getElementById("err_login_2").style.display = "none";
        document.getElementById("err_login_3").style.display = "block";
        document.getElementById("green_div_1").style.display = "block";
        document.getElementById("green_div_2").style.display = "block";
        document.getElementById("green_div_3").style.display = "block";
        document.getElementById("err_pass1_1").style.display = "none";
        document.getElementById("err_pass1_2").style.display = "none";
        document.getElementById("err_pass2_1").style.display = "none";
        document.getElementById("err_pass2_2").style.display = "block";
    } else {
        document.getElementById("green_div_1").style.display = "block";
        document.getElementById("err_login_3").style.display = "block";
        document.getElementById("green_div_2").style.display = "block";
        document.getElementById("green_div_3").style.display = "block";
        document.getElementById("err_pass2_2").style.display = "block";
        document.getElementById("err_pass2_1").style.display = "none";
    }
}
next_2.onclick = function () {
    // сейв фото
    var a = document.getElementById("foto").value;
    var ed = "C:\\fakepath\\";
    var b = a.replace(ed, "");
    const c = "http://127.0.0.1:5500/images/" + b;

    console.log(c);
    // document.getElementById("ava").src = c;
    // конец
    document.getElementById("register_step_2").style.display = "none";
    document.getElementById("register_step_3").style.display = "block";

    document.getElementById("about_me").innerText = document.getElementById(
        "about_me_edit"
    ).value;
    document.getElementById("about_school").innerText = document.getElementById(
        "about_school_edit"
    ).value;
    document.getElementById("about_work").innerText = document.getElementById("about_work_edit").value;
    document.getElementById("about_hobby").innerText = document.getElementById("about_hobby_edit").value;
    document.getElementById("about_education").innerText = document.getElementById("about_education_edit").value;
    document.getElementById("about_like").innerText = document.getElementById("about_like_edit").value;
    document.getElementById("about_age").innerText = document.getElementById("about_age_edit").value;
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