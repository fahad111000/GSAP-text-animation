let h1 = document.getElementById('text');
let seperateText = h1.textContent.split("");

let halfAlpha = Math.floor(seperateText.length / 2);

let letters = "";
seperateText.forEach((alphabets, index) => {
    if (index < halfAlpha) {
        letters += `<span class="a">${alphabets}</span>`
    }
    else {
        letters += `<span class="b">${alphabets}</span>`

    }
})

h1.innerHTML = letters;
gsap.from(".a", {
    y: 60,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3
})

gsap.from(".b", {
    y: 60,
    opacity: 0,
    delay: 0.3,
    stagger: -0.3
})

