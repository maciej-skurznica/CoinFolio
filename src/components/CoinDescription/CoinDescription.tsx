import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaLink } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
// local imports
import { useGetCoinDataQuery } from "store/coinGeckoApiSlice";
import { Description, IconDiv, Links, LinkTile } from "./CoinDescription.styles";

const CoinDescription = () => {
  const { coin } = useParams<{ coin: string }>();
  const { data: coinData } = useGetCoinDataQuery(coin);

  const {
    description: { en: text },
    links: { blockchain_site: links },
  } = coinData;

  const handleLinkClick = (link: string) => {
    window.open(`${link}`);
  };

  const handleCopy = () => {
    toast.success("Link copied to clipboard!", {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  return (
    <>
      <Description>{text.replace(/(<([^>]+)>)/gi, "")}</Description>
      <Links>
        {links.reduce((acc: React.ReactNode[], link: string) => {
          acc.push(
            link.length ? (
              <LinkTile key={link}>
                <IconDiv onClick={() => handleLinkClick(link)}>
                  <FaLink />
                </IconDiv>
                {link}
                <CopyToClipboard text={link} onCopy={handleCopy}>
                  <IconDiv>
                    <FiCopy />
                  </IconDiv>
                </CopyToClipboard>
              </LinkTile>
            ) : null
          );
          return acc;
        }, [])}
      </Links>
    </>
  );
};

export default CoinDescription;
