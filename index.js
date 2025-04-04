
// const formData = {
//     dogName: "Byron",
//     dogBreed :"Poodle",
//    };

// const configurationObject = {
//    //method: "POST",
//    headers : {
//     "Content-Type" : "application/json",
//     "Accept" : "application/json",
//    },
//    body : JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs" , configurationObject)
// .then (function(response){
//     return response.json();
// })
// .then (function(object){
//     console.log(object);
// }) 
// .catch(function(error){
// alert("Bad things! Ragnarok!");
// console.log(error.message);
// });

function submitData(name, email) {
 return fetch ("http://localhost:3000/users",{
method : "POST",
headers : {
    "Content-Type" : "application/json",
    "Accept" : "application/json"
},
body : JSON.stringify({
    name : name,
    email : email
  })
})
  .then(function (response){
    if (!response.ok){
    throw new Error ("Unauthorized Access");
    }
    return response.json();
     
  })
  .then (function (object){
    console.log(object);
    document.body.innerHTML += object.id
  })
  .catch(function(error){
    document.body.innerHTML += `<p>${error.message}</p>`;
    console.log(error.message);
  })

}
submitData("Steve", "steve@steve.com");