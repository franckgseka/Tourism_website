const pictures = document.querySelectorAll(".img-gallery img")
const fullImg = document.querySelector(".full-img")
let scrOld = fullImg.querySelector("img")


document.querySelector("span").onclick = () =>{

    /** cacher l'image**/
    fullImg.style.visibility = "hidden"
}


pictures.forEach(img =>{
    img.addEventListener("click" , (e) =>{
        const newSrc = e.target.src.split("/")[4]

        /** rendre visible l'image**/
        fullImg.style.visibility = "visible"

        /** pour afficher les images **/
        scrOld.src = "images-videos/"+newSrc
    })
})