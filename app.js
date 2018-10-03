const showHome = function () {
    $('#homePage').removeClass('hide');
    $('#viewPage').addClass('hide');
    $('#verifyPage').addClass('hide');
    $('#updatePage').addClass('hide');
    $('#deletePage').addClass('hide');
}
const showView = function () {
    $('#homePage').addClass('hide');
    $('#viewPage').removeClass('hide');
    $('#addPage').addClass('hide');
    $('#verifyPage').addClass('hide');
    $('#updatePage').addClass('hide');
    $('#deletePage').addClass('hide');
}
const showAdd = function () {
    $('#homePage').addClass('hide');
    $('#viewPage').addClass('hide');
    $('#addPage').removeClass('hide');
    $('#verifyPage').addClass('hide');
    $('#updatePage').addClass('hide');
    $('#deletePage').addClass('hide');
}
const showVerify = function () {
    $('#homePage').addClass('hide');
    $('#viewPage').addClass('hide');
    $('#addPage').addClass('hide');
    $('#verifyPage').removeClass('hide');
    $('#updatePage').addClass('hide');
    $('#deletePage').addClass('hide');
}
const showUpdate = function () {
    $('#homePage').addClass('hide');
    $('#viewPage').addClass('hide');
    $('#addPage').addClass('hide');
    $('#verifyPage').addClass('hide');
    $('#updatePage').removeClass('hide');
    $('#deletePage').addClass('hide');
}
const showDelete = function () {
    $('#homePage').addClass('hide');
    $('#viewPage').addClass('hide');
    $('#addPage').addClass('hide');
    $('#verifyPage').addClass('hide');
    $('#updatePage').addClass('hide');
    $('#deletePage').removeClass('hide');
}
$('#home').on('click', showHome);
$('#view').on('click', showView);
$('#add').on('click', showAdd);
$('#verify').on('click', showVerify);
$('#update').on('click', showUpdate);
$('#delete').on('click', showDelete);

// VIEW PAGE
const viewPageFunction = function () {
    $('.viewPageContent').empty()
    for (i = 0; i < employeeList.length; i++) {
        let info = (`<div class="viewPageContent"><p>${employeeList[i].firstName}</p><p>${employeeList[i].lastName}</p>
        <p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</p></div>`);
        $('.viewPageContent').append(info)
    };
    $('.addPageContent').empty()
    for (i = 0; i < employeeList.length; i++) {
        let info = (`<div class="viewPageContent"><p>${employeeList[i].firstName}</p><p>${employeeList[i].lastName}</p>
        <p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</p></div>`);
        $('.addPageContent').append(info)
    };
    $('.updatePageContent').empty()
    for (i = 0; i < employeeList.length; i++) {
        let info = (`<div class="viewPageContent"><p>${employeeList[i].firstName}</p><p>${employeeList[i].lastName}</p>
        <p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</p></div>`);
        $('.updatePageContent').append(info)
    };
    $('.deletePageContent').empty()
    for (i = 0; i < employeeList.length; i++) {
        let info = (`<div class="viewPageContent"><p>${employeeList[i].firstName}</p><p>${employeeList[i].lastName}</p>
        <p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</p></div>`);
        $('.deletePageContent').append(info)
    };
}
$('#view').on('click', viewPageFunction);

//ADD PAGE
const addPageFunction = function () {
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let officeNum = $('#officeNumInput').val();
    let phoneNum = $('#phoneNumInput').val();

    let newInfo = {
        firstName: firstName,
        lastName: lastName,
        officeNum: officeNum,
        phoneNum: phoneNum,
    }

    employeeList.push(newInfo);

    $('.addPageContent').empty()
    for (i = 0; i < employeeList.length; i++) {
        let info = (`<div class="viewPageContent"><p>${employeeList[i].firstName}</p><p>${employeeList[i].lastName}</p>
        <p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</p></div>`);
        $('.addPageContent').append(info)
    };
    $('.addPageAlert').text("name has been added yo 😎");

    $('#submitAdd').on('click', addPageFunction);
};
$('#add').on('click', viewPageFunction)

//VERIFY PAGE
const verifyPageFunction = function () {
    let verifyFirstName = $('#firstNameInputVerify').val();
    let verifyLastName = $('#lastNameInputVerify').val();

    let result1 = false;
    let result2 = false;
    let result3 = false;

    for (i = 0; i < employeeList.length; i++) {
        if (employeeList[i].firstName === verifyFirstName) {
            result1 = true;
        }
        else if (employeeList[i].lastName === verifyLastName) {
            result2 = true;
        }
        else {
            result3 = false;
        }
        if (result1 || result2 || result3 === true) {
            $('.verifyPageContent').text("Yup - all's good in the hood 😎");
        }
        else {
            $('.verifyPageContent').text("Nope - might want to check capitalization 🤔");
        }
    }
}
$('#submitVerify').on('click', verifyPageFunction);

//UPDATE PAGE
const updatePageFunction = function () {
    let firstNameUpdate = $('#firstNameUpdate').val();
    console.log(firstNameUpdate)
    let lastNameUpdate = $('#lastNameUpdate').val();
    console.log(lastNameUpdate)
    let officeNumUpdate = $('#officeNumUpdate').val();
    console.log(officeNumUpdate)
    let phoneNumUpdate = $('#phoneNumUpdate').val();
    console.log(phoneNumUpdate)

    for (i = 0; i < employeeList.length; i++) {
        if (firstNameUpdate === employeeList[i].firstName || lastNameUpdate === employeeList[i].lastName) {
            employeeList[i].officeNum = officeNumUpdate;
            employeeList[i].phoneNum = phoneNumUpdate;
            $('.updatePageAlert').text("Updated - part of the fam now 😎");
            console.log(i);
            console.log(employeeList[i].officeNum);
            console.log(employeeList[i].phoneNum);
            return
        }
        else {
            $('.updatePageAlert').text("Not updated - we do not know you 🙄");
        };
    }
}
$('#submitUpdate').on('click', updatePageFunction);
$('#submitUpdate').on('click', viewPageFunction);
$('#update').on('click', viewPageFunction)

//DELETE PAGE
const deletePageFunction = function () {
    let firstNameDelete = $('#firstNameDelete').val();
    let lastNameDelete = $('#lastNameDelete').val();

    for (i = 0; i < employeeList.length; i++) {
        if (firstNameDelete === employeeList[i].firstName || lastNameDelete === employeeList[i].lastName) {
            employeeList.splice(i, 1);
        }
    }
    $('.deletePageContent').empty()
    for (i = 0; i < employeeList.length; i++) {
        let info = (`<div class="viewPageContent"><p>${employeeList[i].firstName}</p><p>${employeeList[i].lastName}</p>
        <p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</p></div>`);
        $('.deletePageContent').append(info)
    };
    $('.deletePageAlert').text("the person's gone for good 😭");
};
$('#submitDelete').on('click', deletePageFunction);

$('#delete').on('click', viewPageFunction)