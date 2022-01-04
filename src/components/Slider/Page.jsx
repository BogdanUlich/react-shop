import '../../scss/page.scss'
import { useContext } from 'react'
import {SliderContext} from './Slider-context'

export const Page = ({ children }) => {
    const { width } = useContext(SliderContext)

    return <div style={{minWidth: `100%`, maxWidth: `100%`}}>{children}</div>
}
