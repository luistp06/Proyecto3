import './style.css'
import { Footer } from "./components/Footer/Footer";
import  { Header }  from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Button } from "./components/Button/Button";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const initialvalue="cats"


const buildWebsite = () => {
    Header();
    Main();
    Footer();
    getPhotos(initialvalue,"squarish","20");
  };


  const header = document.querySelector("header");
header.innerHTML = Header();

const footer = document.querySelector("footer");
footer.innerHTML = Footer();

const maine= document.querySelector("main");
maine.innerHTML= Main();



async function getPhotos(keyword,orientation,perpage,page){
const data = await fetch(
    `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&orientation=${orientation}&per_page=${perpage}&client_id=${CLIENT_ID}`
);
const results = await data.json();
const photos= results.results;
printPhotos(photos)
}

const printPhotos = (photos)=>{
const container= document.querySelector("#results");
const controlpage=document.querySelector("#controlpage");
if (photos.length === 0) {
    container.innerHTML = Button();
    controlpage.innerHTML=""

          document.querySelector("#cars").addEventListener("click", () => {
          getPhotos("cars", "squarish",20);
    
          document.querySelector("#searchInput").value = "";
           });

           document.querySelector("#dogs").addEventListener("click", () => {
            getPhotos("dogs", "squarish",20);
      
            document.querySelector("#searchInput").value = "";
             });

             document.querySelector("#city").addEventListener("click", () => {
              getPhotos("city", "squarish",20);
        
              document.querySelector("#searchInput").value = "";
               });
    



  } else {
    container.innerHTML = "";

for (const photo of photos) {
    const li=document.createElement("li")
    li.innerHTML=`
    <a href="${photo.links.download}"   target="_blank" title="click to download">
    <img src="${photo.urls.regular}" alt="${photo.alt_description}"/>
    <a/>
    `
    container.appendChild(li);
}
}
};
let pagevalue=1;

buildWebsite();

let auxiliar=""
 document.querySelector("#searchbtn").addEventListener("click", () => {
    const textvalue = document.querySelector("#searchInput").value;
     auxiliar= textvalue;
    const orientationvalue=document.querySelector("#orientationInput").value;
    const numbervalue=document.querySelector("#numberInput").value;
    getPhotos(textvalue, orientationvalue,numbervalue,pagevalue);

    document.querySelector("#searchInput").value = "";
});

const prevbtn = document.querySelector("#prevbtn");
prevbtn.addEventListener("click", () => {
    const orientationvalue=document.querySelector("#orientationInput").value;
    const numbervalue=document.querySelector("#numberInput").value;
    if (pagevalue > 1) {
        pagevalue=pagevalue-1;
        getPhotos(textvalue, orientationvalue,numbervalue,pagevalue);
    }
});

const nextbtn = document.querySelector("#nextbtn");
nextbtn.addEventListener("click", () => {
   const textvalue = auxiliar||initialvalue;
    const orientationvalue=document.querySelector("#orientationInput").value;
    const numbervalue=document.querySelector("#numberInput").value;
    pagevalue= pagevalue+1;
    getPhotos(textvalue, orientationvalue,numbervalue,pagevalue);
});
