let inputFloor=document.getElementById("input-floors");
let inputRent=document.getElementById("input-rent");
let saveBtn=document.getElementById("save");
let list=document.getElementById("list");
let sum;

saveBtn.addEventListener("click",function()
{
    render();
})

function render()
{
    let save="";
    let button="";
    for(let x=1;x<=inputFloor.value;x++)
    {
        save+=`<input id=inputJS placeholder=Rent${x}><br>`
    }
    button=`<button oncclick="total()">save</button>`;
    list.innerHTML=save+button;
}
let inputForRent=document.getElementById("inputJS");
let save2Btn=document.getElementById("button2");

save2Btn.addEventListener("click",function()
{
    total();
    alert("wow");
})

function total()
{
    let output;
    let total
    total+=inputForRent.value;
    alert(total);
    output=`<p>${total}</p>`
    list.innerHTML=output;
}