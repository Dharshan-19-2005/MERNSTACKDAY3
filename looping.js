var a =[10,20,30]
var b = {"count":70,"abs":1}
for(let i in a)
{
    console.log(a[i])
}
for(let i in b){
    console.log(b[i])
}
//for   of loop

for(let i of b)
{
    console.log(i);
}
for(let [i,j] of Object.entries(b))
{
    console.log(i,j)
}