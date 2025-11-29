let input_field = document.getElementById('input-field');
let btn= document.getElementById('btn');

async function dictionary(word){
    try{
        let result_div = document.getElementById('result');
        result_div.innerHTML = '';
        let response = await  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        let data = await  response.json();
        console.log(data);
        result_div.innerHTML +=`<h1>Word:<span>${data[0].word}</span></h1>
        <p><span>Grammer:</span>${data[0].meanings[0].partOfSpeech}</p>
        <p><strong>Meanings:</strong>${data[0].meanings[0].definitions[0].definition}</p>`;
        if(data[0].meanings[0].synonyms.length ===0){
            result_div.innerHTML +=`<p><strong>Synonyms:</strong>Not Found</p>`;
        }else{
            for(var i = 0; i<data[0].meanings[0].synonyms.length; i++){
                result_div.innerHTML += `<p class="synonyms"><strong>Synonyms:</strong><li>${data[0].meanings[0].synonyms[i]}</li></p>`
            }
        }
        if(data[0].meanings[0].antonyms.length ===0){
            result_div.innerHTML +=`<p><strong>Antonyms:</strong>Not Found</p>`;
        }else{
            for(var i = 0; i<data[0].meanings[0].antonyms.length; i++){
                result_div.innerHTML += `<p class="antonyms"><strong>Antonyms:</strong><li>${data[0].meanings[0].synonyms[i]}</li></p>`
            }
        }
        result_div.innerHTML +=`<button><a href="${data[0].sourceUrls}" target="_blank">Read more...</a></button>`
    }
    catch(error){
        let result_div = document.getElementById('result');
        result_div.innerHTML += `<span style="color:red;font-weight:550">Not found:Failed to fetch</span>`  
    }
    
    
};

function error(){
    let result_div = document.getElementById('result');
    if(!input_field.value){
        result_div.innerHTML = `<span style="color:red;font-weight:550">Enter a word to search</span>`
    }else{
        dictionary(input_field.value);
    }
};
btn.addEventListener('click',error);