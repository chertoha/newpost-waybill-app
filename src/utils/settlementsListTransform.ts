import { ISelectItem, ISettlement } from "types/types";

export const settlementsListTransform = (
  data: ISettlement[]
): ISelectItem[] => {
  return data.map(
    ({
      Ref,
      Description,
      AreaDescription,
      RegionsDescription,
      SettlementTypeDescription,
    }) => ({
      id: Ref,
      title: `${SettlementTypeDescription && SettlementTypeDescription + ","} ${
        Description && Description + ","
      } ${RegionsDescription && RegionsDescription + ","} ${
        AreaDescription && AreaDescription
      }`,
    })
  );
};
