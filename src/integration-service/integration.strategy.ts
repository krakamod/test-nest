export enum IntegrationType {
  Propertyware = 'Propertyware',
  Rentvine = 'Rentvine',
}

export type Property = {
  id: string;
  source: string;
};

export type Unit = {
  id: string;
  source: string;
};

export type Lease = {
  id: string;
  source: string;
};

export interface IIntegrationStrategy {
  syncProperties(): Property[];
  getAllProperties(): Property[];
  getAllUnits(): Unit[];
  getAllLeases(): Lease[];
}
