const myImage=document.querySelector("img")

myImage.onclick=()=>{
    const mySrc=myImage.getAttribute("src");
    if (mySrc === "images/mozilla-firefox-icon-4.png"){
        myImage.setAttribute("src", "images/OIP-C.jpg");
    } else{
        myImage.setAttribute("src", "images/mozilla-firefox-icon-4.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else{
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}
if (!localStorage.getItem("name")){
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
myButton.onclick = function(){
    setUserName();
};