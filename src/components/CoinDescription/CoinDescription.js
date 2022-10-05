import { FaLink } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Description, IconDiv, Links, LinkTile } from "./CoinDescription.styles";

const CoinDescription = ({ coinData }) => {
  const {
    description: { en: text },
    links: { blockchain_site: links },
  } = coinData;

  const handleLinkClick = (link) => {
    window.open(`${link}`);
  };

  return (
    <>
      <Description>{text.replace(/(<([^>]+)>)/gi, "")}</Description>
      <Links>
        {links.reduce((acc, link) => {
          acc.push(
            link.length ? (
              <LinkTile key={Math.random()}>
                <IconDiv onClick={() => handleLinkClick(link)}>
                  <FaLink />
                </IconDiv>
                {link}
                <CopyToClipboard text={link}>
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
