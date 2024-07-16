const RESTAURANTS_API_URL = `http://localhost:3000/restaurants`;

async function fetchRestaurants(){
    const response = await fetch(`${RESTAURANTS_API_URL}`); 
    const restaurantsData = await response.json();
    displayRestaurants(restaurantsData);
}
function displayRestaurants(restaurantsData){
    let restaurantData ='';
    restaurantsData.forEach(restaurant=>{
        restaurantData+=` <div class="col-md-4 col-lg-4">
        <div class="card m-5">
          <img src=${restaurant.imageurl} class="card-img-top w-100 h-20" alt="Restaurant Image">
          <div class="card-body">
            <h5 class="card-title">${restaurant.name}</h5>
            <p class="card-text">
              <i class="fas fa-map-marker-alt"></i>${restaurant.address}
            </p>
            <p class="card-text">
              <i class="fas fa-star"></i> ${restaurant.rating} (${restaurant.reviews} reviews)
            </p>
            <a href="#" class="btn btn-primary">Know More</a>
          </div>
        </div>
        </div>
      `});

    let restaurantCardElement = document.getElementById("restaurantsCard");
    restaurantCardElement.innerHTML = restaurantData;
}

fetchRestaurants();
