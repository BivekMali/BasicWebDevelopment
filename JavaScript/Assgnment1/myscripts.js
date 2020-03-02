var select = document.getElementById("selectNumber");
var options = ["1", "2", "3", "4", "5+"];
for (var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}

var Enter = document.getElementById("qualify");
var qualification = ["B.tech", "B.CA", "M.tech"];
for (var i = 0; i < qualification.length; i++) {
    var cho = qualification[i];
    var l = document.createElement("option");
    l.textContent = cho;
    l.value = cho;
    Enter.appendChild(l);
}


var coding_language = [];

function code_language(Name, IsEnabled) {
    this.Name = Name;
    this.IsEnabled = IsEnabled;
}
var language1 = new code_language("C/C++", false);
var language2 = new code_language("Java", true ,);
var language3 = new code_language("C#", true);
var language4 = new code_language("PHP", false);
var language5 = new code_language("Python", false);

coding_language.push(language1);
coding_language.push(language2);
coding_language.push(language3);
coding_language.push(language4);
coding_language.push(language5);

var clist = document.getElementById('checkkbox')
for (i = 0; i < coding_language.length; i++) {
    var checkbox = document.createElement('input');
    var label = document.createElement('label');
    label.htmlFor = i;
    checkbox.type = "checkbox";
    checkbox.value = coding_language[i].Name;
    checkbox.checked = coding_language[i].IsEnabled;
    checkbox.id = i;
    clist.appendChild(checkbox);
    clist.appendChild(label);
    label.appendChild(document.createTextNode(coding_language[i].Name));
}

function tick() {
    var list = [];
    if (document.getElementById('0').checked) {
        list.push(document.getElementById('0').value);
    }
    if (document.getElementById('1').checked) {
        list.push(document.getElementById('1').value);
    }
    if (document.getElementById('2').checked) {
        list.push(document.getElementById('2').value);
    }
    if (document.getElementById('3').checked) {
        list.push(document.getElementById('3').value);
    }
    if (document.getElementById('4').checked) {
        list.push(document.getElementById('4').value);
    }
    return list;
}



function pt() {
    event.preventDefault();
    
    var data = {
        frist_name: document.getElementById("fname").value,
        last_name: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        gender: "None",
        qualification: document.getElementById("qualify").value,
        experience: document.getElementById("selectNumber").value,
        language: tick(),

    };
    if (document.getElementById("qualify").value === "-- select an option --") {
        data.qualification = ''
    }
    if (document.getElementById("selectNumber").value === "-- select an option --") {
        data.experience = ''
    }
console.log(data);
}
