var studentName = ['Apple', 'Banana', 'Orange'];

var studentID = [100, 200, 300]

function showNames(nameList){
    var listElement = document.getElementById('list');
    var elementStr = "<ul>";
    for (var i of nameList){
        elementStr += "<li>" + i +"</li>";
    }
    elementStr += "</ul>";
    listElement.innerHTML = elementStr;
}

document.getElementById('showList').onclick = ()=>{showNames(studentName)};

document.getElementById('showID').onclick = ()=>{showNames(studentID)};
