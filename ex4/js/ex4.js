window.document.write("これはJavaScriptで書きこみ!<br>");
let mind = window.confirm("真面目に取り組みますか?");
window.document.write(mind);
if(mind===true){
    window.alert("安心です!");
    window.document.write("<br>");
}
else{
    window.alert("社会で心配です!");
    window.document.write("<br>");
}
window.document.write("<br>書きこみを終えました!");