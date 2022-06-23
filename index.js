const baseURL = "https://nekos.best/api/v2/hug?amount=7"
const images = document.getElementById("meme-images")
//Asking for data from the API


const formInputs = document.querySelector("#create-meme")
   formInputs.addEventListener("submit", (e) => {
      //to prevent form default refreshing
      e.preventDefault();
      const inputObj = {}
      inputObj.anime_name = document.getElementById("user-name").value;
      inputObj.url =document.getElementById("user-image").value; 

      tagCreator(inputObj);
   })


async function loader(){
     
return await fetch(baseURL)
.then(response => response.json())
.then(jsonData => jsonData.results)
}
loader()
.then(data => displayImages(data))
 
//a function creates imgtags in DOM
function tagCreator(data){
   const imageDivision = document.createElement("div");
   const imageTag = document.createElement("img");
   imageTag.src = data.url
   imageTag.className = "meme"
   //imageTag.innerText = data.anime_name;
 imageDivision.append(imageTag)
//  const newName = document.createElement("h3")
//  newName.innerText = 
//  imageDivision.append(newName)
 homeImages.append(imageDivision)

 imageTag.addEventListener("click", () =>{
   document.querySelector(".load-image").src = data.url;
   document.querySelector("#meme-name").innerHTML = data.anime_name;
})

}
const homeImages = document.querySelector("#meme-images")
//an Iterator function called displayimages


function displayImages(arrayData){
   arrayData.forEach(data => {
   tagCreator(data)
      
   });
}

// function displayImages(arrayData){
//    for(let i=0; i < arrayData.length; i++){
//       tagCreator(arrayData[i])
//    }
// }
// const starRating = document.querySelectorAll(
//    .star)
// )