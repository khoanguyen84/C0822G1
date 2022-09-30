class Contact {
    constructor(name, mobile, email) {
        this.name = name;
        this.mobile = mobile;
        this.email = email;
    }
}

var contacts = [
    new Contact("Nguyên", "0935123123", "nguyen@gmail.com"),
    new Contact("Nghĩa", "0935111222", "nghia@gmail.com"),
    new Contact("Hiếu", "0935686868", "hieu@gmail.com"),
    new Contact("Thiện", "0935353535", "thien@gmail.com"),
]

function renderContact() {
    let htmls = "";
    for (let i = 0; i < contacts.length; i++) {
        htmls += `
            <tr id="tr_${i}" class='${(i + 1) % 3 == 0 ? 'bg-danger' : ''}'>
                <td class='text-center'>${i + 1}</td>
                <td>${contacts[i].name}</td>
                <td class='text-right'>${contacts[i].mobile}</td>
                ${ contacts[i].name != "Hiếu" ? '<td>'+contacts[i].email+'</td>': ''}
            </tr>
        `
    }
    document.getElementById('tbContact').innerHTML = htmls;
}

function save() {
    // 1. lấy dữ liệu từ các inputs
    let name = document.getElementById('name').value;
    let mobile = document.getElementById('mobile').value;
    let email = document.getElementById('email').value;
    if (name == "" || email == "" || mobile == "") {
        alert("These fields are required.");
        return;
    }
    // 2. tạo ra 1 đối tượng contact
    let newContact = new Contact(name, mobile, email);
    // 3. bổ sung cái đối tượng này vào mảng contacts
    contacts.push(newContact);
    // 4. renderContact()
    renderContact()
    // 5. reset form
    clearForm();
}

function clearForm() {
    document.getElementById('name').value = "";
    document.getElementById('mobile').value = "";
    document.getElementById('email').value = "";
}

renderContact()