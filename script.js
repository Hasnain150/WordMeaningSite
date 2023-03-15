const maino=async()=>{
  
    let word=prompt("what is the word that you want to find the meaning of");
    let apif= fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+word);
    apif.then((response)=>{
        if(!response.ok){
            throw new Error("yra g")
        }
        return response.json();
    }).then((json)=>{
        console.log(json)
        let content=document.querySelector(".content");
        let iHtml=" ";
        for(let i of json){
            let meanings=i.meanings;
            let heading=document.querySelector(".heading");
            heading.innerHTML=i.word;
            for(let i of meanings){
                let definitions=i.definitions;
                for(let i of definitions){
                    let definition=i.definition;
                    let a=
                    // console.log(definition)
                    iHtml=`${iHtml} <p> ${definition}</p>  `
                }
            }
            
        }
    content.innerHTML=iHtml;
    
    
},(error)=>{
    let x=document.querySelector(".container");
    let b="<div><h1>WORD NOT FOUND</h1></div>"
    x.innerHTML=b
})
   
}
 maino();