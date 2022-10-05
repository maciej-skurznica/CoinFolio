import { FaLink } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { Description, IconDiv, Links, LinkTile } from "./CoinDescription.styles";

const CoinDescription = ({ coinData }) => {
  const {
    description: { en: text },
    links: { blockchain_site: links },
  } = coinData;

  return (
    <>
      <Description>{text.replace(/(<([^>]+)>)/gi, "")}</Description>
      <Links>
        {links.reduce((acc, link) => {
          acc.push(
            link.length ? (
              <LinkTile>
                <IconDiv>
                  <FaLink />
                </IconDiv>
                {link}
                <IconDiv>
                  <FiCopy />
                </IconDiv>
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
