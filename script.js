let pCont = document.getElementById('p-div');
let pbtn = document.getElementById('p-button');
let imgCont = document.getElementById('img-div');
let imgbtn = document.getElementById('img-button');
let nullCont = document.getElementById('null-div');
let nullbtn = document.getElementById('null-button');
let pNum = 0;
let imgNum = 0;
let nothingNum = 0;
let pCount = document.getElementById('p-count');
let imgCount = document.getElementById('img-count');
let nothingCount = document.getElementById('null-count');

pbtn.onclick = function() {
    let newPara = document.createElement('p');
    newPara.style.backgroundColor = 'black';
    newPara.style.color = 'white';
    newPara.style.display = 'flex';
    newPara.style.justifyContent = 'center';
    newPara.style.padding = '10px';
    newPara.innerHTML = 'hellooooo';
    pNum++;
    pCont.appendChild(newPara);
    imgCont.style.display = 'none';
    nullCont.style.display = 'none';
    pCont.style.display = 'block';
    pCount.innerHTML = "pCount: " + pNum;
    imgCount.innerHTML = "imgCount: " + imgNum;
    nothingCount.innerHTML = "nothingCount: " + nothingNum;
}

imgbtn.onclick = function() {
    let newImg = document.createElement('img')
    newImg.src = 'images/pikachu.png';
    newImg.style.width = "150px";
    imgNum++;
    imgCont.appendChild(newImg);  
    pCont.style.display = 'none';
    nullCont.style.display = 'none';
    imgCont.style.display = 'block';
    pCount.innerHTML = "pCount: " + pNum;
    imgCount.innerHTML = "imgCount: " + imgNum;
    nothingCount.innerHTML = "nothingCount: " + nothingNum;
}

nullbtn.onclick = function() {
    nothingNum++;
    pCont.style.display = 'none';
    nullCont.style.display = 'block';
    imgCont.style.display = 'none';
    pCount.innerHTML = "pCount: " + pNum;
    imgCount.innerHTML = "imgCount: " + imgNum;
    nothingCount.innerHTML = "nothingCount: " + nothingNum;
}

nullCont.style.display = "none";
pCount.innerHTML = "pCount: " + pNum;
imgCount.innerHTML = "imgCount: " + imgNum;
nothingCount.innerHTML = "nothingCount: " + nothingNum;