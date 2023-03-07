import Dashboard from "./dashboard";
import "./Book.css"
import { useState } from "react";


const options=[
  {
      label:"Stephen Grider",
      value:"Stephen Grider"
  },
  {
      label:"Colt Steele",
      value:"Colt Steele"
  },
  {
      label:"Zahid Anjum",
      value:"Zahid Anjum"
  },
  {
    label:"Mudasir",
    value:"Mudasir"
},
]

const Book=()=>{
    const [open , setOpen]=useState(false);
    const [select, setSelect]=useState(options[0]);
    

    const renderedOptions=options.map((option)=>{
      if (option.value===select.value){
          return null;
      };
      return (
      <div className="item"
      key={option.value}
      onClick={()=>setSelect(option)}> 
      {option.label} 
      </div>
      )
  });

  
    return (
        <div>
            <Dashboard/>
          
            <div className="ui centered card">
            <h3 className="ui center aligned header book">Book an Expert</h3>

            <form>
              <label className="ui label l1">Select an Expert</label>      
            <div onClick={()=>setOpen(!open)} className={`ui selection dropdown ${ open ? "visible active" :""}`}>
            <i className="dropdown icon"></i>
            <div className="text">{select.label}</div>
            <div className={`menu ${ open? "visible transition" :""}`}>
            {renderedOptions}
            </div>
            </div>

            <div className='ui labeled input date'>
            <div className="ui label l2"> Date</div>
            <input type="date"required/>
            </div>

            <div className='ui labeled input time'>
            <div className="ui label l3"> time</div>
            <input type="time"required/>
            </div>

            <div className='buttonBox'>
            <button type='submit' className='ui large primary button'>Book</button>
            </div>
            </form>
                
  </div>
        </div>
    )
}
export default Book;