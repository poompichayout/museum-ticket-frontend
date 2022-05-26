import style from "styled-components";
import { Text, Container } from "@nextui-org/react";

export const Title = style.div`
    display: flex;
    font-size: 1.8em;
    color: #E24E42;
    padding-top: 0.7em;
    padding-left: 5em;
    padding-bottom: 0.7em;
    font-weight: bold; 
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #C4C4C4;
    box-shadow: 0px 4px 6px #dddddd;
`;

export const Box = style.div`
    background-color: #f2f2f2;
    padding-top: 1.5em;
    padding-bottom: 1.5em;
`;

export const Box2 = style.div`
    border-radius: 10px; 
    background-color: #FFFFFF;
    width: 85%;
    margin: auto;
    padding: 10px;
    box-shadow: 0px 4px 6px #dddddd;
`;

export const Payouttitle = style.div`
    font-size: 1.2em;
    display:flex;
    padding-bottom: 0.4em;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #C4C4C4;
    color: #E24E42;
    
`;

export const Bookingtitile = style.div`
    display:flex;
    padding-left: 5em;
    padding-right: 3em;
    color: #727171;
`;

export const Row = style.li`
    display: flex;
    width:100%;
`;

export const Subheading = style(Text)`
    font-size: 1.25em;
    color: #727171;
    font-weight: bold;
`;

export const SubheadingBox = style.div`
    margin-top: 1.5em;
`;

export const ContentLeft = style.ul`
    font-size: 1em;
    color: #727171;
`;

export const ContentRight = style.ul`
    font-size: 1em;
    margin-left: 10em;
`;

export const Normaltext = style(Text)`
    font-size: 1em;
    color: #727171;
`;

export const Highligttext = style(Text)`
    font-size: 1em;
    color: #E24E42;
`;

export const TimeButton = style.ul`
    border-radius: 5px; 
    background-color: #FFFFFF;
    width: 10%;
    border-color: #E37222;
    border-style: solid;
    border-width: 1px;
    color: #727171;
    text-align: center;
    margin-top: 1.5em;
    margin-left: 44em;
    margin-bottom: 0.1em;
    padding-top: 0.5em;
    padding-left: 1.2em;
    padding-right: 1em;
    padding-bottom: 0.1em;
`;

export const Summarybox = style.li`
    display: flex;
    width: 78%;
    background-color: #F7B733;
    margin-left: 1.5em;
    margin-top: 1em;
    
`;

export const Summarytext = style.ul`
    color: #413E3E;
    font-weight: bold;
    font-size: 1em;
    width: 20%;
`;

export const Summarybath = style.ul`
    color: #413E3E;
    font-weight: bold;
    font-size: 1em;
    text-align: right;
    width: 80%;
    margin-right: 2em;
`;

export const Formbox = style.ul`
    width: 25%;
    border: none;
    padding: 0em;
    margin: 0em;
`;

export const Formforinfo = style.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid black;
`;

export const Paymentbox = style(Container)`
    text-align: center;
    background-color: #f2f2f2;
    padding-top: 2em;
    padding-bottom: 1em;
    margin-left: 1.5em;
    border: none;
`;

export const Paymentsmallbox = style.ul`
    border-radius: 10px; 
    text-align: center;
    width: 120px;
    height: 150px;
    background-color: ${props => props.active ? "#0072F5":"#FFFFFF"};
    padding: 1em;
    border: none;
    display: inline-block;
    margin-right: 1em;
    color: ${props => props.active ? "white":"#939393"};
    cursor: pointer;

    @media only screen and (max-width: 650px) {
        width: 80px;
        height: 80px;
    }
`;

export const Backbutton = style.button`
    border-radius: 10px; 
    background-color: #FFFFFF;
    width: 100px;
    text-align: center;
    color: #E37222;
    border-color: #E37222;
    border-style: solid;
    border-width: 1px;
    margin-left: 5em;
    margin-right: 3em;
    margin-top: 2em;
    margin-bottom: 2em;
    padding: 0.5em;
`;

export const Nextbutton = style.button`
    border-radius: 10px; 
    background-color: #E37222;
    border-color: #E37222;
    width: 100px;
    border-style: solid;
    border-width: 1px;
    text-align: center;
    color: white;
    margin-top: 2em;
    margin-bottom: 2em;
    padding: 0.5em;
`;

export const Icon1 = style.div`
    display: flex;
    float:left
`;
