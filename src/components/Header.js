import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo href="#" src="/images/logo.svg" alt="" />
      <NavMenu>
        <a href="#">
          <img src="/images/home-icon.svg" alt="" />
          <span>HOME</span>
        </a>
        <a href="#">
          <img src="/images/search-icon.svg" alt="" />
          <span>SEARCH</span>
        </a>
        <a href="#">
          <img src="/images/watchlist-icon.svg" alt="" />
          <span>WATCHLIST</span>
        </a>
        <a href="#">
          <img src="/images/original-icon.svg" alt="" />
          <span>ORIGINALS</span>
        </a>
        <a href="#">
          <img src="/images/movie-icon.svg" alt="" />
          <span>MOVIE</span>
        </a>
        <a href="#">
          <img src="/images/series-icon.svg" alt="" />
          <span>SERIES</span>
        </a>
      </NavMenu>

      <UserImage src="/images/user-image.png" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 24px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;
    color: inherit;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      color: white;
      font-size: 12px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        position: absolute;
        content: "";
        height: 2px;
        background: white;
        left: 0;
        right: 0;
        bottom: -4px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        opacity: 0;
        transform: scaleX(0);
      }
    }
    &:hover {
      span: after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImage = styled.img`
  height: 48px;
`;
