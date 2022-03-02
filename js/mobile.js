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
    // console.log(data);

    const searchResult = document.getElementById('search-result');
    data.forEach(datas => {
        // console.log(datas);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML= `
        <div class="col">
              <div class="card">
                <img src="${datas.image}" class="card-img-top w-75" alt="...">
                <div class="card-body">
                <h2> ${datas.brand} </h2>
                  <h5 class="card-title">${datas.phone_name}</h5>
                  <button onclick="loadPhoneDetails()"> Details </button>
                </div>
              </div>
            </div>
        `;
        searchResult.appendChild(div);
    });
}

// detail button

const loadPhoneDetails = phoneId => {
const url = `https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089`;
fetch(url)
.then(res => res.json())
.then(data => displayPhoneDetail(data.data))
}

const displayPhoneDetail = phones => {
    console.log(phones)
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card">
            <img src="${phones.image}" class="card-img-top w-25" alt="...">
            <div class="card-body">
            <h1>${phones.brand}</h1>
            <h3> ${phones.name} </h3>
              <h5 class="card-title">MainFeatures</h5>
              <p class="card-text"> ChipSet: ${phones.mainFeatures.chipSet}</p>
              <p class="card-text"> DisplaySize: ${phones.mainFeatures.displaySize}</p>
              <p class="card-text"> Memory: ${phones.mainFeatures.memory}</p>
              <h5 class="card-title">sensors</h5>
              <p class="card-text"> ${phones.mainFeatures.sensors}</p>
              <p class="card-text"> Storage: ${phones.mainFeatures.storage}</p>
              <h5 class="card-title">Others</h5>
              <p class="card-text"> Bluetooth: ${phones.others.Bluetooth}</p>
              <p class="card-text"> GPS: ${phones.others.GPS}</p>
              <p class="card-text"> NFC: ${phones.others.NFC}</p>
              <p class="card-text"> Radio: ${phones.others.Radio}</p>
              <p class="card-text"> USB: ${phones.others.USB}</p>
              <p class="card-text"> WLAN: ${phones.others.WLAN}</p>
             
              <p class="card-text">  <h6> ReleaseDate: </h6>  ${phones.releaseDate}</p>
              
              <p class="card-text"> Slug: ${phones.slug}</p>
              
            </div>
          </div>
    `;
    phoneDetails.appendChild(div);
}


