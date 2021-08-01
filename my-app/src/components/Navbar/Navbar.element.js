import styled from "styled-components"

export const Nav = styled.nav`
height:80px;
display:flex;
justify-content:space-between;
align-items:center;
position:sticky;
top:0;
z-index:999;
background:#101522;
padding:0 8rem;
`

export const Heading = styled.h1`
color:#fff;

`
export const Link = styled.a`
color:#fff;
margin:0 1rem;
cursor:pointer;

`

export const Button = styled.button`
padding:0.5rem 1.5rem;
background-color:#512D6D;
border-radius:5px;
margin-left:2rem;
color:#fff;
font-size:1rem;
border:none;

cursor:pointer;
&:hover {
    background:black;
}
`