const url="https://api.openweathermap.org/data/2.5/weather?lat="
const apiid="d730997c9ecfbafe1796405486f49236";
const url2="http://api.openweathermap.org/geo/1.0/direct?q="

const search=document.querySelector(".search");
search.addEventListener("click",async ()=>{
    let place=document.querySelector(".search-bar input");
    let g=`${url2}${place.value}&limit=1&appid=${apiid}`;
    let placelo=await fetch(g);
    let placelocation=await placelo.json();
    let abc=placelocation[0];
    let weath=`${url}${abc["lat"]}&lon=${abc["lon"]}&appid=${apiid}`;
    let a=await fetch(weath);
    let b=await a.json();
    let winds=document.querySelector(".winds-speed");
    let z=b["wind"];
    let y=z["speed"]*3.6;
    winds.innerText=`${y} Km/h`;
    let humi=document.querySelector(".hum");
    let x=b["main"];
    let j=x["humidity"];
    humi.innerText=`${j}%`;
    let s=b["weather"];
    let t=s["0"];
    let o=t["main"];
    let para=document.querySelector(".happening");
    para.innerText=`${o}`;
    let r=x["temp"];
    r=Math.round(r-273.15);
    let para1=document.querySelector(".temp-value");
    para1.innerText=`${r}`;
    let para2=document.querySelector(".imagees");
    if(o=="Haze"){
        para2.src="mist.png";
        document.querySelector(".temp").style.padding="0";
    }else if(o=="Clear"){
        para2.src="clear.png";
    }else if(o=="Clouds"){
        para2.src="cloud.png";
    }else if(o=="Rain"){
        para2.src="rain.png";
    }else if(o=="Sunny"){
        para2.src="sunny.png";
    }else if(o=="Snow"){
        para2.src="snow.png";
    }
    document.querySelector(".temp-box").style.display="flex";
    document.querySelector(".humidandwind").style.display="flex";
    console.log(b);
});



