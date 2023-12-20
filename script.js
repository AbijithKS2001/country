function searchfn()

{console.log(document.getElementById('searchfield').value.toLowerCase())
    searchurl="https://restcountries.com/v3.1/name/"+document.getElementById("searchfield").value.toLowerCase()+"?fullText=true"
console.log(searchurl)
fetch(searchurl)
.then(data=>data.json())
.then(items=>displayData(items))
//.then(datas=>console.log(datas))

function displayData(items)
{
console.log(items)
for ( let item of items){
    console.log(item)
    const currencyInfo = Object.entries(item.currencies).map(([code, info]) => {
        return 
      });
    htmlData=`
    <div class="row">
                <div class="col-4"><div class="card">
                <img src="${item.flags.png}">
                <div class="card-body">
                    <h5 class="card-title">${item.name.common}</h5>
                    <p class="card-text">${item.flags.alt} </p>
                    <p class="card-text">Capital: ${item.capital}</p>
                    <p class="card-text">Currencies: ${currencyInfo.join('<br>')}</p>
                    <p class="card-text"> </p>
                    <p class="card-text"> </p>
                    <button class="btn btn-primary"></button>
                </div>
            </div> </div>
                <div class="col-4"><div class="card">
                <img src="${item.coatOfArms.png}">
                
            </div> </div></div>
            </div>
                <div class="col-4"></div>
            </div><br>`
            display.innerHTML=htmlData
}
{
   
}
}}