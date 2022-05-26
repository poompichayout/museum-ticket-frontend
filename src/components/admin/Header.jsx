import {
  Col,
  Container,
  Row,
  Text,
  useBodyScroll,
  Link as NextUILink,
  Button,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const location = useLocation();
  const activeAboutPage = location.pathname === "/about";
  const isMobile = useMediaQuery(960);
  // eslint-disable-next-line no-unused-vars
  const [expanded, setExpanded] = useState(false);

  // To avoid scrolling the body when mouse is hovered over the top nav on mobile
  const [, setBodyHidden] = useBodyScroll(null, { scrollLayer: true });

  useEffect(() => {
    if (!isMobile) {
      setExpanded(false);
      setBodyHidden(false);
    }
  }, [isMobile, setBodyHidden]);
  return (
    <Container
      as="nav"
      display="flex"
      wrap="nowrap"
      alignItems="center"
      fluid
      css={{
        position: "sticky",
        top: 0,
        backdropFilter: "saturate(180%) blur(10px)",
        zIndex: 3000,
        height: 76,
      }}
    >
      <Col>
        <Link to="/admin">
          <NextUILink as="span" color="$text">
            <Text
              h3
              weight={"bold"}
              css={{
                textGradient: "45deg, $yellow600 20%, $yellow800 50%",
              }}
            >
              {isMobile ? "Admin" : "Donjai All Museum Admin"}
            </Text>
          </NextUILink>
        </Link>
      </Col>
      {!isMobile && (
        <Col css={{ marginRight: "$2" }}>
          <Row justify="flex-end" align="center">
            <Link to="/">
              <NextUILink
                as="span"
                style={{
                  fontWeight: activeAboutPage ? "bold" : "normal",
                }}
              >
                Home
              </NextUILink>
            </Link>
          </Row>
        </Col>
      )}
      {isMobile && (
        <Col>
          <Row justify="flex-end">
            <Button
              light
              size="sm"
              iconRight={<FontAwesomeIcon icon={faBars} />}
            />
          </Row>
        </Col>
      )}
    </Container>
  );
};

export default Header;
