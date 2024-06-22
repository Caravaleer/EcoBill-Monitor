function required()
{
var empt1 = document.forms["form1"]["name"].value;
var empt2 = document.forms["form1"]["bill1"].value;
var empt3 = document.forms["form1"]["bill2"].value;
if (empt1 == ""||empt2 == ""||empt3 == "")
{
alert("Invalid");
return false;
}
}
function again_required()
{
var empt1 = document.forms["form1"]["name"].value;
var empt2 = document.forms["form1"]["email"].value;
var empt3 = document.forms["form1"]["bill1"].value;
var empt4 = document.forms["form1"]["bill2"].value;
var empt5 = document.forms["form1"]["bill3"].value;
if (empt1 == ""||empt2 == ""||empt3 == ""||empt4==""||empt5=="")
{
alert("Invalid");
return false;
}

}