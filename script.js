

const list01 =document.querySelector(".list01")
const list02 =document.querySelector(".list02")
const list03 =document.querySelector(".list03")

const info01 =document.querySelectorAll(".info01")
const info02 =document.querySelectorAll(".info02")
const info03 =document.querySelectorAll(".info03")
const info04 =document.querySelectorAll(".info04")
const info05 =document.querySelectorAll(".info05")
const info06 =document.querySelectorAll(".info06")

info01.forEach(btn => {
  btn.addEventListener("click",function(){
    list01.style.display = "flex";
    list02.style.display = "none";
    list03.style.display = "none";
  });
})

info02.forEach(btn => {
  btn.addEventListener("click",function(){
    list02.style.display = "flex";
    list01.style.display = "none";
    list03.style.display = "none";
  });
})


info03.forEach(btn => {
  btn.addEventListener("click",function(){
    list03.style.display = "flex";
    list02.style.display = "none";
    list01.style.display = "none";
  });
})

const slides01 = document.querySelector(".slides01");
const totalImages01 = slides01.children.length; // 5 張真實 + 1 複製
let index01 = 0;
const intervalTime01 = 4000;

const arrow03 = document.querySelector(".arrow03"); // 左箭頭
const arrow04 = document.querySelector(".arrow04"); // 右箭頭

// 下一張
function nextSlide01() {
    index01++;
    slides01.style.transition = 'transform 1s ease';
    slides01.style.transform = `translateX(-${(100/totalImages01)*index01}%)`;

    // 到最後一張（複製的第一張）
    if (index01 === totalImages01 - 1) {
        setTimeout(() => {
            slides01.style.transition = 'none';
            slides01.style.transform = 'translateX(0%)';
            index01 = 0;
        }, 1000); // 與 transition 時間一致
    }
}

// 前一張
function prevSlide01() {
    if(index01 === 0){
        index01 = totalImages01 - 2; // 跳到倒數第二張
        slides01.style.transition ='none';
        slides01.style.transform = `translateX(-${(100/totalImages01)*index01}%)`;
        setTimeout(() => {
            slides01.style.transition = 'transform 1s ease';
            slides01.style.transform = `translateX(-${(100/totalImages01)*index01}%)`;
        }, 20);
    } else {
        index01--;
        slides01.style.transition = 'transform 1s ease';
        slides01.style.transform = `translateX(-${(100/totalImages01)*index01}%)`;
    }
}

// 綁定箭頭事件
arrow03.addEventListener("click", prevSlide01);
arrow04.addEventListener("click", nextSlide01);

// 自動輪播
setInterval(nextSlide01, intervalTime01);


const slides02 = document.querySelector(".slides02");
const totalSlides = 4;       // 三張實際 + 一張複製
const slideWidth = 450;      // 每個 iframe 寬度
let index = 0;
const intervalTime = 4000;   // 每張停留時間

const arrow01 =document.querySelector(".arrow01")
const arrow02 =document.querySelector(".arrow02")

function nextSlide() {
    index++;
    slides02.style.transition = 'transform 1s ease';
    slides02.style.transform = `translateX(-${slideWidth * index}px)`;

    // 如果到達最後一張（複製的第一張）
    if (index === totalSlides - 1) {
        setTimeout(() => {
            slides02.style.transition = 'none';
            slides02.style.transform = `translateX(0px)`; // 無縫回到第一張
            index = 0;
        }, 1000); // 與 transition 時間一致
    }
}
function prevSlide(){
  if(index ===0){
    // 如果已經在第一張，就跳到最後一張
    index =totalSlides-2
    slides02.style.transition ='none'
    slides02.style.transform = `translateX(-${slideWidth * index}px)`;
    // 強制重繪後再加 transition，避免瞬間跳轉
        setTimeout(() => {
            slides02.style.transition = 'transform 1s ease';
            slides02.style.transform = `translateX(-${slideWidth * index}px)`;
        }, 20);
    } else {
        index--;
        slides02.style.transition = 'transform 1s ease';
        slides02.style.transform = `translateX(-${slideWidth * index}px)`;
    }
}
const search = document.querySelector(".bt01");
const text_box = document.querySelector(".text-box");

search.addEventListener("click", function () {
  // 初次顯示（display 為 none 或空）
  if (text_box.style.display === "none" || text_box.style.display === "") {
    text_box.style.display = "inline-block";
    text_box.style.clipPath = "inset(0 0 100% 0)"; // 從上往下開
    text_box.style.transition = "clip-path 0.4s ease";
    requestAnimationFrame(() => {
      text_box.style.clipPath = "inset(0 0 0 0)"; // 展開到底
    });
  } else {
    // 收合時：從下往上收
    text_box.style.clipPath = "inset(0 0 0 0)"; // 確保起點完整
    text_box.style.transition = "clip-path 0.4s ease";
    requestAnimationFrame(() => {
      text_box.style.clipPath = "inset(0 0 100% 0)"; // 下方先收起
    });

    setTimeout(() => {
      text_box.style.display = "none";
    }, 400);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  fetch('https://api.countapi.xyz/hit/julia-s-ntue.vercel.app/visits')
    .then(res => res.json())
    .then(data => {
      const el = document.getElementById('count');
      if (el) {
        el.textContent = data.value;
      } else {
        console.error('找不到 #count 元素');
      }
    })
    .catch(err => {
      console.error('CountAPI 請求錯誤：', err);
    });
});

fetch('https://api.countapi.xyz/hit/julia-s-ntue.vercel.app/visits')
  .then(res => res.json())
  .then(data => document.getElementById('count').textContent = data.value);



