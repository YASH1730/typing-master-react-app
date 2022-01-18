var styleObj = {
    "div":{
        "width" : "100%",
        "color" : "red"
    }
}


function Div(props=null)
{
    console.log(props)
    return(
        // <div style={{"width":"10px"}}></div>
        <div style={props}></div>
    )
}


function Heading(props=null)
{
    return(
        <h1 style={props} id="heading">Typing Master</h1>
    )
}


function Totype()
{
    return (
        <div id="dataDiv">

            <p id="data">

            </p>
            
        </div>
    )
}


function TextArea(props)
{
    return(
        <textarea style={props} id="inputByUser"></textarea>
    )
}

export {Heading , Totype , TextArea , Div};