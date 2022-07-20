let nextpagemovie=document.querySelector(".play-container")

var geturl=window.location.search.slice(1)
geturl= geturl.replace(/=/g,'":"')
geturl= geturl.replace(/&/g,'","')

geturl='{"'+geturl+'"}'
var obj=JSON.parse(geturl)
console.log(obj.img)
console.log(obj.title)
console.log(obj.year)


function myFunction(){
    let box=document.createElement("div")
    box.classList.add("next-page-complete")
    box.innerHTML=`<div class="next-page-complete">
    <div class="text-load ">
        <h2 class="name">Sonic The Hedgehog 2</h2>
        <p class="real">${obj.year}</p>
        <div class="rating">
            <div class="number">IMDb</div>
            <div class="number1">7.1</div>
            <div class="time"> 2 h 30 min</div>
            <div class="ray"> X-Ray</div>
            <div class="uaa">U/A 13+</div>
        </div>
        <p class="para">The worlds favorite blue hedgehog is back! Dr. Robotnik returns, this time with help from <br> Knuckles, in search of a powerful emerald. Sonic, along with his new sidekick Tails, embarks on a <br> journey to stop Dr. Robotnik's plans before it's too late.</p>
        <p class="day">Rentals include 30 days to start watching this video and 48 hours to finish once started.</p>
        <div class="purchase">
            <div class="purch1">HD <br> Rs 119</div>
            <div class="purch2">More Purchase<br> option</div>
            <div class="watch-btn watch-btn2">
                <i class="fa-solid fa-play"></i>
            </div>
        </div>
        <div class="director">
            <p>Directors</p>
            <p>Directors</p>
        </div>
        <div class=" director director1">
            <p>Starring</p>
            <p>James Marsden, Tika Sumpter, Natasha Rothwell</p>
        </div>
        <div class=" director director2">
            <p>Genres</p>
            <p>Science Fiction, Comedy, Kids, Fantasy, Adventure, Action</p>
        </div>
        <div class="director director3">
            <p>Audio languages</p>
            <p>	
                English
                , 
                English [Audio Description]
                , 
                
                Français (Canada)
                , 
                Español (España)
                
                </p>
        </div>
        <div class=" director director4">
            <p>By clicking play, you agree to our Terms of Use.</p>
            <p></p>
        </div>
        

    </div>
    <div class="img-load">
        <img src="${obj.img}" alt="" class="img-container">
    </div>
</div>`

nextpagemovie.appendChild(box)
    
}


myFunction()