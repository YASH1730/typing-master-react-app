const toTypedWord = []
const typedWord = []

function check(toTypedWord , typedWord)
{
    let correct = 0;
    let wrong  = 0;
    let length = 0
    if(toTypedWord.length > typedWord.length)
    {
        length = typedWord.length;
        wrong = toTypedWord.length - typedWord.length
    }
    else
    {
        length = toTypedWord.length;
    }
    for(let index = 0 ; index<length ; index++)
    {
        if(toTypedWord[index] == typedWord[index])
        { correct += 1; }
        else
        { wrong += 1; }
    }


    return(
        {
            "correct" : correct,
            "wrong" : wrong
        }
    );
}





function getParagraph()
{
    fetch('./paragraphs.json' ,{method: 'POST'}).then( (data)=>{
        console.log(data);
        return data.json();
    }).then( (data)=>{
        console.log(data);
    }).catch( (error)=>{
        console.log(error)
    })
    
}


getParagraph()


function start()
{
    let a = Math.random()*11;
    document.getElementById('data').innerHTML = "";

    document.getElementById('textarea').value = "";
}

