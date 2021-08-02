import styled from 'styled-components'
import { Div } from "./FirstSection.element"
import { Button } from './FirstSection.element'
export const Footerdiv = styled(Div)`
flex-direction:column;
padding-top:12rem;
padding-bottom:0;
width:100%;
`
export const SmallFooterDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;

`
export const Span = styled.span`
color:#fff;
margin : 0 2rem;
`

export const Logo = styled.h3`
margin-right:auto;
`

export const Link = styled.a`
color:#fff;
font-size:1rem;
margin: 0 1rem;
`

export const Para = styled.p`
color:#fff;
font-size:1rem;
margin:2rem 0;

`

export const Heading = styled.h3`
color:#fff;
font-size:2rem;
`
export const LogoHeading = styled(Heading)`
font-size:3rem;
padding-right:2rem;
`

export const Input = styled.input`
padding:0.5rem 2rem;
border-radius:10px;
margin-right:4px;
`

export const FooterButton = styled(Button)`
padding:0.5rem 2rem;
margin:0;
`

export const SubsDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export const GridDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:4rem 2rem;
`
export const SmallGridDiv = styled.div`
margin:1rem 4rem;
padding:0;

`

export const LinkDiv = styled.div`
margin-right:auto;
display:inline-block;

`