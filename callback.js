function submitForm(submit,isValid)
{
    isValid();
   console.log("Submit")
}
function validations(){
    console.log("Form Submit Successfully")
}
function database(){
    dbname= "SECE"
    return [dbname,"Data stored Successffully"]
}
submitForm("Form Submit",database)
