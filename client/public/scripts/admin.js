main_btn.onclick = function(){
    main_form.style.display = "block";
    login_form.style.display = "none";
    about_form.style.display = "none";
    main_btn.style.borderBottomColor = '#ffc222';
    login_btn.style.borderBottomColor = 'transparent';
    about_btn.style.borderBottomColor = 'transparent';
}
login_btn.onclick = function(){
    main_form.style.display = "none";
    login_form.style.display = "block";
    about_form.style.display = "none";
    main_btn.style.borderBottomColor = 'transparent';
    login_btn.style.borderBottomColor = '#ffc222';
    about_btn.style.borderBottomColor = 'transparent';
}
about_btn.onclick = function(){
    main_form.style.display = "none";
    login_form.style.display = "none";
    about_form.style.display = "block";
    main_btn.style.borderBottomColor = 'transparent';
    login_btn.style.borderBottomColor = 'transparent';
    about_btn.style.borderBottomColor = '#ffc222';
}


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