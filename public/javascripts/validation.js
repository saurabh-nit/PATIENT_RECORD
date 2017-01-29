function validate(){

          first = $('#fname').val();
           last = $('#lname').val();

          ageOf = $('#age').val();
      birthDate = $('#dob').val();
        gender  = $('#gender').val();
        phoneNo = $('#phone').val();
         info   = $('#information').val();

if(user(first,last))
  {

   if(age(ageOf))
{
if(birth(birthDate))
{
if(sex(gender))
{
if(phone(phoneNo))
{
if(extra(info))
{

}
}
}
}
}
}
return false;
}

 // USER NAME VALIDATION --
function user(f,l)
  {

    if (f=='' || f==null)
     {
      alert('Please fill first name');
      f.focus();
      return false;
     }
    if(l=='' || l==null){
      alert('Please fill last name');
      f.focus();
    }
    return true;
  }


function allnumeric(uzip)
  {
    var numbers = /^[0-9]+$/;
    if(uzip.value.match(numbers))
      {
        var len=uzip.value.length;
        if(len==10)
          return true;
        else
          {
           alert("registration no should be of 10 digits");
           uid.focus();
           return false;
          }
      }
    else
     {
       alert('registration no have numeric characters only');
       uzip.focus();
       return false;
     }
 }

function rollnumber(uzip)
{
var numbers = /^[0-9]+$/;
if(uzip.value.match(numbers))
{
var len=uzip.value.length;
if(len==5)
    return true;
else
{
  alert("roll number length should be 5 digit long.");
  uid.focus();
  return false;
}
}
else
{
alert('roll number should be numeric');
uzip.focus();
return false;
}
}

function address1(uadd)
 {
   {
   var len = uadd.value.length;
   if (len == 0)
   {
   alert("Address can not be empty.");
   uid.focus();
   return false;
   }
   return true;
   }
 }



function college(uadd)

   {
   var len = uadd.value.length;
   if (len == 0)
   {
   alert("College can not be empty.");
   uid.focus();
   return false;
   }
   return true;
   }
