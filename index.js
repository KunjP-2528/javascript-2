const enddate = "27 Nov 2031 11:59:59";

document.getElementById("end-date").innerText = enddate;
const input = document.querySelectorAll("input")

function clock(){
    const end = new Date(enddate);
    const now = new Date();
    let diff = end - now;
    console.log(diff);
    if(diff<0)return;
    input[0].value = Math.floor(diff /(1000*60*60*24*365))
    input[1].value = Math.floor(diff /(1000*60*60*24*30))
    input[2].value = Math.floor(diff /(1000*60*60*24))
    input[3].value = Math.floor(diff /(1000*60*60)%24)
    input[4].value = Math.floor(diff /(1000*60*60)%60)
    input[5].value = Math.floor(diff /(1000)%60)
    

}

setInterval(
    ()=>{
        clock()
    },1000
)