export interface Contaminant {
  pathway: string;
  receptor: string;
}
export interface ContaminantGroup {
  name: string;
  key: string;
  other: Contaminant[];
}
export interface ContaminantSource {
  name: string;
  internalContaminants?: string[];
  externalContaminants?: string[];
  internal: boolean;
  external: boolean;
}
export interface csDTO {
  sources: ContaminantSource[];
  contaminants: {
    name: string;
    key: string;
    other: {
      pathway: string;
      receptor: string;
    }[];
  }[];
}
