
const baseURL = "https://nekos.best/api/v2/hug?amount=7"
const images = document.getElementById("meme-images")

//users inputs intergration into the DOM
const formInputs = document.querySelector("#create-meme")
   formInputs.addEventListener("submit", (e) => {
      //to prevent form default refreshing
      e.preventDefault();
      const inputObj = {}
      inputObj.anime_name = document.getElementById("user-name").value;
      inputObj.url =document.getElementById("user-image").value; 

      tagCreator(inputObj);
   })

 //requesting data from the API
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
   imageDivision.append(imageTag)
 homeImages.append(imageDivision)

 //adding a click function to displayed images
 imageTag.addEventListener("click", () =>{
   document.querySelector(".load-image").src = data.url;
   document.querySelector("#meme-name").innerHTML = data.anime_name;

})
//to display all a loop is necessary 
}
const homeImages = document.querySelector("#meme-images")
//an Iterator function called displayimages
function displayImages(arrayData){
   arrayData.forEach(data => {
   tagCreator(data)
      
   });
}

//adding event listeners to the DOM
const heartIcon = document.getElementById("love");


heartIcon.addEventListener("click", () =>{
   if(heartIcon.style.color == "red"){
      heartIcon.style.color = "grey"
       }
       else{
       heartIcon.style.color = "red"
      }
})

heartIcon.addEventListener("mouseover", () =>{
   if(heartIcon.style.color == "grey"){
      heartIcon.style.color = "blue"
       }
       else{
       heartIcon.style.color = "grey"
      }
})
const submitting = document.querySelector("#add");

submitting.addEventListener("click", () =>{
   alert("nice one!")
})

