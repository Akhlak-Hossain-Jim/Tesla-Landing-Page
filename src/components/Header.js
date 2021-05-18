import React, { useState } from "react";
import styled from "styled-components";

import Homedata from "../data/Homedata";

import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import { selectCars } from "../features/CarSlice/CarSlice";
import { useSelector } from "react-redux";

function Header() {
  const [hamStat, setHamStat] = useState(false);

  const cars = useSelector(selectCars);

  return (
    <Container>
      <div className="brand__logo">
        <img src="images/logo.svg" alt="" />
      </div>
      <Menu>
        {Homedata.map((e) => (
          <a href="gh">{e.sTitle}</a>
        ))}
      </Menu>
      <RightMenu>
        <div className="mobile__drown">
          <a href="hs">Shop Now</a>
          <a href="ds">Tesla Account</a>
        </div>
        <MenuIconC onClick={() => setHamStat(true)}></MenuIconC>
      </RightMenu>
      <HamMenu show={hamStat}>
        <CClear onClick={() => setHamStat(false)}></CClear>
        <a href="kdl">EXISTING INVENTORY</a>
        <a href="kdl">USED INVENTORY</a>
        <a href="kdl">TRADE-IN</a>
        <a href="kdl">CYBERTRUCK</a>
        <a href="kdl">ROADSTER</a>
        <a href="kdl">SEMI</a>
        <a href="kdl">CHARGING</a>
        <a href="kdl">POWERWALL</a>
        <a href="kdl">COMMERCIAL ENERGY</a>
        <a href="kdl">UTILITIES</a>
        <a href="kdl">TEST DRIVE</a>
        <a href="kdl">FIND US</a>
        <a href="kdl">SUPPORT</a>
        <a href="kdl">UNITED STATES</a>
      </HamMenu>
    </Container>
  );
}

const Container = styled.header`
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  .brand__logo {
    height: 24px;
    width: 100px;
    padding: 5px 3px;
    img {
      height: 100%;
      width: 100%;
    }
  }
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1077px) {
    display: none !important;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    margin: 0 10px;
    font-size: 14px;
    font-weight: 600;
    color: #000;
  }
`;

const RightMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  .mobile__drown {
    @media (max-width: 1077px) {
      display: none !important;
    }
    a {
      text-decoration: none;
      text-transform: uppercase;
      margin: 0 10px;
      font-size: 14px;
      font-weight: 600;
      color: #000;
    }
  }
`;

const MenuIconC = styled(MenuIcon)`
  cursor: pointer;
`;

const HamMenu = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 300px;
  z-index: 2000 !important;
  padding: 71px 20px 20px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in-out;
  a {
    display: inline-block;
    text-align: left;
    color: #000;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    padding: 20px 10px;
    border-block-end: 1px solid #d0d1d2;
  }
`;

const CClear = styled(ClearIcon)`
  position: fixed;
  top: 15px;
  right: 20px;
  cursor: pointer;
`;

export default Header;
