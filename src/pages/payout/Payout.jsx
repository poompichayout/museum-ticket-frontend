import React, { useEffect, useState } from "react";
import {
  Title,
  Box,
  Box2,
  Payouttitle,
  Bookingtitile,
  Subheading,
  Normaltext,
  Highligttext,
  Formforinfo,
  Paymentbox,
  SubheadingBox,
  Paymentsmallbox,
  Backbutton,
  Nextbutton,
} from "./style";
import CreditDebit from "../../static/media/debitcard.png";
import Mobilebanking from "../../static/media/mobilebanking.png";
import Scanpayment from "../../static/media/qrcode.png";
import { useLocation, useNavigate } from "react-router";
import {
  Container,
  Text,
  Row,
  Col,
  Card,
  Image,
  Spacer,
} from "@nextui-org/react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useMutation } from "react-query";
import axios from "axios";
import moment from "moment";

const Payout = () => {
  const isMobile = useMediaQuery(650);
  const [payment, setPayment] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();

  const mutation = useMutation(
    () => {
      return axios
        .post("/booking/buy", {
          date: new Date(
            `${moment(state.selectedDate).format("YYYY-MM-DD")}T${
              state.selectedTime
            }`
          ),
          amount: state.ticketCount,
          pricePerTicket: 150,
          payment_method: payment,
          phone: mobile,
          email: email,
        })
        .then((res) => res.data);
    },
    {
      onSuccess: () => {},
    }
  );

  useEffect(() => {
    if (!state) {
      navigate("/booking/1");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onEmailChange = (e) => {
      setEmail(e.target.value)
  };

  const onMobileChange = (e) => {
      setMobile(e.target.value)
  };

  const onSubmit = () => {
    mutation.mutate();
  };

  return (
    <div style={{ margin: "100px auto" }}>
      <Title>Book Ticket</Title>
      <Box>
        <Box2>
          <Payouttitle>
            <Bookingtitile>Booking</Bookingtitile>
            Payout
          </Payouttitle>
          <Container css={{ mt: 50, maxWidth: isMobile ? "100%" : "60vw" }}>
            <Row
              gap={isMobile ? 0 : 2}
              css={{
                d: "flex",
                justifyContent: "center",
                flexDirection: isMobile ? "column-reverse" : "row",
              }}
            >
              <Col css={{ mx: "auto" }}>
                <Text h3 css={{ marginBottom: "20px" }}>
                  Transaction Summary
                </Text>
                <Row>
                  <Col>
                    <Text>Quantity</Text>
                  </Col>
                  <Col css={{ maxWidth: "fit-content" }}>
                    <Text>{state?.ticketCount || 1} ticket</Text>
                  </Col>
                </Row>
                <Row>
                  <Col css={{ d: "flex", alignItems: "center" }}>
                    Entry ticket
                  </Col>
                  <Col css={{ maxWidth: "fit-content" }}>
                    <Text>150 THB</Text>
                  </Col>
                </Row>
              </Col>
              {isMobile && <Spacer y={1} x={0} />}
              <Col
                css={{
                  maxWidth: "fit-content",
                  mx: "auto",
                }}
              >
                <Card shadow={false} css={{ mx: "auto" }} bordered>
                  Time Remaining:{" "}
                  <span>
                    <h4>09:59</h4>
                  </span>
                </Card>
              </Col>
            </Row>
          </Container>

          <Container
            css={{ backgroundColor: "#F7B733", d: "flex", py: 10, mt: 20 }}
          >
            <Text b css={{ fontWeight: "$bold" }}>
              Summary Transaction
            </Text>
            <Text b css={{ fontWeight: "$bold" }}>
              {state?.ticketCount ? state?.ticketCount * 150: 150} THB
            </Text>
          </Container>

          <Container>
            <Row
              justify="center"
              css={{ flexDirection: "column", margin: "0 auto" }}
            >
              <SubheadingBox>
                <Subheading>Order Confirmation</Subheading>
                <Highligttext>
                  ** Please fill in all information to confirm the order
                </Highligttext>
              </SubheadingBox>

              <Row
                css={{ my: 20, flexDirection: isMobile ? "column" : "row" }}
                gap={isMobile ? 0 : 2}
              >
                <Col>
                  <Normaltext>Email</Normaltext>
                  <Formforinfo
                    type="text"
                    name="name"
                    placeholder="Please type E-mail Address"
                    onChange={onEmailChange}
                  />
                </Col>
                <Col>
                  <Normaltext>Mobile</Normaltext>
                  <Formforinfo
                    type="text"
                    name="name"
                    placeholder="Mobile No."
                    onChange={onMobileChange}
                  />
                </Col>
              </Row>
            </Row>
            <Row justify="center">
              <Paymentbox>
                <Subheading>Payment</Subheading>
                <br />
                <Normaltext>Choose a payment gateway</Normaltext>
                <br />
                <Row justify="center" align="center">
                  <Paymentsmallbox active={payment === 'Visa'} onClick={() => setPayment('Visa')}>
                    <Image src={CreditDebit} width={80} />
                    {!isMobile && "Credit/Debit"}
                  </Paymentsmallbox>
                  <Paymentsmallbox active={payment === 'Promptpay'} onClick={() => setPayment('Promptpay')}>
                    <Image src={Mobilebanking} width={80} />
                    {!isMobile && "Mobile banking"}
                  </Paymentsmallbox>
                  <Paymentsmallbox active={payment === 'Mobile Banking'} onClick={() => setPayment('Mobile Banking')}>
                    <Image src={Scanpayment} width={80} />
                    {!isMobile && "Scan payment"}
                  </Paymentsmallbox>
                </Row>
              </Paymentbox>
            </Row>
            <Row css={{ mt: 20 }}>
              {mutation.isError && (
                <Card color="error">
                  <Text
                    css={{ fontWeight: "$bold", color: "$white" }}
                    transform="capitalize"
                  >
                    {mutation.error.response.data.message}
                  </Text>
                </Card>
              )}
              {mutation.isSuccess && (
                <Card color="success">
                  <Text
                    css={{ fontWeight: "$bold", color: "$white" }}
                    transform="capitalize"
                  >
                    {mutation.data.message}
                  </Text>
                </Card>
              )}
            </Row>
            <Row justify="center">
              <Backbutton onClick={() => navigate("/booking/1")}>
                Back
              </Backbutton>
              <Nextbutton onClick={onSubmit}>Book</Nextbutton>
            </Row>
          </Container>
        </Box2>
      </Box>
    </div>
  );
};
export default Payout;
