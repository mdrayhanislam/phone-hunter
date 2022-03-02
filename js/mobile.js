const searchmobile = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value ='';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText} `;

     fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data));
}

const displaySearchResult = data => {
    console.log(data);

    const searchResult = document.getElementById('search-result');
    data.forEach(datas => {
        console.log(datas);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML= `
        <div class="col">
              <div class="card">
                <img src="${datas.image}" class="card-img-top w-75" alt="...">
                <div class="card-body">
                <h2> ${datas.brand} </h2>
                  <h5 class="card-title">${datas.phone_name}</h5>
                  <button> Details </button>
                </div>
              </div>
            </div>
        `;
        searchResult.appendChild(div);
    });

}