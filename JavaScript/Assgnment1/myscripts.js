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


var code = [];
var l1 = new set_checkbox("C/C++", false);
var l2 = new set_checkbox("Java", true, );
var l3 = new set_checkbox("C#", true);
var l4 = new set_checkbox("PHP", false);
var l5 = new set_checkbox("Python", false);

code.push(l1);
code.push(l2);
code.push(l3);
code.push(l4);
code.push(l5);


function set_checkbox(name, set) {
    this.Name = name;
    this.IsEnabled = set;
}


var setlist = document.getElementById('checkkbox')
for (i = 0; i < code.length; i++) {
    var checkbox = document.createElement('input');
    var label = document.createElement('label');
    label.htmlFor = i;
    checkbox.type = "checkbox";
    checkbox.value = code[i].Name;
    checkbox.checked = code[i].IsEnabled;
    checkbox.id = i;
    setlist.appendChild(checkbox);
    setlist.appendChild(label);
    label.appendChild(document.createTextNode(code[i].Name));
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

function tick() {
    var list = [];
    if (document.getElementById('0').checked)
        list.push(document.getElementById('0').value);
    if (document.getElementById('1').checked)
        list.push(document.getElementById('1').value);
    if (document.getElementById('2').checked)
        list.push(document.getElementById('2').value);
    if (document.getElementById('3').checked)
        list.push(document.getElementById('3').value);
    if (document.getElementById('4').checked)
        list.push(document.getElementById('4').value);
    return list;
}
