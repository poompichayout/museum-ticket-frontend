import { Link } from "@nextui-org/react";
import styled from "styled-components";

const HoverableLink = styled(Link)`
  text-decoration: none;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: -5px;
    right: 0;
    width: 0;
    height: 3px;
    background-color: #0074d9;
    transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  }

  color: ${(props) => (props.active ? "#653780" : "inherit")};
  
  @media (hover: hover)
    and (pointer: fine) {
    &:hover::before {
      left: 0;
      right: auto;
      width: 100%;
    }
  }
`;

export default HoverableLink;
