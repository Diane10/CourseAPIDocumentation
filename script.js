fetch("https://fakestoreapi.com/products").then((data)=>{
    return data.json();
}).then((completedata)=>{
 let cards;

 completedata.map((values)=>{
    cards+= `  <div class="card" style="width: 18rem;">
    <img src=${values.image} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${values.title}</h5>
      <p class="card-text">${values.category}</p>
      <p class="card-text">${values.description}</p>

      <a href="#" class="btn btn-primary">${values.price}rwf</a>
      
</div>
</div>`
 })

 document.getElementById("cards").innerHTML=cards

})
























// fetch("https://fakestoreapi.com/products").then((data)=>{
//     return data.json()
// }).then((completeddata)=>{
// //  console.log(completeddata[3].titl);

// //  document.getElementById("root").innerHTML=completeddata[3].title;

// let data1;

// completeddata.map((values)=>{
//     data1+= `<div class="card">
//     <h2  > ${values.title}</h2>
//     <img src=${values.image} />
//     <p> ${values.price}</p>
//     <p>${values.description}</p>

//     <p>${values.category}</p>

// </div>`


// })
// document.getElementById("cards").innerHTML=data1


// }).catch((error)=>{
//     console.log(error)
// })
