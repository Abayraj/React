import { useEffect,useState } from "react";
import images from "../assets"

const slider =()=>{
    const [active,setActive] = useState(0);
    const [sliderStyle,setSliderStyle]=useState({});

    const nextimage =()=>
        setActive((prev)=>(prev < images.length-1 ? prev+1 : 0));

        const previousImage = ()=>
            setActive((prev)=>(prev > 0 ? prev -1 : images.length-1));

            // useEffect(()=>{

            // })
        return (
            <div className="slider">
                {images.map((image,index)=>
                index === active && (
                    <img className="image" src={image} key={index}/>
                )
                )}
                <div className="btn-wrapper-slider">
                <button className="btn-left" onClick={nextimage}>&lt;</button>
                <button className="btn-right" onClick={previousImage}> &gt;</button>
                </div>
                <div className="indicators">
        {images.map((image, index) => (
          <div
            onClick={() => setActive(index)}
            className={`${index === active && "active"} indicator`}
            key={index}
          ></div>
        ))}
      </div>
                
            </div>
            
        )
        
        
    
}


export default slider;
