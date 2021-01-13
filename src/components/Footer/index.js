import React from 'react'
import { FaFacebook,
         FaInstagram,
         FaYoutube,
         FaTwitter,
 } from 'react-icons/fa';
 import{
FooterWrap,
FooterContainer,
SocialIcons,
SocialLogo,
SocialMedia,
SocialMediaWrap,
SocialIconLink
 } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">پیتزا</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="/" target="-blank" aria-label="Facebook" rel="noopener noreferrer"></SocialIconLink>
                               <FaFacebook/>
                               <SocialIconLink href="/" target="-blank" aria-label="Instagram" rel="noopener noreferrer"></SocialIconLink>
                               <FaInstagram/>
                               <SocialIconLink href="/" target="-blank" aria-label="FaYoutub" rel="noopener noreferrer"></SocialIconLink>
                               <FaYoutube/>
                               <SocialIconLink href="/" target="-blank" aria-label="FaTwitter" rel="noopener noreferrer"></SocialIconLink>
                               <FaTwitter/>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
