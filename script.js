// แสดงหน้า
function showPage(pageId){
    document.getElementById('selectPage').classList.add('hidden');
    document.getElementById(pageId).classList.remove('hidden');
}

// กลับหน้าเลือก
function goBack(){
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.add('hidden');
    document.getElementById('selectPage').classList.remove('hidden');
}

// ส่งคำอวยพร
function sendWish(){
    let wishText = document.getElementById('wish').value;
    if(wishText.trim() !== ""){
        alert("คุณส่งคำอวยพรเรียบร้อย!\n\n"+wishText);
        document.getElementById('wish').value="";
    } else {
        alert("กรุณาเขียนข้อความก่อนส่ง");
    }
}

// สร้างลูกโป่ง
for(let i=0;i<30;i++){
    let balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = Math.random()*100+'vw';
    balloon.style.animationDuration = (5+Math.random()*5)+'s';
    balloon.style.background = `radial-gradient(circle at 30% 30%, hsl(${Math.random()*360},70%,70%), hsl(${Math.random()*360},80%,60%))`;
    document.body.appendChild(balloon);
}

// สร้างไฟกระพริบ
for(let i=0;i<50;i++){
    let light = document.createElement('div');
    light.classList.add('light');
    light.style.left = Math.random()*100+'vw';
    light.style.top = Math.random()*100+'vh';
    light.style.animationDuration = (1+Math.random()*3)+'s';
    document.body.appendChild(light);
}

// Confetti
function createConfetti(){
    let confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random()*window.innerWidth+'px';
    confetti.style.backgroundColor = `hsl(${Math.random()*360},70%,60%)`;
    document.body.appendChild(confetti);
    let duration = 3+Math.random()*3;
    confetti.animate([
        { transform: `translateY(0) rotate(0deg)` },
        { transform: `translateY(${window.innerHeight+20}px) rotate(${Math.random()*360}deg)` }
    ], { duration: duration*1000, easing: 'linear' });
    setTimeout(()=>{ confetti.remove(); }, duration*1000);
}
setInterval(createConfetti, 150);