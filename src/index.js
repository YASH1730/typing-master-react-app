import react from 'react'
import reactDom from 'react-dom'
import {Heading , Totype , TextArea, Div} from './main'
// import {Div, Heading, TextArea} from './main'
import './style.css'



reactDom.render(
    <>
        <Heading ></Heading>

        <Div border="2px solid red" width="200px" height="max-content">
            <Totype></Totype>
            <TextArea border="2px solid red">aman</TextArea>
        </Div>
        {/* <Div border = "2px solid red" width="90px" height="200px"></Div> */}
        {/* {getpara(Math.random()*11 , "data")} */}
    </>,
    document.getElementById('root')
);
















var paragraph = "";

function getpara( randomNumber , destinationId)
{

    var xhr = new XMLHttpRequest();
    var response = "";

    xhr.open('GET' , './paragraphs.json');
    xhr.send();

    xhr.onload = function(){

        response = JSON.parse(this.response)[randomNumber];
        document.getElementById(destinationId).innerHTML = response;
    }
    
}




