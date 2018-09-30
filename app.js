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
    for (i=0; i < employeeList.length; i++) {
        $('#firstName').text(employeeList[i].firstName);
        $('#lastName').text(employeeList[i].lastName);
        $('#officeNum').text(employeeList[i].officeNum);
        $('#phoneNum').text(employeeList[i].phoneNum);
    }
}