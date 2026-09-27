const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
revealItems.forEach(el=>observer.observe(el));

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove",(e)=>{
  glow.style.left=e.clientX+"px";
  glow.style.top=e.clientY+"px";
});

const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector("nav");
menuBtn?.addEventListener("click",()=>{
  const open=nav.style.display==="flex";
  nav.style.display=open?"none":"flex";
  nav.style.position="absolute";
  nav.style.top="76px";
  nav.style.left="0";
  nav.style.right="0";
  nav.style.padding="22px 6vw";
  nav.style.background="rgba(8,9,13,.97)";
  nav.style.flexDirection="column";
  nav.style.gap="18px";
});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
  if(window.innerWidth<=900) nav.style.display="none";
}));
