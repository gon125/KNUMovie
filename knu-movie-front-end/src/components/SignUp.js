import React, { useState, Component } from "react";
import styled, { css } from "styled-components";
import Textbox from "./Textbox";
import Button from "./Button";
import DatePicker from "react-datepicker";


require('react-datepicker/dist/react-datepicker.css')

function SignUp(props) {
  const axios = require('axios');

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordRepeat, setPasswordRepeat] = useState(null);
  const [name, setName] = useState(null);
  const [pnumber, setPnumber] = useState(null);
  const [address, setAddress] = useState(null);
  const [gender, setGender] = useState(null);
  const [birthDate, setBirthDate] = useState(null);
  const [job, setJob] = useState(null);

  const submitClicked =()=>{
    const url = 'http://localhost:8080/signup/'
    if (password != passwordRepeat) return (alert("password incorrect!"));

    try {
      function getFormatDate(date){
        if (date == null) return null;
        var year = date.getFullYear();              //yyyy
        var month = (1 + date.getMonth());          //M
        month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
        var day = date.getDate();                   //d
        day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
        return  year + '-' + month + '-' + day;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
      }
      const BodyJson = JSON.stringify({
        "address": address,
        "birth_date": getFormatDate(birthDate),
        "email_id": email,
        "gender": gender,
        "isAdmin": false,
        "job": job,
        "membership": "basic",
        "name": name,
        "password": password,
        "phone_number": pnumber,
      });
      console.log(BodyJson);
      axios.post(url,{
        body:JSON.parse(BodyJson)
      }).then((response) => {
        alert('Signup complete!');
        props.setSignup(false);
        console.log(response.body);
      }).catch((error)=>{
        alert(error.response.data);
        console.log(error.response.data);
      })
    }catch(error){
      console.error(error);
    }
  } 
  const backClicked =()=>{
    console.log("backClicked")
  }

  return (
    <Container {...props}>
      <Group4>
        <Group2>
          <Optional>Optional</Optional>
          <Address3>Address</Address3>
          <Textbox
            style={{
              height: 43,
              alignSelf: "stretch"
            }}
            setValue = {setAddress}
            placehold = 'input'
          ></Textbox>
          <Gender>Gender</Gender>
          <select
           style={{
            height: 43,
            backgroundColor: "rgba(224, 224, 230, 1)",
            margin: 1,
            width:200,
          }}>
            <option key = 'M' value='M'
            onClick={(v)=>setGender(v)}>Male</option>
            <option key = 'F' value='F'
            onClick={(v)=>setGender(v)}>Female</option>
            <option key = 'null' value={null}
            onClick={(v)=>setGender(v)}
            selected>null</option>
          </select>
          <BirthDate>BirthDate</BirthDate>
          <DatePicker 
            selected={birthDate} 
            onChange={date => setBirthDate(date)}/>
          <Job>Job</Job>
          <Textbox
            style={{
              height: 43,
              alignSelf: "stretch"
            }}
            setValue = {setJob}
            placehold = 'input'
          ></Textbox>
        </Group2>
        <Group3>
          <Mandatory1>Mandatory</Mandatory1>
          <Email1>Email</Email1>
          <Textbox
            style={{
              height: 43,
              alignSelf: "stretch"
            }}
            setValue = {setEmail}
            placehold = 'input'
          ></Textbox>
          <Password1>Password</Password1>
          <Textbox
            style={{
              height: 43,
              alignSelf: "stretch"
            }}
            setValue = {setPassword}
            placehold = 'input'
          ></Textbox>
          <PasswordRepeat1>Password(repeat)</PasswordRepeat1>
          <Textbox
            style={{
              height: 43,
              alignSelf: "stretch"
            }}
            setValue = {setPasswordRepeat}
            placehold = 'input'
          ></Textbox>
          <Name1>Name</Name1>
          <Textbox
            style={{
              height: 43,
              alignSelf: "stretch"
            }}
            setValue = {setName}
            placehold = 'input'
          ></Textbox>
          <Pnumber1>Pnumber</Pnumber1>
          <Textbox
            style={{
              height: 43,
              alignSelf: "stretch"
            }}
            setValue = {setPnumber}
            placehold = 'input'
          ></Textbox>
        </Group3>
      </Group4>
      <Group>
        <Button
          style={{
            width: 100,
            height: 36
          }}
          text = 'Submit'
          onClick = {submitClicked}
        ></Button>
        <Button
          style={{
            width: 100,
            height: 36
          }}
          text = 'back'
          onClick = {()=>props.setSignup(false)}
        ></Button>
      </Group>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Group4 = styled.div`
  height: 420px;
  flex-direction: row;
  justify-content: space-between;
  width: 874px;
  display: flex;
`;

const Group2 = styled.div`
  height: 349px;
  flex-direction: column;
  justify-content: space-between;
  width: 437px;
  display: flex;
`;

const Optional = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 46px;
  width: 1366px;
  height: 55px;
`;

const Address3 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 25px;
  height: 30px;
  width: 152px;
`;

const Gender = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 25px;
  height: 30px;
  width: 152px;
`;

const BirthDate = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 25px;
  height: 30px;
  width: 152px;
`;

const Job = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 25px;
  height: 30px;
  width: 152px;
`;

const Group3 = styled.div`
  height: 420px;
  flex-direction: column;
  justify-content: space-between;
  width: 437px;
  display: flex;
`;

const Mandatory1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 46px;
  width: 1366px;
  height: 55px;
`;

const Email1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 25px;
  height: 30px;
  width: 152px;
`;

const Password1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 25px;
  height: 30px;
  width: 152px;
`;

const PasswordRepeat1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 25px;
  height: 30px;
  width: 227px;
`;

const Name1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 25px;
  height: 30px;
  width: 152px;
`;

const Pnumber1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 25px;
  height: 30px;
  width: 152px;
`;

const Group = styled.div`
  height: 36px;
  flex-direction: row;
  justify-content: space-between;
  width: 874px;
  display: flex;
`;

export default SignUp;
