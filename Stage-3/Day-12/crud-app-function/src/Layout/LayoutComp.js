import React,{useContext} from 'react'
import Content from './Content'
import HeaderComp from './HeaderComp'
import ThemeContext from '../ThemeContext'

export default function LayoutComp(props) {

    const themes =  useContext(ThemeContext)

    return (
<div className='container-fluid layoutClass' style={themes}>
<HeaderComp fun={props.funParent}/>
<Content/>
</div>
    )
}
