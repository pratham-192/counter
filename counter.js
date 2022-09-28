var number;
var countInterval;
var button=document.getElementById("button");
button.addEventListener("click",start);
function start()
{
    number=parseInt(document.getElementById('input-number').value);
    if(isNaN(number))
    {
        alert("please enter a number");
        clearInterval(countInterval);
        return;
    }
    if(number>99999 || number<1)
    {
        alert("out of scope number");
        clearInterval(countInterval);
        return;
    }
    var currentnumbers=document.querySelectorAll(".counter .current");
    var nextnumbers=document.querySelectorAll(".counter .next");
    // for reseting all the numbers to zero
    resetNumbers(currentnumbers,nextnumbers,4);
    // for clearing all the ongoing intervals
    clearInterval(countInterval);
    var counter=0;
    countInterval=setInterval(() => {
        if(counter===number)
        {
            clearInterval(countInterval);
            alert("counter has stopped");
            return;
        }
        counter++;
        increaseCount(currentnumbers,nextnumbers,4);
    }, 1000);
}
//for reseting all the numbers
function resetNumbers(currentnumbers,nextnumbers,index)
{
    for(var i=0;i<=index;i++)
    {
        currentnumbers[i].innerText=0;
        nextnumbers[i].innerText=1;
    }
}
// for increasing the numbers
function increaseCount(currentnumbers,nextnumbers,index)
{
    let current=currentnumbers[index];
    let next=nextnumbers[index];
    console.log(current.innerText);
    if(current.innerText==9)
    {
        increaseCount(currentnumbers,nextnumbers,index-1);
    }
    next.classList.add("animate");
    setTimeout(() => {
        current.innerText=next.innerText;
        next.classList.remove("animate");
        next.innerText=parseInt(current.innerText)+1;
        if(next.innerText>9)next.innerText=0;
    }, 500);
}