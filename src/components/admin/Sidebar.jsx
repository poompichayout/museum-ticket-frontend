import { Row, Text, Grid } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import HoverableLink from "./HoverableLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartColumn,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

const Categories = [
  { label: "Statistics", icon: faChartColumn, to: "/admin/statistics?range=1" },
  { label: "Schedule", icon: faCalendarDays, to: "/admin/schedule" },
];

const Sidebar = () => {
  const isMobile = useMediaQuery(650);
  return (
    <div>
      <Text h4>Panel</Text>
      <Grid.Container gap={isMobile ? 0 : 1}>
        {Categories.map((category) => {
          return (
            <Row key={category.label} style={{ marginTop: 20 }}>
              <Link to={category.to}>
                <HoverableLink as="span">
                  <FontAwesomeIcon icon={category.icon} /> {category.label}
                </HoverableLink>
              </Link>
            </Row>
          );
        })}
      </Grid.Container>
    </div>
  );
};
export default Sidebar;
