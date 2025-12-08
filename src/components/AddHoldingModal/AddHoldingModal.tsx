import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useStoreDispatch } from "store/hooks";
import { addHolding, updateHolding } from "store/portfolioSlice";
import { PortfolioHolding } from "types/PortfolioHolding";
import {
  Overlay,
  Modal,
  Header,
  CloseButton,
  Title,
  Form,
  SearchInput,
  SearchResults,
  SearchResultItem,
  CoinIcon,
  CoinInfo,
  CoinName,
  CoinSymbol,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  CancelButton,
  SubmitButton,
  SelectedCoin,
} from "./AddHoldingModal.styles";

type AddHoldingModalProps = {
  onClose: () => void;
  editingHolding?: PortfolioHolding | null;
};

type SearchCoin = {
  id: string;
  name: string;
  symbol: string;
  thumb: string;
};

const AddHoldingModal = ({ onClose, editingHolding }: AddHoldingModalProps) => {
  const dispatch = useStoreDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchCoin[]>([]);
  const [selectedCoin, setSelectedCoin] = useState<SearchCoin | null>(null);
  const [amount, setAmount] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [purchaseDate, setPurchaseDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (editingHolding) {
      setSelectedCoin({
        id: editingHolding.coinId,
        name: editingHolding.name,
        symbol: editingHolding.symbol,
        thumb: editingHolding.image,
      });
      setAmount(editingHolding.amount.toString());
      setPurchasePrice(editingHolding.purchasePrice.toString());
      setPurchaseDate(editingHolding.purchaseDate);
    }
  }, [editingHolding]);

  useEffect(() => {
    const searchCoins = async () => {
      if (searchQuery.length < 2) {
        setSearchResults([]);
        return;
      }

      setIsSearching(true);
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/search?query=${searchQuery}`
        );
        setSearchResults(response.data.coins.slice(0, 10));
      } catch (error) {
        console.error("Error searching coins:", error);
      } finally {
        setIsSearching(false);
      }
    };

    const debounce = setTimeout(searchCoins, 300);
    return () => clearTimeout(debounce);
  }, [searchQuery]);

  const handleCoinSelect = (coin: SearchCoin) => {
    setSelectedCoin(coin);
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedCoin || !amount || !purchasePrice) {
      return;
    }

    const holding: PortfolioHolding = {
      id: editingHolding?.id || uuidv4(),
      coinId: selectedCoin.id,
      name: selectedCoin.name,
      symbol: selectedCoin.symbol,
      image: selectedCoin.thumb,
      amount: parseFloat(amount),
      purchasePrice: parseFloat(purchasePrice),
      purchaseDate,
    };

    if (editingHolding) {
      dispatch(updateHolding(holding));
    } else {
      dispatch(addHolding(holding));
    }

    onClose();
  };

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>{editingHolding ? "Edit" : "Add"} Holding</Title>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </Header>

        <Form onSubmit={handleSubmit}>
          {!selectedCoin ? (
            <>
              <FormGroup>
                <Label>Search Cryptocurrency</Label>
                <SearchInput
                  type="text"
                  placeholder="Search by name or symbol..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </FormGroup>

              {searchResults.length > 0 && (
                <SearchResults>
                  {searchResults.map((coin) => (
                    <SearchResultItem
                      key={coin.id}
                      onClick={() => handleCoinSelect(coin)}
                    >
                      <CoinIcon src={coin.thumb} alt={coin.name} />
                      <CoinInfo>
                        <CoinName>{coin.name}</CoinName>
                        <CoinSymbol>{coin.symbol.toUpperCase()}</CoinSymbol>
                      </CoinInfo>
                    </SearchResultItem>
                  ))}
                </SearchResults>
              )}

              {isSearching && <div style={{ textAlign: "center" }}>Searching...</div>}
            </>
          ) : (
            <>
              <SelectedCoin>
                <CoinIcon src={selectedCoin.thumb} alt={selectedCoin.name} />
                <CoinInfo>
                  <CoinName>{selectedCoin.name}</CoinName>
                  <CoinSymbol>{selectedCoin.symbol.toUpperCase()}</CoinSymbol>
                </CoinInfo>
                <CloseButton onClick={() => setSelectedCoin(null)}>
                  Change
                </CloseButton>
              </SelectedCoin>

              <FormGroup>
                <Label>Amount</Label>
                <Input
                  type="number"
                  step="any"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Purchase Price (per coin)</Label>
                <Input
                  type="number"
                  step="any"
                  placeholder="0.00"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Purchase Date</Label>
                <Input
                  type="date"
                  value={purchaseDate}
                  onChange={(e) => setPurchaseDate(e.target.value)}
                  required
                />
              </FormGroup>

              <ButtonGroup>
                <CancelButton type="button" onClick={onClose}>
                  Cancel
                </CancelButton>
                <SubmitButton type="submit">
                  {editingHolding ? "Update" : "Add"} Holding
                </SubmitButton>
              </ButtonGroup>
            </>
          )}
        </Form>
      </Modal>
    </Overlay>
  );
};

export default AddHoldingModal;
