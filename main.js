let accordion = document.getElementsByClassName('accordion');
let desc = document.getElementsByClassName('desc');

console.log(desc)



for (let i = 0; i < accordion.length; i++)
    accordion[i].addEventListener('click', function () {
            this.classList.toggle('active')
            if (desc[i].style.height == 0) {
                desc[i].style.height = desc[i].scrollHeight + 'px'
            } else {
                desc[i].style.height = null;
            }

        }

    )

// task 3

let thumbnailImg = document.querySelectorAll('.thumbnail img')
let previewImg = document.querySelector('.preview img')

for (let z = 0; z < thumbnailImg.length; z++) {
    thumbnailImg[z].addEventListener('click', function () {
        previewImg.src = thumbnailImg[z].src
    })
}



let button = document.getElementById('dark');
let body = document.querySelector('body');



button.onclick = function () {

    if (body.classList.toggle('darkmood')) {
       
        this.innerText = 'Light Mood'
        



    } else {
        body.classList.remove('darkmood')
        this.innerText = 'Dark Mood'




    }


}

