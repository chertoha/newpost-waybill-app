export interface IWaybill {
  Status: string;
  WarehouseSender: string;
  WarehouseRecipient: string;
}

export type WaybillStatusDefaultResponse = {
  success: boolean;
  data: IWaybill[];
  errors: string[];
  warnings: string[];
};

export type WaybillStatus = {
  success: boolean;
  waybill: IWaybill;
  errors: string[];
  warnings: string[];
};

export interface ISettlement {
  Ref: string;
  Description: string;
  AreaDescription: string;
  SettlementTypeDescription: string;
}

export type WarehouseSettlements = {
  data: ISettlement[];
  errors: string[];
  warnings: string[];
  success: boolean;
};

export interface ISelectItem {
  id: string;
  title: string;
}

export interface IWarehouse {
  Ref: string;
  Description: string;
}

export type WarehouseResponse = {
  data: IWarehouse[];
  errors: string[];
  warnings: string[];
  success: boolean;
  info?: { totalCount: number };
};

export type WarehouseRequest = {
  cityRef: string | null;
  page?: string;
};
