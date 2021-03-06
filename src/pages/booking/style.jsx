import style from "styled-components";

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
    color: #727171;
`;

export const Bookingtitile = style.div`
    display:flex;
    padding-left: 5em;
    padding-right: 3em;
    color: #E24E42;
`;

export const Row = style.li`
    display: flex;
    width:100%;
`;

export const ContentLeft = style.ul`
    padding: 2em;
    width: 20%;
    font-size: 1em;
    color: #727171;
    text-align: center;
`;

export const ContentRight = style.ul`
    width: 65%;
    font-size: 1em;
    margin-top: 4em;
    flex-wrap: wrap;
`;

export const NotSelectbutton = style.button`
    border-radius: 5px; 
    background-color: ${props => props.disabled? "#ff6c5f": props.active ? "#E37222":"#FFFFFF"};
    width: 10%;
    padding: 0.5em;
    text-align: center;
    margin-top: 1em;
    color: ${props => props.disabled? "#FFFFFF": props.active ? "#FFFFFF":"#E37222"};
    border-color:  ${props => props.disabled? "#E24E42": "#E37222"};
    border-style: solid;
    border-width: 1px;
    margin-right: 1em;

    &:hover {
        background-color: #E37222;
        color: white;
    }

    &:active {
        background-color: #E37222;
        color: white;
    }
`;

export const Timeclosebutton = style.div`
    border-radius: 5px; 
    background-color: #F4F2F2;
    width: 10%;
    padding: 0.5em;
    text-align: center;
    margin-top: 1em;
    color: #939393;
    border-color: #939393;
    border-style: solid;
    border-width: 1px;
    margin-right: 1em;
`;

export const Almostclosebutton = style.div`
    border-radius: 5px; 
    background-color: #ff6c5f;
    width: 10%;
    padding: 0.5em;
    text-align: center;
    margin-top: 1em;
    color: white;
    border-color: #E24E42;
    border-style: solid;
    border-width: 1px;
    margin-right: 1em;
`;

export const Numberofticket = style.div`
    text-align: center;
    font-size: 1.25em;
    margin-right: 1em;
    margin-top: 3.2em;
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
    margin-top: 4em;
    padding: 0.5em;
`;

export const Nextbutton = style.button`
    border-radius: 10px; 
    background-color: ${props => props.disabled ? "#F4F2F2":"#E37222"};
    width: 100px;
    text-align: center;
    color: white;
    border-color: ${props => props.disabled ? "black":"#E37222"};
    margin-top: 4em;
    padding: 0.5em;
    border-style: solid;
    border-width: 1px;
`;

export const Warning = style.div`
    width: 50%;
    border-width: 2px;
    border-style: solid;
    border-color: #F7B733;
    margin: auto;
    margin-top: 2em;
    padding: 0.5em;
    background-color: rgba(247, 183, 51, 0.2);
    text-align: center;
    color: #413E3E;
    font-size: 0.8em;
`;

export const Icon1 = style.div`
    padding: 0.5em;
    text-align: center;
    margin-top: 1.4em;
    color: #727171;
    margin-right: 1em;
`;

export const Icon2 = style.div`
    padding: 0.3em;
    text-align: center;
    margin-top: 0.8em;
    color: #727171;
    margin-right: 1em;
`;

export const Icon3 = style.div`
    text-align: center;
    color: #727171;
    margin-left: 30em; 
    margin-right: 1.2em;
    margin-top: 4em;
`;

export const Icon4 = style.div`
    text-align: center;
    color: #727171;
    margin-right: 1.2em;
    margin-top: 4em;
`;