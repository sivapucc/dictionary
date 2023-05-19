var container = document.createElement('div');
container.className = 'container';
var box = document.createElement('div');
box.className = 'box';
container.appendChild(box);
document.body.appendChild(container);
var input = document.createElement('input');
input.setAttribute("id","input");
input.setAttribute("placeholder","Enter the word");
var search = document.createElement('button');
search.className = 'search';
search.classList.add("mic","btn","btn-primary");
search.addEventListener('click', dic);
var si=document.createElement('i');
si.classList.add("fa","fa-search");
search.appendChild(si);
var dis=document.createElement('div');
dis.className="dis";
dis.innerHTML="Please Enter any Word!"
var mic=document.createElement('button');
mic.classList.add("mic","btn","btn-primary");
mic.innerHTML="Pronounce";
mic.addEventListener('click', sound);
var h1=document.createElement('h1');
h1.innerHTML="Dictionary";
h1.className="h1";

box.append(h1,input,search,mic,dis);

async function dic(){
    try{
        var word=document.getElementById("input").value;
        var api =await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        var res= await api.json();
        var syn=res[0].meanings[0].definitions[0].synonyms[0];
        var ant=res[0].meanings[0].definitions[0].antonyms[0];
        var ex=res[0].meanings[0].definitions[0].example;
        
        
        dis.innerHTML=`<b>Definition</b>:  ${res[0].meanings[0].definitions[0].definition}<br><br>
                        <b>Example</b>:  ${ex}`;
        

}catch{
        dis.innerHTML="Please Enter a valid word";
    }

}

async function sound(){
    try{
        var word=document.getElementById("input").value;
        var api =await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        var res= await api.json();
        var audio=document.createElement("audio");
        audio.src=`${res[0].phonetics[0].audio}`;
        audio.type="audio/mp3"
        audio.play()
    }catch{
        dis.innerHTML="Please Enter a valid word";
    }
    
}