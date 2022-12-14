/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { css } from "@emotion/react";

const Header = () => {
  const faves = useSelector((state) => state.favourites);

  return (
    <header
      css={css`
        margin: 3rem 2rem 4rem;
        height: 4rem;
      `}
    >
      <div
        css={css`
          color: white;
          font-size: 1.5rem;
          text-shadow: 1px 1px 2px black;
        `}
      >
        <Link
          css={css`
            color: white;
            text-decoration: none;
            padding-right: 1rem;
            &:hover {
              color: rgb(232, 211, 185);
            }
          `}
          to="/"
        >
          Home
        </Link>
        <Link
          css={css`
            color: white;
            text-decoration: none;
            padding-right: 1rem;
            &:hover {
              color: rgb(232, 211, 185);
            }
          `}
          to="/countries"
        >
          Countries
        </Link>
        <Link
          css={css`
            color: white;
            text-decoration: none;
            padding-right: 1rem;
            &:hover {
              color: rgb(232, 211, 185);
            }
          `}
          to="favourites"
        >
          Favourites {faves.length > 0 ? `(${faves.length})` : ""}
        </Link>
      </div>
    </header>
  );
};

export default Header;
