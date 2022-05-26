import React from 'react'
import { 
    Title,Box,Box2,Payouttitle,Icon1,Icon2,Icon3,Icon4,
    Bookingtitile,ContentLeft,ContentRight,Warning,
    Row,Selectbutton,NotSelectbutton,Timeclosebutton,
    Almostclosebutton,Nextbutton,Backbutton,Numberofticket
} from './style';
import pic1 from '../../img/ticketpage.jpg';
import { BsArrowRightCircle } from 'react-icons/bs';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { BsPlusCircle } from 'react-icons/bs';
import { BsDashCircle } from 'react-icons/bs';

const Booking = () => {
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
          <ContentLeft>
          <img src={pic1} width='100%' />
          Entry ticket 150 THB
          </ContentLeft>
          <ContentRight>
          Apr 2022
          <Row>
            <Icon1><BsArrowLeftCircle size={30} /></Icon1>
              <Selectbutton>
                Mon<br/>
                04
              </Selectbutton>
              <NotSelectbutton>
                Tue<br/>
                05
              </NotSelectbutton>
              <NotSelectbutton>
                Wed<br/>
                06
              </NotSelectbutton>
              <NotSelectbutton>
                Thu<br/>
                07
              </NotSelectbutton>
              <NotSelectbutton>
                Fri<br/>
                08
              </NotSelectbutton>
              <NotSelectbutton>
                Sat<br/>
                09
              </NotSelectbutton>
              <NotSelectbutton>
                Sun<br/>
                10
              </NotSelectbutton>
              <NotSelectbutton>
                Mon<br/>
                11
              </NotSelectbutton>
              <NotSelectbutton>
                Tue<br/>
                12
              </NotSelectbutton>
              <Icon1><BsArrowRightCircle size={30} /></Icon1>
            </Row>

          <br/>
          Select time
          <Row>
            <Icon2><BsArrowLeftCircle size={30} /></Icon2>
            <Timeclosebutton> 10:00 </Timeclosebutton>
            <Almostclosebutton> 11:00 </Almostclosebutton>
            <Selectbutton> 12:00 </Selectbutton>
            <NotSelectbutton> 13:00 </NotSelectbutton>
            <NotSelectbutton> 14:00 </NotSelectbutton>
            <NotSelectbutton> 15:00 </NotSelectbutton>
            <Icon2><BsArrowRightCircle size={30} /></Icon2>
          </Row>

          <Row> 
            <Icon3><BsDashCircle size={30} /></Icon3>
            <Numberofticket>1</Numberofticket>
            <Icon4><BsPlusCircle size={30} /></Icon4>
            <Backbutton>Back</Backbutton>
            <Nextbutton>Next</Nextbutton>
          </Row>

          </ContentRight>
        </Row>
      </Box2>
      <Warning>Coronavirus (COVID-19) may affect your travel plans. Learn more</Warning>
    </Box>
    </div>
  )
}

export default Booking