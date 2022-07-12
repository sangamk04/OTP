import React,{useState,useRef} from "react";
import PropTypes from "prop-types";
import PinItem from "./PinItem";

const Pin =({length, setOtpHandler}) =>{
    const inputRef = useRef([]);
    const [inputBoxlength] = useState(new Array(length).fill(1));
    const [inputBoxValue,setInputBoxValue] =useState(
        new Array(length).fill("")
        );
    const handleChange = (e, index)=>{
        inputBoxValue[index] = e.target.value;
        setInputBoxValue(inputBoxValue)
        if (e.target.value.length>0 && index < length -1){
            inputRef.current[index+1].focus();
        }
        // console.log(inputBoxValue);
        setOtpHandler(inputBoxValue.join(""))
    }; 
const handleBackspace=(e, index)=>{
    if(index>0){
    inputRef.current[index-1].focus();
}
inputBoxValue[index] = e.target.value;
setInputBoxValue(inputBoxValue)
setOtpHandler(inputBoxValue.join(""))
}

const handlePaste=(e)=>{
    e.preventDefault();
    const data=e.clipboardData
    .getData("text")
    .split("")
    .filter((item,index)=>index<length);
    data.forEach((value,index)=>{
        inputBoxValue[index]=value;
        inputRef.current[index].value=value;
        if(index<length-1){
            inputRef.current[index+1].focus();
        }
    })
}
    return(
        <div onPaste={handlePaste} style={{border:"4px solid red",display:"flex",justifyContent:"center",width:"400px",marginLeft:"500px"}}>
           

             {inputBoxlength.map((_,index)=>(
                 <PinItem
                  key={index} 
                  ref={(element) =>(inputRef.current[index] = element)}
                onChange={(e) => handleChange(e,index)}
                onBackSpaceHandler={(e)=>handleBackspace(e,index)}
               />                                       
            ))}
        </div>
    );
};



export default Pin;


Pin.propTypes = {
    length: PropTypes.number.isRequired,
    pinInput:PropTypes.string,
    setPin:PropTypes.func,
};