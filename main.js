
fetch('https://openapi.programming-hero.com/api/ai/tools')
  .then(response => response.json())
  .then(data => {
    displayUser(data);
  });


function displayUser(data) {
    const toolsData=data.data.tools.slice(0,6)
    let showData='';
    const imgUrl=["img/1i6.png","img/ai1.png","img/ai3.jpg","img/ai2.png","img/ai77.jpg","img/ai66.png"]

    toolsData.map((tool,index)=>{
        const img=imgUrl[index]
        showData +=`  <div class="bg-slate-50 p-5 mx-3 my-3 rounded-lg border-2">
        <img class="w-[350px] h-[200px] rounded-md" src=${img}>
        <h2 class="font-semibold mt-5 mb-3">Features</h2>
        <div class="text-[15px] font-Inter mb-3">
          <p>${tool.features[0]}</p>
          <p>${tool.features[1]}</p>
          <p>${tool.features[2]}</p>
        </div>
        <hr>
        <h1 class="py-3 font-semibold">${tool.name}</h1>
        <i class='fa fa-calendar'>${tool.published_in}</i>
      </div>`

       
     console.log(tool)   
    })

  document.getElementById('card').innerHTML=showData;

}






