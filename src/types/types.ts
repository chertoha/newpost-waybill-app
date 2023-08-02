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
