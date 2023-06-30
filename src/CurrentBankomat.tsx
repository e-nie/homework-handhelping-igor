import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
        <Banknote color = {props.money.banknotes === 'Dollars' ? 'lawngreen' : 'steelblue'}>
            <Nominal>{props.money.value}</Nominal>
            <Name>{props.money.banknotes}</Name>
        </Banknote>
    );
};

const Banknote = styled.div`
  background-color: ${props => {
    if (props.color === 'lawngreen') {
      return 'lawngreen'
    } else {
      return 'steelblue'
    }
  }};
  width: 400px;
  height: 200px;
  margin: 10px;
`

// const BanknoteBlue = styled.div`
//   background-color: dodgerblue;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `
//
const Name = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

const Nominal = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 90px;
`


//-----------------------------------------------------------------------------------------------
// import React from 'react';
// import {MoneyType} from "./App";
// import styled from "styled-components";
//
// type CurrentBankomatPropsType = {
//     money: MoneyType
// }
// export const CurrentBankomat = (props: CurrentBankomatPropsType) => {
//
//     return (
//         props.money.banknotes === 'Dollars'
//             ?
//             <BanknoteGreen>
//                 <Nominal>{props.money.value}</Nominal>
//                 <Name>{props.money.banknotes}</Name>
//             </BanknoteGreen>
//             :
//             <BanknoteBlue>
//                 <Nominal>{props.money.value}</Nominal>
//                 <Name>{props.money.banknotes}</Name>
//             </BanknoteBlue>
//     );
// };
//
// const BanknoteGreen = styled.div`
//   background-color: lawngreen;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `
//
// const BanknoteBlue = styled.div`
//   background-color: dodgerblue;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `
//
// const Name = styled.span`
//   display: flex;
//   justify-content: center;
//   margin-top: 20px;
// `
//
// const Nominal = styled.span`
//   display: flex;
//   justify-content: center;
//   margin-top: 20px;
//   font-size: 90px;
// `


