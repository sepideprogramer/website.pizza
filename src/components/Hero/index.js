import React,{useState} from 'react'
import Navbar from '../Navbar'
import {HeroContainer ,HeroContent,HeroItems,HeroH1,HeroP,HeroBtn} from './HeroElement'
import Sidebar from '../../Sidebar'
 const Hero = () => {
 
const [isOpen,setIsOpen] = useState(false);

const toggle =() =>{
    setIsOpen(!isOpen)
};

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                     <HeroH1> بهترین پیتزا</HeroH1>
                    <HeroP>آماده در 60 ثانیه</HeroP>
                    <HeroBtn>سفارش</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
};
export default Hero;
