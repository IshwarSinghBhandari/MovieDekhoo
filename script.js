const apiKey = "c45a857c193f6302f2b5061c3b85e743"

document.getElementById('home').onclick = function(ev){
    ev.preventDefault();

    console.log('test');

    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; 
    
    var apiPath = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    console.log(apiPath)
    fetch(apiPath)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(result => {
        console.log(result);

        result.results.forEach(({original_title, poster_path, vote_average,release_date, id})=> {
            const card = document.createElement('div');
            card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4', 'text-center'); 

            card.innerHTML = `
                    <div class="card h-100" onclick="viewMovie(${id})">
                        <Image src=${"https://image.tmdb.org/t/p/w500"+poster_path} fluid></Image>
                        <div class="pb-3 card-detail">
                            <h4 class="movie-title py-2 pl-3 m-0">${original_title}</h4>
                            <hr>
                            <p class=" pl-3">Rating : ${vote_average}</p>
                            <p class="pl-3">Release Date: ${release_date}
                            </p>
                         </div>
                    </div>  


                

                `;

                productContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Error fetching data:", error);
        alert("An error occurred while fetching data. Please try again.");
    });

}

document.getElementById('top-rated').onclick = function(ev){
    ev.preventDefault();

    console.log('test');

    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; 
    
    var apiPath = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    console.log(apiPath)
    fetch(apiPath)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(result => {
        console.log(result);

        result.results.forEach(({original_title, poster_path, vote_average,release_date, id})=> {
            const card = document.createElement('div');
            card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4', 'text-center'); 

            card.innerHTML = `
                  
                          <div class="card h-100" onclick="viewMovie(${id})">
                        <Image src=${"https://image.tmdb.org/t/p/w500"+poster_path} fluid></Image>
                        <div class="pb-3 card-detail">
                            <h4 class="movie-title py-2 pl-3 m-0">${original_title}</h4>
                            <hr>
                            <p class=" pl-3">Rating : ${vote_average}</p>
                            <p class="pl-3">Release Date: ${release_date}
                            </p>
                         </div>
                    </div>  
                `;

                productContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Error fetching data:", error);
        alert("An error occurred while fetching data. Please try again.");
    });

}


document.getElementById('upcoming').onclick = function(ev){
    ev.preventDefault();

    console.log('test');

    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; 
    
    var apiPath = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
    console.log(apiPath)
    fetch(apiPath)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(result => {
        console.log(result);

        result.results.forEach(({original_title, poster_path, vote_average,release_date, id})=> {
            const card = document.createElement('div');
            card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4', 'text-center'); 

            card.innerHTML = `
                        <div class="card h-100" onclick="viewMovie(${id})">
                        <Image src=${"https://image.tmdb.org/t/p/w500"+poster_path} fluid></Image>
                        <div class="pb-3 card-detail">
                            <h4 class="movie-title py-2 pl-3 m-0">${original_title}</h4>
                            <hr>
                            <p class=" pl-3">Rating : ${vote_average}</p>
                            <p class="pl-3">Release Date: ${release_date}
                            </p>
                         </div>
                    </div>  
                `;

                productContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Error fetching data:", error);
        alert("An error occurred while fetching data. Please try again.");
    });

}

document.getElementById('searchMovie').onclick = function(ev){

    var movie = document.getElementById('movieName').value;
    console.log(movie)
    ev.preventDefault();

    console.log('test');

    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; 
    
    var apiPath = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${movie}&page=1`
    console.log(apiPath)
    fetch(apiPath)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(result => {
        console.log(result);

        result.results.forEach(({original_title, poster_path, vote_average,release_date, id})=> {
            const card = document.createElement('div');
            card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4', 'text-center'); 

            card.innerHTML = `
                       <div class="card h-100" onclick="viewMovie(${id})">
                        <Image src=${"https://image.tmdb.org/t/p/w500"+poster_path} fluid></Image>
                        <div class="pb-3 card-detail">
                            <h4 class="movie-title py-2 pl-3 m-0">${original_title}</h4>
                            <hr>
                            <p class=" pl-3">Rating : ${vote_average}</p>
                            <p class="pl-3">Release Date: ${release_date}
                            </p>
                         </div>
                    </div>  
                `;

                productContainer.appendChild(card);
                document.getElementById('movieName').value = '';
        });
    })
    .catch(error => {
        console.error("Error fetching data:", error);
        alert("An error occurred while fetching data. Please try again.");
    });

    

}

function viewMovie(movieId){
    console.log(movieId)
    localStorage.setItem('selectedMovieId', movieId);
    window.location.href = "details.html"
}

document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; 

    const apiPath = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    console.log(apiPath);

    fetch(apiPath)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(result => {
            console.log(result);

            result.results.forEach(({ original_title, poster_path, vote_average,release_date, id }) => {
                const card = document.createElement('div');
                card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4', 'text-center'); 

                card.innerHTML = `
                   <div class="card h-100" onclick="viewMovie(${id})">
                        <Image src=${"https://image.tmdb.org/t/p/w500"+poster_path} fluid></Image>
                        <div class="pb-3 card-detail">
                            <h4 class="movie-title py-2 pl-3 m-0">${original_title}</h4>
                            <hr>
                            <p class=" pl-3">Rating : ${vote_average}</p>
                            <p class="pl-3">Release Date: ${release_date}
                            </p>
                         </div>
                    </div>
                `;

                productContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            alert("An error occurred while fetching data. Please try again.");
        });
});



