import React,{forwardRef} from 'react'

const PinItem = forwardRef(({onChange,value,onBackSpaceHandler},ref) => {
    // console.log(ref)
    const handleKeyUp=(e)=>{
      // console.log(e);
        if(e.keyCode===8 && !e.target.value){
          onBackSpaceHandler(e);
        }
        else{
          onChange(e)
        }
    }
  return (
    <div>
         <input
          type={"text"} 
          maxLength={1} 
          ref={ref} 
          value={value} 
          onKeyUp={handleKeyUp}/>
    </div>
  );
});

export default PinItem;
