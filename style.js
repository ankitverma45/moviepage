var swiper = new Swiper('.popular-content', {
  slidesPerView: 1,
  spaceBetween: 30,

  autoplay: {
    delay: 7525000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    100:{
      slidesPerView: 1,
       spaceBetween: 15,
    },
    300:{
      slidesPerView: 2,
       spaceBetween: 30,
    },
    465:{
      slidesPerView: 3,
       spaceBetween: 30,
    },
    615:{
      slidesPerView: 3,
       spaceBetween: 30,
    },
    800:{
      slidesPerView: 4,
       spaceBetween: 30,
    },
    1090:{
      slidesPerView: 5,
       spaceBetween: 30,
    },
    1360:{
      slidesPerView: 5,
       spaceBetween: 30,
    },
    1425:{
      slidesPerView: 6,
       spaceBetween: 50,
    },
    1496:{
      slidesPerView: 7,
       spaceBetween: 30,
    }
  },
});

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const moiveBox = document.querySelector(".swiper-wrapper")
const moiveBoxe = document.querySelector(".full-container")
const moiveBoxee = document.querySelector(".sear")
const moiveSearch = document.querySelector("#search-input")
const home = document.querySelector(".home")
const all = document.querySelector(".all")





const getMovies = async (APIURL) => {
  const response = await fetch(APIURL)
  const data = await response.json()
  showMoviess(data.results)
  showMovies(data.results)

}
const getMoviesD = async (SEARCHAPI) => {
  const response = await fetch(SEARCHAPI)
  const data = await response.json()
  showMoviesse(data.results)
  console.log(data.results)

}
function myFunction(a,b,c){
  location.href="movie.html?" + 'img=' + a  +'&title=' + b  + '&year=' + c 
  
}

const showMoviesse = (data) => {
  data.forEach((item) => {
    const boxe = document.createElement("div")
    boxe.classList.add("movie-card")
    boxe.innerHTML = `<div class="card-head" onclick="myFunction('${IMGPATH + item.poster_path}','${item.original_title}','${item.release_date}')" >
    <img src="${IMGPATH + item.poster_path}" alt="" class="card-img img2 img3">

    <div class="card-overlay">
      <div class="bookmark">
        <i class="fa-regular fa-bookmark"></i>
      </div>

      <div class="rating">
        <i class="fa-regular fa-star"></i>
        <span>${item.vote_average}</span>
      </div>

      <div class="play">
        <i class="fa-regular fa-circle-play"></i>
      </div>

    </div>
  </div>
  <div class="card-body">
    <h3 class="card-title card-title1 card-title3">${item.original_title}</h3>

    <div class="card-info">
      <span class="year">${item.release_date}</span>
    </div>
  </div>

</div>`
 moiveBoxee.appendChild(boxe)
 console.log(moiveBoxee)
})
}

const showMoviess = (data) => {
  data.forEach((item) => {
    const boxe = document.createElement("div")
    boxe.classList.add("movie-card")
    boxe.innerHTML = `<div class="card-head" onclick="myFunction('${IMGPATH + item.poster_path}','${item.original_title}','${item.release_date}')">
    <img src="${IMGPATH + item.poster_path}" alt="" class="card-img img2">

    <div class="card-overlay">
      <div class="bookmark">
        <i class="fa-regular fa-bookmark"></i>
      </div>

      <div class="rating">
        <i class="fa-regular fa-star"></i>
        <span>${item.vote_average}</span>
      </div>

      <div class="play">
        <i class="fa-regular fa-circle-play"></i>
      </div>

    </div>
  </div>
  <div class="card-body">
    <h3 class="card-title card-title1">${item.original_title}</h3>

    <div class="card-info">
      <span class="year">${item.release_date}</span>
    </div>
  </div>

</div>`
 moiveBoxe.appendChild(boxe)
})
}
const showMovies = (data) => {
  data.forEach((item) => {
    const box = document.createElement("div")
    box.classList.add("swiper-slide")
     box.innerHTML=`<div class="movie-card" onclick="myFunction('${IMGPATH + item.poster_path}','${item.original_title}','${item.release_date}')">
      <div class="card-head">
       <img src="${IMGPATH + item.poster_path}" alt="" class="card-img" >

         <div class="card-overlay">
           <div class="bookmark">
             <i class="fa-regular fa-bookmark"></i>
           </div>

           <div class="rating">
             <i class="fa-regular fa-star"></i>
             <span>${item.vote_average}</span>
           </div>

           <div class="play">
             <i class="fa-regular fa-circle-play"></i>
           </div>
         </div>
       </div>
       <div class="card-body">
         <h6 class="card-title">${item.original_title}</h6>

         <div class="card-info">
           <span class="year">${item.release_date}</span>
         </div>
       </div>
     </div>
   </div>`
    moiveBox.appendChild(box);
  })
}

const complete=()=>{
  moiveBoxee.innerHTML = ""
  all.style.display="block";
}

moiveSearch.addEventListener("keyup",function(e){
    if(e.target.value!=""){
     moiveBoxee.innerHTML = "";
      all.style.display="none"
      moiveBoxee.style.display="flex";
      getMoviesD(SEARCHAPI+e.target.value);
    }else{
      complete();
    }
})
getMoviesD(SEARCHAPI);
getMovies(APIURL);
