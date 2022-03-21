import React, { Children, cloneElement, useRef } from "react";
import { useState, useEffect } from "react";
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import {Page} from './Page';
import { SliderContext } from "./Slider-context";

const TRANSITION_DURATION = 300;

const Slider = ({ children, infinite }) => {

    const [offset, setOffset] = useState(0)
    const [width, setWidth] = useState(450)
    const [pages, setPages]= useState([])
    const [transitionDuration, setTransitionDuration] = useState(TRANSITION_DURATION)
    const [clonesCount, setClonesCount] = useState({ head:0, tail: 0})

    const handleLeftArrowClick = () => {

        setOffset( (currentOffset) => {

            const newOffset = currentOffset + width;

            return newOffset;
        })
    } 
    const handleRightArrowClick = () => {
        
        setOffset( (currentOffset) => {

            const newOffset = currentOffset - width

            const maxoffset = -(width * (pages.length - 1))

            return Math.max(newOffset, maxoffset);
        })
    }

    useEffect(() => {
        
        if(infinite){
            setPages([
                cloneElement(children[Children.count(children) -1]),
                ...children,
                cloneElement(children[0]),
            ])
            setClonesCount({head:1, tail: 1})
            return
        }
        setPages(children)
    }, [children, infinite])

    const windowElRef = useRef()

    // useEffect(() => {
    //     setInterval(() => {
    //         handleRightArrowClick()
    //     }, 5000);
    // }, []);

    useEffect(() =>{

        const resizeHandler = () => {
            const windowElWidth = windowElRef.current.offsetWidth

            setWidth(windowElWidth)

            setOffset( -(clonesCount.head) * width)
        }

        resizeHandler()

        window.addEventListener('resize', resizeHandler)

        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    }, [clonesCount, width])

    useEffect(() => {
        if (!infinite) return

        if (offset == 0) {
            setTimeout(() => {
            setTransitionDuration(0)
              setOffset( -( width * (pages.length - 1 - clonesCount.tail)))  
            }, TRANSITION_DURATION)
            return
        }
        if ( offset == -(width * (pages.length - 1))) {
            setTimeout(() => {
                setTransitionDuration(0)
                setOffset( -(clonesCount.head * width ))  
              }, TRANSITION_DURATION)
              return
        }
    }, [infinite, offset, width, pages, clonesCount])

    useEffect(() => {
        if (transitionDuration === 0){
            setTimeout(() => {
                setTransitionDuration(TRANSITION_DURATION)
            }, TRANSITION_DURATION)
        }
        
    }, [transitionDuration])

    return (
        <SliderContext.Provider value={{ width }}>
            <div className="slider">
                <FaChevronLeft className="slider__arrow" onClick={handleLeftArrowClick}/>
                <div className="slider__window" ref={windowElRef}>
                    <div className="slider__items" style={{
                            transitionDuration: `${transitionDuration}ms`,
                            transform: `translateX(${offset}px)`}}>
                        {pages}
                    </div>
                </div>
                <FaChevronRight className="slider__arrow" onClick={handleRightArrowClick}/>
            </div>
        </SliderContext.Provider>
    );
}

Slider.Page = Page;
export default Slider;