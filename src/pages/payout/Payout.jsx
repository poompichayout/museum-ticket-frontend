import React from 'react'
import { 
    Title,Box,Box2,Payouttitle,Bookingtitile,Row,Subheading,TimeButton,Normaltext,
    Highligttext,ContentLeft,ContentRight,Summarybox,Summarytext,Summarybath,Formforinfo,
    Paymentbox,SubheadingBox,Paymentsmallbox,Backbutton,Nextbutton,Formbox,ButtonBox, Icon1,Imginsmallbox
} from './style';
import { IoTicketOutline } from 'react-icons/io5';
import CreditDebit from '../../img/debitcard.png';
import Mobilebanking from '../../img/mobilebanking.png';
import Scanpayment from '../../img/qrcode.png';


export const Payout = () => {
  return (
    <div>
    <Title>Book Ticket</Title>
    <Box>
        <Box2>
            <Payouttitle>
            <Bookingtitile>Booking</Bookingtitile>
            Payout
            </Payouttitle>
            <Row>
                <SubheadingBox><Subheading>Transaction Summary</Subheading></SubheadingBox>
                <TimeButton>
                   Time Remaining: <Highligttext>09:59</Highligttext>
                </TimeButton>
            </Row>
            <Row>
                <ContentLeft>
                    <Normaltext>Quantity</Normaltext>
                </ContentLeft>
                <ContentRight>
                    <Normaltext>1 ticket</Normaltext>
                </ContentRight>
            </Row>
            <Row>
                <ContentLeft>
                    <Icon1><IoTicketOutline size={25} /></Icon1>
                    Entry ticket
                </ContentLeft>
                <ContentRight>
                    <Normaltext>150 THB</Normaltext>
                </ContentRight>
            </Row>
            <Summarybox>
                <Summarytext>Summary Transaction</Summarytext>
                <Summarybath>150THB</Summarybath>
            </Summarybox>

            <SubheadingBox><Subheading>Order Confirmation</Subheading></SubheadingBox>
            <ul><Highligttext>** Please fill in all information to confirm the order</Highligttext></ul>
            <Row>
                <ContentLeft>
                    <Normaltext>Email</Normaltext>
                        <Formforinfo type="text" name="name" placeholder="Please type E-mail Address"/>
                </ContentLeft>
                <ContentRight>
                    <Normaltext>Mobile</Normaltext>
                        <Formbox><Formforinfo type="text" name="name" placeholder="Mobile No."/></Formbox>
                </ContentRight>
            </Row>
            <Row>
                <Paymentbox>
                    <Subheading>Payment</Subheading><br/>
                    <Normaltext>Choose a payment gateway</Normaltext><br/>
                    <Paymentsmallbox>
                        <Imginsmallbox><img src={CreditDebit} width='60%' /></Imginsmallbox>
                        Credit/Debit
                    </Paymentsmallbox>
                    <Paymentsmallbox>
                        <Imginsmallbox><img src={Mobilebanking} width='60%' /></Imginsmallbox>
                        Mobile banking
                    </Paymentsmallbox>
                    <Paymentsmallbox>
                        <Imginsmallbox><img src={Scanpayment} width='60%' /></Imginsmallbox>
                        Scan payment
                    </Paymentsmallbox>
                </Paymentbox>
            </Row>
                <ButtonBox>
                    <Backbutton>Back</Backbutton>
                    <Nextbutton>Next</Nextbutton>
                </ButtonBox>
                
        </Box2>
    </Box>
    </div>
  )
}
export default Payout