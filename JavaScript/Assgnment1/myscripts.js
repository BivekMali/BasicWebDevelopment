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

document.getElementById("myCheck").disabled = true;

document.getElementById("myChec").disabled = true;


function pt() {
  event.preventDefault();
    var data={
        frist_name: document.getElementById("fname").value,
        last_name: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        gender: "None",
        qualification: document.getElementById("qualify").value,
        experience: document.getElementById("selectNumber").value,
        language: "C# and Java",
        
    };
    
        if (document.getElementById('male').checked) {
            data.gender= "male"
        }
        if (document.getElementById('female').checked) {
            data.gender= "female"
        }
        if (document.getElementById('1').checked) {
            data.language= "C/C++ " + data.language
        }if (document.getElementById('2').checked) {
            data.language= "PHP " + data.language
        }if (document.getElementById('3').checked) {
            data.language= "Python " + data.language
        }
  console.log(data);  
}

