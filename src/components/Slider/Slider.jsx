import React, { useRef } from "react";
import { useState, useEffect } from "react";
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import {Page} from './Page';
import { SliderContext } from "./Slider-context";


const Slider = ({ children }) => {

    const [offset, setOffset] = useState(0)
    const [width, setWidth] = useState(450)

    const handleLeftArrowClick = () => {

        setOffset( (currentOffset) => {

            const newOffset = currentOffset + width;

            console.log(newOffset);

            return newOffset;
        })
    } 
    const handleRightArrowClick = () => {
        
        setOffset( (currentOffset) => {

            const newOffset = currentOffset - width;

            console.log(newOffset);

            return newOffset;
        })
    }

    const windowElRef = useRef()

    useEffect(() =>{

        const resizeHandler = () => {
            let _width = windowElRef.current.offsetWidth

            setWidth(_width)
        }

        resizeHandler()

        window.addEventListener('resize', resizeHandler)

        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    }, []);

    return (
        <SliderContext.Provider value={{ width }}>
            <div className="slider">
                <FaChevronLeft className="slider__arrow" onClick={handleLeftArrowClick}/>
                <div className="slider__window" ref={windowElRef}>
                    <div className="slider__items" style={{transform: `translateX(${offset}px)`}}>
                        {children}
                    </div>
                </div>
                <FaChevronRight className="slider__arrow" onClick={handleRightArrowClick}/>
            </div>
        </SliderContext.Provider>
    );
}

Slider.Page = Page;
export default Slider;