import WaybillList from "components/WaybillList";
import { FC } from "react";
import {
  ClearButton,
  HistoryContainer,
  Title,
  TitleWrapper,
} from "./WaybillHistory.styled";

interface IWaybillHistoryProps {
  list: string[];
  onSearch: (value: string) => void;
  clearHistory: () => void;
}

const WaybillHistory: FC<IWaybillHistoryProps> = ({
  clearHistory,
  ...rest
}) => {
  return (
    <HistoryContainer>
      <TitleWrapper>
        <Title>Історія</Title>
        <ClearButton type="button" onClick={clearHistory}>
          Очистити історію
        </ClearButton>
      </TitleWrapper>

      <WaybillList {...rest} />
    </HistoryContainer>
  );
};

export default WaybillHistory;
