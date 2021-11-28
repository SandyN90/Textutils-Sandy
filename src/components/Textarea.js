import React, {useState} from 'react';

export default function Textarea(props) {
    const [text, settext] = useState('');
    const toHandleOnChange= (event)=>{
        settext(event.target.value);
    }

    
        const tohandleUpperCase = ()=>{
            const newText = text.toUpperCase();
            settext(newText);
        }
    
        
        const tohandleLowerCase = ()=>{
            settext(text.toLowerCase());
        }
    
        const tohandleClearText = ()=>{
            settext('');
        }
    
        const tohandleCopyText = ()=>{
            var text = document.getElementById("textArea");
            text.select();
            navigator.clipboard.writeText(text.value);
        }
    

    const tohandleRemoveSpace = ()=>{
        const removeSpace = text.split(/[ ] +/);
        settext(removeSpace.join(" "));
    }
    
   
    return (
        <>
        <div className={`text-${props.textmode==='dark'?'light':'dark'} mb-3`}>
        <div className="container my-3">
        <form>  
        <div className= "form-group my-3">
            <label className={`text-${props.textmode==='light'?'dark':'light'} mb-3`} htmlFor="exampleFormControlTextarea1">Example textarea</label>
            <textarea className={`form-control bg-${props.textmode==='dark'?'secondary':'light'} text-${props.textmode==='dark'?'light':'dark'} mt-3`} value={text} onChange={toHandleOnChange} id="textArea" rows="8"></textarea>
        </div>
        <button type="button" onClick={tohandleUpperCase} className="btn btn-primary mx-1">UpperCase</button>
        <button type="button" onClick={tohandleLowerCase} className="btn btn-primary mx-1">LowerCase</button>
        <button type="button" onClick={tohandleClearText} className="btn btn-primary mx-1">ClearText</button>
        <button type="button" onClick={tohandleCopyText} className="btn btn-primary mx-1">CopyText</button>
        <button type="button" onClick={tohandleRemoveSpace} className="btn btn-primary mx-1">Remove Extra Spaces</button>
        
        </form> 

        <div className={`text-${props.textmode==='dark'?'light':'dark'}`}>
            <h2 className="mt-4"><strong>This is Analysis : </strong></h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Nothing to preview!'}</p>
        </div>    
        </div> 
        </div>
        </>
    )
}
