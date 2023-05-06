// Age in Days


function ageInDays(){
    
    var h3 = document.createElement('h3');

    var birthdayYear= prompt(" What is your BirthdayYear...Good Friend? ");
    var currentYear = new Date().getFullYear();
    var result=(currentYear-birthdayYear)*365;
    var textAnswer=document.createTextNode('You are ' + result + 'Days');
    h3.setAttribute('id', 'ageInDays');
    h3.appendChild(textAnswer);
    document.getElementById('result').appendChild(h3);

}
function reset(){
    document.getElementById('ageInDays').remove();
}
