const $ = document;
function all(){

const headEl = $.createElement("header"); headEl.classList.add('head')
const mainEl = $.createElement("section"); mainEl.classList.add('main')
const footEl = $.createElement("footer");
$.body.append(headEl); $.body.append(mainEl); $.body.append(footEl);
const inputEl = $.createElement("input");headEl.append(inputEl); inputEl.classList.add('val'); inputEl.setAttribute('placeholder','Search Here ...')
const p = $.createElement('p') ; p.classList.add('text'); p.textContent = 'TV SHOW' ; headEl.appendChild(p)
const selectOption = $.createElement('select') ; headEl.appendChild(selectOption); selectOption.classList.add('selectItem');
const opGroup = $.createElement('option'); opGroup.innerHTML = 'All Episode'; selectOption.appendChild(opGroup) ; opGroup.classList.add('all-episode') 
const option = $.createElement('option'); option.classList.add('op');
//==
inputEl.addEventListener("input" , (e) =>{
    // console.log($.querySelectorAll(".card").getAttribute("data-name"));
    let data = $.querySelectorAll(".card");
   let result = e.target.value
   for(let card of data){
    const episodeName = card.getAttribute('data-name');
    const episodeSummary = card.getAttribute('data-summary')
    if(episodeName.toLowerCase().includes(result.toLowerCase()) ||
    episodeSummary.toLowerCase().includes(result.toLowerCase())
    ){
        card.style.display = 'inline-block';
    }else{
        card.style.display = 'none';
    }
   }
});

selectOption.addEventListener('change' , (e)=>{
    let data = $.querySelectorAll(".card");
    let result = e.target.value;
    console.log(result);
    for(let card of data){
        const episodeName = card.getAttribute('data-name');
        
        if(result == "All Episode"){
            card.style.display = 'inline-block'; 
        }else if(result.toLowerCase().includes(episodeName.toLowerCase())){
            card.style.display = 'inline-block'; 
        }else{
            card.style.display = 'none';
        }
    }
})
}
// let search_term = '';
//==
// const API_URL = 'https://fakestoreapi.com/products';
//======================================
let detail = null;
async function fetchEpisode () {
    // const resolve = await fetch('file.json');
    const resolve = await fetch('https://api.tvmaze.com/shows/82/episodes');
    const data = await resolve.json();
    detail = data;
    // console.log(detail);
    // renderSelect()
    all()
    dataRender(detail);
    // liveSearch(detail)
}
fetchEpisode()
//==
function dataRender(arr){
             arr.forEach(episode => {
                // console.log(episode);
                const {name , season , number , url, image, summary} = episode
                let pEl = $.createElement('p');
                pEl.textContent = name; pEl.classList.add('Text-Inside-Main'); //==
                const option = $.createElement('option');
                option.classList.add(".op")
                
                
                const cardDiv =$.createElement('div'); cardDiv.classList.add('card') ; $.querySelector('.main').appendChild(cardDiv);
                  cardDiv.setAttribute("data-name" , name );
                  cardDiv.setAttribute('data-summary' , summary)    
                $.querySelector(".selectItem").appendChild(option)
                cardDiv.append(pEl); 
                const img = $.createElement("img"); img.src = image.medium ; cardDiv.appendChild(img) ;img.classList.add('img')
                        const episodeSpan = $.createElement('span') ; cardDiv.appendChild(episodeSpan); episodeSpan.classList.add('card-span')
                        if(season < 9 && number > 9 ){
                            option.innerHTML = `${name}-S0${season}E${number}`;
                            episodeSpan.innerHTML = `S0${season}E${number}`;
                      }else{
                             option.innerHTML = `${name}-S0${season}E0${number}`;
                             episodeSpan.innerHTML = `S0${season}E0${number}`;
                      } 
                      const footerText = $.createElement('span'); footerText.classList.add('footerText'); footerText.innerHTML = summary;
                      cardDiv.appendChild(footerText)
                      const downLoad = $.createElement('a'); downLoad.href = url;
                      downLoad.target = '-blank'
                      downLoad.classList.add('link') ; downLoad.innerHTML = 'DOWNLOAD'
                      cardDiv.appendChild(downLoad);
                });//end of first loop!
                };

                //== live search

                // function liveSearch(data , value){
                //     const cards = $.querySelector(".card");
                //     if(value){
                //         cards && cards.remove();
                //         const filterEpisode = data.filter(
                //             ({name})
                //         )
                //     }
                // }

               