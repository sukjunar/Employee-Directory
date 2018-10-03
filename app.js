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
}
$('#view').on('click', viewPageFunction);

//ADD PAGE
const addPageFunction = function () {
    firstName =  $("#firstNameInput").val()
    lastName = $("#lastNameInput").val()
    officeNumber = $("#officeNumInput").val()
    phoneNumber = $("#phoneNumInput").val()

    newInfo = {
        firstName: firstName, 
        lastName: lastName, 
        officeNum: officeNumber,
        phoneNum: phoneNumber
    }
}

$('#add').on('click', addPageFunction)

console.log(newInfo);
