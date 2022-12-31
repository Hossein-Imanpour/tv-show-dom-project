const $ = document;
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
// const API_URL = 'https://fakestoreapi.com/products';
//======================================

let detail = null;
async function fetchEpisode () {
    const resolve = await fetch('file.json');
    const data = await resolve.json();

    detail = data;
    // console.log(detail);
    dataRender(detail);
}
fetchEpisode()



function dataRender(arr){
             arr.forEach(episode => {
                // console.log(episode);
                const {name , season , number , url, image, summary} = episode
                let pEl = $.createElement('p');
                pEl.textContent = name; pEl.classList.add('Text-Inside-Main'); //==
                const option = $.createElement('option');
                option.classList.add(".op")
                
                const cardDiv =$.createElement('div'); cardDiv.classList.add('card') ; mainEl.appendChild(cardDiv);
                      
                selectOption.appendChild(option)
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
                      


                      //===========
                      
                     
                     
                    
                    //===
                    });//end of first loop!
                    //==
                    // arr.forEach((episode)=>{

                    //     // console.log(episode);
                    //     // inputEl.addEventListener('input' , ()=>{
                    //     //     const {name} = episode;

                    //     //     console.log(inputEl.value);

                    //     // })
                        
                       


                    // });
                
                
                };

                // ==== search part

                inputEl.onkeyup = function (){
                    let result = inputEl.value.toLowerCase();
                    searchOperation(result)
                }

