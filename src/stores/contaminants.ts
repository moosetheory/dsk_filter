import { defineStore } from "pinia";
import { ref } from "vue";
import {
  ContaminantGroup,
  ContaminantSource,
  csDTO,
} from "../types/contaminants";

export const useContaminantStore = defineStore("comtaminants", () => {
  const sources = ref<ContaminantSource[]>([]);
  const contaminants = ref<Map<string, ContaminantGroup>>(new Map());
  const isLoaded = ref<boolean>(false);

  const rawData: csDTO = {
    sources: [
      {
        name: "Carbon in natural strata: peat, organic matter in e.g. alluvium, chalk",
        contaminants: ["c6a97e0a-fd17-4e79-8bd3-1a5f8eb3336f"],
        internal: false,
        external: false,
      },
      {
        name: "Airports",
        contaminants: [
          "21055e1e-2f31-476c-b39e-8f7b445b6369",
          "9a892fa3-898d-46c2-9c12-48e0b05b4f81",
          "497efb42-7db6-40ba-b9ec-bfc89ac74787",
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e",
          "6399e9b2-dae8-4574-b340-7f53d94268b9",
          "f034b51a-08c2-44a0-9844-9fc59be7a40b",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Animal and animal products processing works",
        contaminants: [
          "24926ec8-c2ae-4e77-b578-5f6815155aa5",
          "030a6693-1356-4c9e-9b0e-51e5f8c21aa6",
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e",
          "6399e9b2-dae8-4574-b340-7f53d94268b9",
          "93d18fc5-4fba-46c6-8b4b-ad192cc9bd11",
          "aa5a59bf-4ce8-4225-bc38-0c37436a2dbc",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Asbestos manufacturing works",
        contaminants: [
          "24926ec8-c2ae-4e77-b578-5f6815155aa5",
          "497efb42-7db6-40ba-b9ec-bfc89ac74787",
          "030a6693-1356-4c9e-9b0e-51e5f8c21aa6",
          "6399e9b2-dae8-4574-b340-7f53d94268b9",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Ceramics, cement and asphalt manufacturing works",
        contaminants: [
          "24926ec8-c2ae-4e77-b578-5f6815155aa5",
          "497efb42-7db6-40ba-b9ec-bfc89ac74787",
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "030a6693-1356-4c9e-9b0e-51e5f8c21aa6",
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e",
          "6399e9b2-dae8-4574-b340-7f53d94268b9",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Charcoal works",
        contaminants: [
          "9a892fa3-898d-46c2-9c12-48e0b05b4f81",
          "628f41c5-5071-4f5b-8600-6f650da0c10b",
          "24926ec8-c2ae-4e77-b578-5f6815155aa5",
          "497efb42-7db6-40ba-b9ec-bfc89ac74787",
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e",
          "6399e9b2-dae8-4574-b340-7f53d94268b9",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Chemical works: coatings (paints and printing inks) manufacture",
        contaminants: [
          "24926ec8-c2ae-4e77-b578-5f6815155aa5",
          "497efb42-7db6-40ba-b9ec-bfc89ac74787",
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "030a6693-1356-4c9e-9b0e-51e5f8c21aa6",
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e",
          "6399e9b2-dae8-4574-b340-7f53d94268b9",
          "2779c527-a91b-41c4-8456-0aa6a6c55bf4",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Chemical works: cosmetics and toiletries manufacturing works",
        contaminants: [
          "24926ec8-c2ae-4e77-b578-5f6815155aa5",
          "497efb42-7db6-40ba-b9ec-bfc89ac74787",
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "030a6693-1356-4c9e-9b0e-51e5f8c21aa6",
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e",
          "6399e9b2-dae8-4574-b340-7f53d94268b9",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Chemical works: disinfectants manufacturing works",
        contaminants: [
          "24926ec8-c2ae-4e77-b578-5f6815155aa5",
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361", 
          "030a6693-1356-4c9e-9b0e-51e5f8c21aa6", 
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
          "96fa0460-8628-4d8f-85b2-7b5d245eb62b",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Chemical works: explosives, propellants and pyrotechnics manufacture",
        contaminants: [
          "628f41c5-5071-4f5b-8600-6f650da0c10b", 
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Chemical works: fertiliser manufacturing works",
        contaminants: [
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361", 
          "030a6693-1356-4c9e-9b0e-51e5f8c21aa6",
          "6399e9b2-dae8-4574-b340-7f53d94268b9",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Chemical works: fine chemicals manufacturing works",
        contaminants: [
          "628f41c5-5071-4f5b-8600-6f650da0c10b", 
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361", 
          "030a6693-1356-4c9e-9b0e-51e5f8c21aa6", 
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9",
          "96fa0460-8628-4d8f-85b2-7b5d245eb62b",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Chemical works: inorganic chemicals manufacturing works",
        contaminants: [
          "9a892fa3-898d-46c2-9c12-48e0b05b4f81", 
          "628f41c5-5071-4f5b-8600-6f650da0c10b", 
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361", 
          "030a6693-1356-4c9e-9b0e-51e5f8c21aa6",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Chemical works: linoleum, vinyl and bitumen floor coatings manufacture",
        contaminants: [
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361", 
          "030a6693-1356-4c9e-9b0e-51e5f8c21aa6", 
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
          "2779c527-a91b-41c4-8456-0aa6a6c55bf4",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Chemical works: mastics, sealants, adhesives and roofing felt manufacture",
        contaminants: [
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361", 
          "030a6693-1356-4c9e-9b0e-51e5f8c21aa6", 
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Chemical works: organic chemicals manufacturing works",
        contaminants: [
          "9a892fa3-898d-46c2-9c12-48e0b05b4f81",
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Chemical works: pesticides manufacturing works",
        contaminants: [
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
          "93d18fc5-4fba-46c6-8b4b-ad192cc9bd11",
          "96fa0460-8628-4d8f-85b2-7b5d245eb62b",
          "2779c527-a91b-41c4-8456-0aa6a6c55bf4",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Chemical works: pharmaceuticals manufacturing works",
        contaminants: [
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361", 
          "030a6693-1356-4c9e-9b0e-51e5f8c21aa6",
          "6399e9b2-dae8-4574-b340-7f53d94268b9",
          "31db7a56-0d29-4df0-b6c1-d4187777c6e7",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Chemical works: rubber processing works",
        contaminants: [
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Chemical works: soap and detergent manufacturing works",
        contaminants: [
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Dockyards and dockland",
        contaminants: [
          "628f41c5-5071-4f5b-8600-6f650da0c10b", 
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787",
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Dry cleaners",
        contaminants: [
          "9a892fa3-898d-46c2-9c12-48e0b05b4f81",
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Engineering works: aircraft manufacturing works",
        contaminants: [
          "9a892fa3-898d-46c2-9c12-48e0b05b4f81", 
          "628f41c5-5071-4f5b-8600-6f650da0c10b", 
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Engineering works: electrical and electronic equipment",
        contaminants: [
          "628f41c5-5071-4f5b-8600-6f650da0c10b", 
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Engineering works: mechanical engineering and ordnance works",
        contaminants: [
          "9a892fa3-898d-46c2-9c12-48e0b05b4f81", 
          "628f41c5-5071-4f5b-8600-6f650da0c10b", 
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Engineering works: railway engineering works",
        contaminants: [
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Engineering works: shipbuilding repair and shipbreaking",
        contaminants: [
          "9a892fa3-898d-46c2-9c12-48e0b05b4f81",
          "497efb42-7db6-40ba-b9ec-bfc89ac74787",
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
          "2779c527-a91b-41c4-8456-0aa6a6c55bf4",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Engineering works: vehicle manufacturing works",
        contaminants: [
          "9a892fa3-898d-46c2-9c12-48e0b05b4f81", 
          "628f41c5-5071-4f5b-8600-6f650da0c10b", 
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Fibreglass and fibreglass resin manufacturing works",
        contaminants: [
          "9a892fa3-898d-46c2-9c12-48e0b05b4f81", 
          "628f41c5-5071-4f5b-8600-6f650da0c10b", 
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Gasworks, coke works and other coal carbonisation plants",
        contaminants: [
          "9a892fa3-898d-46c2-9c12-48e0b05b4f81", 
          "628f41c5-5071-4f5b-8600-6f650da0c10b", 
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361", 
          "030a6693-1356-4c9e-9b0e-51e5f8c21aa6", 
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Glass manufacturing works",
        contaminants: [
          "9a892fa3-898d-46c2-9c12-48e0b05b4f81", 
          "628f41c5-5071-4f5b-8600-6f650da0c10b", 
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Metal manufacturing, refining and finishing works: electroplating/finishing",
        contaminants: [
          "9a892fa3-898d-46c2-9c12-48e0b05b4f81", 
          "628f41c5-5071-4f5b-8600-6f650da0c10b", 
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Metal manufacturing, refining and finishing works: iron- and steelworks",
        contaminants: [
          "9a892fa3-898d-46c2-9c12-48e0b05b4f81",
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Metal manufacturing, refining and finishing works: lead works",
        contaminants: [
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "6399e9b2-dae8-4574-b340-7f53d94268b9",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Metal manufacturing, refining and finishing works: non-ferrous (excl lead)",
        contaminants: [
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "6399e9b2-dae8-4574-b340-7f53d94268b9",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Metal manufacturing, refining and finishing works: precious metal recovery",
        contaminants: [
          "628f41c5-5071-4f5b-8600-6f650da0c10b", 
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Oil refineries and bulk storage of crude oil and petroleum products",
        contaminants: [
          "9a892fa3-898d-46c2-9c12-48e0b05b4f81",
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9",
          "93f5146c-21b7-41ee-9112-443b7ecfd8c9",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Photographic processing industry",
        contaminants: [
          "9a892fa3-898d-46c2-9c12-48e0b05b4f81", 
          "628f41c5-5071-4f5b-8600-6f650da0c10b", 
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Power stations (excluding nuclear power stations)",
        contaminants: [
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361", 
          "030a6693-1356-4c9e-9b0e-51e5f8c21aa6",
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb", 
          "9adc1954-f778-497d-b1ac-da074496980b",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Printing and bookbinding works",
        contaminants: [
          "9a892fa3-898d-46c2-9c12-48e0b05b4f81", 
          "628f41c5-5071-4f5b-8600-6f650da0c10b", 
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Pulp and paper manufacturing works",
        contaminants: [
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
          "93d18fc5-4fba-46c6-8b4b-ad192cc9bd11",
          "96fa0460-8628-4d8f-85b2-7b5d245eb62b",
          "c6a97e0a-fd17-4e79-8bd3-1a5f8eb3336f",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Railway land",
        contaminants: [
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361", 
          "030a6693-1356-4c9e-9b0e-51e5f8c21aa6",
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
          "131cd3b3-b09e-40cf-a5db-e5b2a822a180",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Road vehicle servicing and repair: garages and filling stations",
        contaminants: [
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361", 
          "030a6693-1356-4c9e-9b0e-51e5f8c21aa6",
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
          "93f5146c-21b7-41ee-9112-443b7ecfd8c9",
          "f034b51a-08c2-44a0-9844-9fc59be7a40b",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Road vehicle servicing and repair: transport and haulage centres",
        contaminants: [
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361", 
          "030a6693-1356-4c9e-9b0e-51e5f8c21aa6", 
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
          "93f5146c-21b7-41ee-9112-443b7ecfd8c9",
          "f034b51a-08c2-44a0-9844-9fc59be7a40b",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Sewage works and sewage farms",
        contaminants: [
          "9a892fa3-898d-46c2-9c12-48e0b05b4f81", 
          "628f41c5-5071-4f5b-8600-6f650da0c10b", 
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
          "c6a97e0a-fd17-4e79-8bd3-1a5f8eb3336f",
          "aa5a59bf-4ce8-4225-bc38-0c37436a2dbc",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Textile works and dye works",
        contaminants: [
          "628f41c5-5071-4f5b-8600-6f650da0c10b", 
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
          "93d18fc5-4fba-46c6-8b4b-ad192cc9bd11",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Timber products manufacturing works",
        contaminants: [
          "24926ec8-c2ae-4e77-b578-5f6815155aa5",
          "030a6693-1356-4c9e-9b0e-51e5f8c21aa6", 
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9",
          "93d18fc5-4fba-46c6-8b4b-ad192cc9bd11",
          "2779c527-a91b-41c4-8456-0aa6a6c55bf4", 
          "c6a97e0a-fd17-4e79-8bd3-1a5f8eb3336f",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Timber treatment works",
        contaminants: [
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361", 
          "030a6693-1356-4c9e-9b0e-51e5f8c21aa6", 
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
          "93d18fc5-4fba-46c6-8b4b-ad192cc9bd11",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Waste recycling, treatment and disposal sites: drum and tank cleaning/recycling",
        contaminants: [
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787",
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Waste recycling, treatment and disposal sites: hazardous waste treatment",
        contaminants: [
          "628f41c5-5071-4f5b-8600-6f650da0c10b",
          "497efb42-7db6-40ba-b9ec-bfc89ac74787",
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e",
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
          "93d18fc5-4fba-46c6-8b4b-ad192cc9bd11",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Waste recycling, treatment and disposal sites: landfills and other waste treatment/disposal",
        contaminants: [
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361", 
          "030a6693-1356-4c9e-9b0e-51e5f8c21aa6",
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
          "96fa0460-8628-4d8f-85b2-7b5d245eb62b",
          "c6a97e0a-fd17-4e79-8bd3-1a5f8eb3336f",
          "aa5a59bf-4ce8-4225-bc38-0c37436a2dbc",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Waste recycling, treatment and disposal sites: solvent recovery works",
        contaminants: [
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Waste recycling, treatment and disposal sites: metal recycling",
        contaminants: [
          "9a892fa3-898d-46c2-9c12-48e0b05b4f81",
          "24926ec8-c2ae-4e77-b578-5f6815155aa5", 
          "497efb42-7db6-40ba-b9ec-bfc89ac74787", 
          "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Agricultural land",
        contaminants: [
          "628f41c5-5071-4f5b-8600-6f650da0c10b",
          "93d18fc5-4fba-46c6-8b4b-ad192cc9bd11", 
          "131cd3b3-b09e-40cf-a5db-e5b2a822a180", 
          "6cf27688-0779-4fcd-b882-0937612ee6d4",
          "aa5a59bf-4ce8-4225-bc38-0c37436a2dbc",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Electricity sub stations",
        contaminants: [
          "9adc1954-f778-497d-b1ac-da074496980b",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Transformers",
        contaminants: [
          "6399e9b2-dae8-4574-b340-7f53d94268b9",
          "9adc1954-f778-497d-b1ac-da074496980b",
        ],
        internal: false,
        external: false,
      },
      {
        name: "MoD land",
        contaminants: [
          "9a892fa3-898d-46c2-9c12-48e0b05b4f81",
          "497efb42-7db6-40ba-b9ec-bfc89ac74787",
          "030a6693-1356-4c9e-9b0e-51e5f8c21aa6", 
          "28b2c37a-2b2b-4b7e-baea-80af664f4f6e", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9", 
          "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
          "22827e1f-ff39-45f8-af9f-ac71a4861ebb", 
          "31db7a56-0d29-4df0-b6c1-d4187777c6e7",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Interceptors in car parks",
        contaminants: [
          "030a6693-1356-4c9e-9b0e-51e5f8c21aa6", 
          "6399e9b2-dae8-4574-b340-7f53d94268b9",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Limestone/chalk bedrock",
        contaminants: [
          "c6a97e0a-fd17-4e79-8bd3-1a5f8eb3336f",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Made ground",
        contaminants: [
          "c6a97e0a-fd17-4e79-8bd3-1a5f8eb3336f",
        ],
        internal: false,
        external: false,
      },
      {
        name: "Car wash",
        contaminants: [
          "030a6693-1356-4c9e-9b0e-51e5f8c21aa6",
          "6399e9b2-dae8-4574-b340-7f53d94268b9",
        ],
        internal: false,
        external: false,
      },
    ],
    contaminants: [
      {
        name: "Radioactivity",
        key: "31db7a56-0d29-4df0-b6c1-d4187777c6e7",
        other: [
          {
            pathway: "Irradiation",
            receptor: "Human health - End users",
          },
          {
            pathway: "Irradiation",
            receptor: "Human health - Ground workers",
          },
          {
            pathway:
              "Build up ground gases within buildings or confined spaces ",
            receptor: "Human health - End users",
          },
          {
            pathway:
              "Build up ground gases within buildings or confined spaces ",
            receptor: "Human health - Ground workers",
          },
        ],
      },
      {
        name: "Microbioloigcal",
        key: "aa5a59bf-4ce8-4225-bc38-0c37436a2dbc",
        other: [
          {
            pathway: "Ingestion",
            receptor: "Human health - End users",
          },
          {
            pathway: "Ingestion",
            receptor: "Human health - Ground workers",
          },
        ],
      },
      {
        name: "pH",
        key: "e6712f0b-eecd-40d7-abb7-c7b74e5a0361",
        other: [
          {
            pathway: "Damage to buried structures / services",
            receptor: "Buried infrastructure and building foundations",
          },
          {
            pathway: "Dermal contact",
            receptor: "Human health - Ground workers",
          },
        ],
      },
      {
        name: "PAHs ",
        key: "030a6693-1356-4c9e-9b0e-51e5f8c21aa6",
        other: [
          {
            pathway: "Dermal contact",
            receptor: "Human health - End users",
          },
          {
            pathway: "Dermal contact",
            receptor: "Human health - Ground workers",
          },
          {
            pathway: "Dust/soil ingestion/inhalation",
            receptor: "Human health - End users",
          },
          {
            pathway: "Dust/soil ingestion/inhalation",
            receptor: "Human health - Ground workers",
          },
          {
            pathway:
              "Leaching of contaminants, and migration into water environment ",
            receptor: "Water bodies",
          },
          {
            pathway:
              "Creation of pathways via piling or other construction activities /development design",
            receptor: "Water bodies (groundwater)",
          },
          {
            pathway: "Mobilisation of contaminated soils into surface water",
            receptor: "Water bodies (surface water)",
          },
          {
            pathway: "Vapour inhalation ",
            receptor: "Human health - End users",
          },
          {
            pathway: "Vapour inhalation ",
            receptor: "Human health - Ground workers",
          },
          {
            pathway: "Ingestion of homegrown produce",
            receptor: "Human health - End users",
          },
        ],
      },
      {
        name: "PCBs",
        key: "9adc1954-f778-497d-b1ac-da074496980b",
        other: [
          {
            pathway: "Dermal contact",
            receptor: "Human health - End users",
          },
          {
            pathway: "Dermal contact",
            receptor: "Human health - Ground workers",
          },
          {
            pathway: "Dust/soil ingestion/inhalation",
            receptor: "Human health - End users",
          },
          {
            pathway: "Dust/soil ingestion/inhalation",
            receptor: "Human health - Ground workers",
          },
          {
            pathway:
              "Leaching of contaminants, and migration into water environment ",
            receptor: "Water bodies",
          },
          {
            pathway:
              "Creation of pathways via piling or other construction activities /development design",
            receptor: "Water bodies (groundwater)",
          },
          {
            pathway: "Mobilisation of contaminated soils into surface water",
            receptor: "Water bodies (surface water)",
          },
          {
            pathway: "Ingestion of homegrown produce",
            receptor: "Human health (end users)",
          },
        ],
      },
      {
        name: "Bulk gases e.g. carbon dioxide and methane",
        key: "c6a97e0a-fd17-4e79-8bd3-1a5f8eb3336f",
        other: [
          {
            pathway:
              "Creation of pathways via piling or other construction activities /development design",
            receptor: "Human health - End users",
          },
          {
            pathway:
              "Creation of pathways via piling or other construction activities /development design",
            receptor: "Human health - Ground workers",
          },
          {
            pathway:
              "Build up ground gases within buildings or confined spaces ",
            receptor: "Human health - End users",
          },
          {
            pathway:
              "Build up ground gases within buildings or confined spaces ",
            receptor: "Human health - Ground workers",
          },
        ],
      },
      {
        name: "Source - Contaminant",
        key: "a123a7f1-f530-400a-b26c-a403532dcca2",
        other: [
          {
            pathway: "pathway",
            receptor: "receptor",
          },
        ],
      },
      {
        name: "Metals/metalloids",
        key: "21055e1e-2f31-476c-b39e-8f7b445b6369",
        other: [
          {
            pathway: "Dermal contact",
            receptor: "Human health - End users",
          },
          {
            pathway: "Dermal contact",
            receptor: "Human health - Ground workers",
          },
          {
            pathway: "Dust/soil ingestion/inhalation",
            receptor: "Human health - End users",
          },
          {
            pathway: "Dust/soil ingestion/inhalation",
            receptor: "Human health - Ground workers",
          },
          {
            pathway: "Ingestion of homegrown produce",
            receptor: "Human health - End users",
          },
          {
            pathway: "Plant uptake",
            receptor: "Flora",
          },
          {
            pathway: "Mobilisation of contaminated soils into surface water",
            receptor: "Water bodies (surface water)",
          },
          {
            pathway:
              "Leaching of contaminants, and migration into water environment ",
            receptor: "Water bodies",
          },
          {
            pathway:
              "Creation of pathways via piling or other construction activities /development design",
            receptor: "Water bodies (groundwater)",
          },
        ],
      },
      {
        name: "Nitrates/Ammonia",
        key: "628f41c5-5071-4f5b-8600-6f650da0c10b",
        other: [
          {
            pathway:
              "Leaching of contaminants, and migration into water environment ",
            receptor: "Water bodies",
          },
          {
            pathway:
              "Creation of pathways via piling or other construction activities /development design",
            receptor: "Water bodies (groundwater)",
          },
          {
            pathway: "Mobilisation of contaminated soils into surface water",
            receptor: "Water bodies (surface water)",
          },
          {
            pathway: "Vapour inhalation ",
            receptor: "Human health - Ground workers",
          },
        ],
      },
      {
        name: "SVOCs (excl PAHs)",
        key: "28b2c37a-2b2b-4b7e-baea-80af664f4f6e",
        other: [
          {
            pathway: "Dermal contact",
            receptor: "Human health - End users",
          },
          {
            pathway: "Dermal contact",
            receptor: "Human health - Ground workers",
          },
          {
            pathway: "Dust/soil ingestion/inhalation",
            receptor: "Human health - End users",
          },
          {
            pathway: "Dust/soil ingestion/inhalation",
            receptor: "Human health - Ground workers",
          },
          {
            pathway:
              "Leaching of contaminants, and migration into water environment ",
            receptor: "Water bodies",
          },
          {
            pathway:
              "Creation of pathways via piling or other construction activities /development design",
            receptor: "Water bodies (groundwater)",
          },
          {
            pathway: "Mobilisation of contaminated soils into surface water",
            receptor: "Water bodies (surface water)",
          },
          {
            pathway: "Vapour inhalation ",
            receptor: "Human health - End users",
          },
          {
            pathway: "Vapour inhalation ",
            receptor: "Human health - Ground workers",
          },
          {
            pathway: "Ingestion of homegrown produce",
            receptor: "Human health - End users",
          },
          {
            pathway: "Permeation of buried water supply pipes ",
            receptor: "Human health (end users)",
          },
        ],
      },
      {
        name: "TPH",
        key: "6399e9b2-dae8-4574-b340-7f53d94268b9",
        other: [
          {
            pathway: "Dermal contact",
            receptor: "Human health - End users",
          },
          {
            pathway: "Dermal contact",
            receptor: "Human health - Ground workers",
          },
          {
            pathway: "Dust/soil ingestion/inhalation",
            receptor: "Human health - End users",
          },
          {
            pathway: "Dust/soil ingestion/inhalation",
            receptor: "Human health - Ground workers",
          },
          {
            pathway:
              "Leaching of contaminants, and migration into water environment ",
            receptor: "Water bodies",
          },
          {
            pathway:
              "Creation of pathways via piling or other construction activities /development design",
            receptor: "Water bodies (groundwater)",
          },
          {
            pathway: "Mobilisation of contaminated soils into surface water",
            receptor: "Water bodies (surface water)",
          },
          {
            pathway: "Vapour inhalation ",
            receptor: "Human health - End users",
          },
          {
            pathway: "Vapour inhalation ",
            receptor: "Human health - Ground workers",
          },
          {
            pathway: "Ingestion of homegrown produce",
            receptor: "Human health - End users",
          },
          {
            pathway: "Permeation of buried water supply pipes ",
            receptor: "Human health - End users",
          },
        ],
      },
      {
        name: "Fertilisers",
        key: "6cf27688-0779-4fcd-b882-0937612ee6d4",
        other: [
          {
            pathway:
              "Leaching of contaminants, and migration into water environment ",
            receptor: "Water bodies",
          },
          {
            pathway:
              "Creation of pathways via piling or other construction activities /development design",
            receptor: "Water bodies (groundwater)",
          },
          {
            pathway: "Mobilisation of contaminated soils into surface water",
            receptor: "Water bodies (surface water)",
          },
        ],
      },
      {
        name: "Dioxins/furans",
        key: "96fa0460-8628-4d8f-85b2-7b5d245eb62b",
        other: [
          {
            pathway: "Dermal contact",
            receptor: "Human health - End users",
          },
          {
            pathway: "Dermal contact",
            receptor: "Human health - Ground workers",
          },
          {
            pathway: "Dust/soil ingestion/inhalation",
            receptor: "Human health - End users",
          },
          {
            pathway: "Dust/soil ingestion/inhalation",
            receptor: "Human health - Ground workers",
          },
          {
            pathway:
              "Leaching of contaminants, and migration into water environment ",
            receptor: "Water bodies",
          },
          {
            pathway:
              "Creation of pathways via piling or other construction activities /development design",
            receptor: "Water bodies (groundwater)",
          },
          {
            pathway: "Mobilisation of contaminated soils into surface water",
            receptor: "Water bodies (surface water)",
          },
          {
            pathway: "Ingestion of homegrown produce",
            receptor: "Human health (end users)",
          },
        ],
      },
      {
        name: "Phosphates",
        key: "c852d764-f37a-4cd2-b78f-4eda7500a2f4",
        other: [
          {
            pathway:
              "Leaching of contaminants, and migration into water environment ",
            receptor: "Water bodies",
          },
          {
            pathway:
              "Creation of pathways via piling or other construction activities /development design",
            receptor: "Water bodies (groundwater)",
          },
          {
            pathway: "Mobilisation of contaminated soils into surface water",
            receptor: "Water bodies (surface water)",
          },
        ],
      },
      {
        name: "Cyanide",
        key: "9a892fa3-898d-46c2-9c12-48e0b05b4f81",
        other: [
          {
            pathway: "Dermal contact",
            receptor: "Human health - End users",
          },
          {
            pathway: "Dermal contact",
            receptor: "Human health - Ground workers",
          },
          {
            pathway: "Dust/soil ingestion/inhalation",
            receptor: "Human health - End users",
          },
          {
            pathway: "Dust/soil ingestion/inhalation",
            receptor: "Human health - Ground workers",
          },
          {
            pathway: "Ingestion of homegrown produce",
            receptor: "Human health (end users)",
          },
          {
            pathway: "Mobilisation of contaminated soils into surface water",
            receptor: "Water bodies (surface water)",
          },
          {
            pathway:
              "Leaching of contaminants, and migration into water environment ",
            receptor: "Water bodies",
          },
          {
            pathway:
              "Creation of pathways via piling or other construction activities /development design",
            receptor: "Water bodies (groundwater)",
          },
          {
            pathway: "Vapour inhalation ",
            receptor: "Human health - End users",
          },
        ],
      },
      {
        name: "Sulphates/Sulphides",
        key: "24926ec8-c2ae-4e77-b578-5f6815155aa5",
        other: [
          {
            pathway: "Damage to buried structures / services",
            receptor: "Buried infrastructure and building foundations",
          },
        ],
      },
      {
        name: "Asbestos",
        key: "497efb42-7db6-40ba-b9ec-bfc89ac74787",
        other: [
          {
            pathway: "Inhalation of fibres",
            receptor: "Human health - End users",
          },
          {
            pathway: "Inhalation of fibres",
            receptor: "Human health - Ground workers",
          },
        ],
      },
      {
        name: "Pesticides",
        key: "93d18fc5-4fba-46c6-8b4b-ad192cc9bd11",
        other: [
          {
            pathway: "Dermal contact",
            receptor: "Human health - End users",
          },
          {
            pathway: "Dermal contact",
            receptor: "Human health - Ground workers",
          },
          {
            pathway: "Dust/soil ingestion/inhalation",
            receptor: "Human health - End users",
          },
          {
            pathway: "Dust/soil ingestion/inhalation",
            receptor: "Human health - Ground workers",
          },
          {
            pathway:
              "Leaching of contaminants, and migration into water environment ",
            receptor: "Water bodies",
          },
          {
            pathway:
              "Creation of pathways via piling or other construction activities /development design",
            receptor: "Water bodies (groundwater)",
          },
          {
            pathway: "Mobilisation of contaminated soils into surface water",
            receptor: "Water bodies (surface water)",
          },
          {
            pathway: "Ingestion of homegrown produce",
            receptor: "Human health - End users",
          },
        ],
      },
      {
        name: "Herbicides",
        key: "131cd3b3-b09e-40cf-a5db-e5b2a822a180",
        other: [
          {
            pathway: "Dermal contact",
            receptor: "Human health - End users",
          },
          {
            pathway: "Dermal contact",
            receptor: "Human health - Ground workers",
          },
          {
            pathway: "Dust/soil ingestion/inhalation",
            receptor: "Human health - End users",
          },
          {
            pathway: "Dust/soil ingestion/inhalation",
            receptor: "Human health - Ground workers",
          },
          {
            pathway:
              "Leaching of contaminants, and migration into water environment ",
            receptor: "Water bodies",
          },
          {
            pathway:
              "Creation of pathways via piling or other construction activities /development design",
            receptor: "Water bodies (groundwater)",
          },
          {
            pathway: "Mobilisation of contaminated soils into surface water",
            receptor: "Water bodies (surface water)",
          },
          {
            pathway: "Ingestion of homegrown produce",
            receptor: "Human health - End users",
          },
          {
            pathway: "Plant uptake",
            receptor: "Flora",
          },
        ],
      },
      {
        name: "Organoleads",
        key: "93f5146c-21b7-41ee-9112-443b7ecfd8c9",
        other: [
          {
            pathway: "Dust/soil ingestion/inhalation",
            receptor: "Human health - End users",
          },
          {
            pathway: "Dust/soil ingestion/inhalation",
            receptor: "Human health - Ground workers",
          },
          {
            pathway:
              "Leaching of contaminants, and migration into water environment ",
            receptor: "Water bodies",
          },
          {
            pathway:
              "Creation of pathways via piling or other construction activities /development design",
            receptor: "Water bodies (groundwater)",
          },
          {
            pathway: "Mobilisation of contaminated soils into surface water",
            receptor: "Water bodies (surface water)",
          },
          {
            pathway: "Ingestion of homegrown produce",
            receptor: "Human health (end users)",
          },
        ],
      },
      {
        name: "Organotins",
        key: "2779c527-a91b-41c4-8456-0aa6a6c55bf4",
        other: [
          {
            pathway: "Dust/soil ingestion/inhalation",
            receptor: "Human health - End users",
          },
          {
            pathway: "Dust/soil ingestion/inhalation",
            receptor: "Human health - Ground workers",
          },
          {
            pathway:
              "Leaching of contaminants, and migration into water environment ",
            receptor: "Water bodies",
          },
          {
            pathway:
              "Creation of pathways via piling or other construction activities /development design",
            receptor: "Water bodies (groundwater)",
          },
          {
            pathway: "Mobilisation of contaminated soils into surface water",
            receptor: "Water bodies (surface water)",
          },
          {
            pathway: "Ingestion of homegrown produce",
            receptor: "Human health (end users)",
          },
        ],
      },
      {
        name: "Glycols",
        key: "f034b51a-08c2-44a0-9844-9fc59be7a40b",
        other: [
          {
            pathway: "Dermal contact",
            receptor: "Human health - End users",
          },
          {
            pathway: "Dermal contact",
            receptor: "Human health - Ground workers",
          },
          {
            pathway: "Dust/soil ingestion/inhalation",
            receptor: "Human health - End users",
          },
          {
            pathway: "Dust/soil ingestion/inhalation",
            receptor: "Human health - Ground workers",
          },
          {
            pathway:
              "Leaching of contaminants, and migration into water environment ",
            receptor: "Water bodies",
          },
          {
            pathway:
              "Creation of pathways via piling or other construction activities /development design",
            receptor: "Water bodies (groundwater)",
          },
          {
            pathway: "Mobilisation of contaminated soils into surface water",
            receptor: "Water bodies (surface water)",
          },
          {
            pathway: "Vapour inhalation ",
            receptor: "Human health - End users",
          },
          {
            pathway: "Vapour inhalation ",
            receptor: "Human health - Ground workers",
          },
          {
            pathway: "Ingestion of homegrown produce",
            receptor: "Human health (end users)",
          },
          {
            pathway: "Permeation of buried water supply pipes ",
            receptor: "Human health (end users)",
          },
        ],
      },
      {
        name: "VOCs",
        key: "927e464a-9c8e-4699-84ef-03b3fa1a00eb",
        other: [
          {
            pathway: "Dermal contact",
            receptor: "Human health - End users",
          },
          {
            pathway: "Dermal contact",
            receptor: "Human health - Ground workers",
          },
          {
            pathway: "Dust/soil ingestion/inhalation",
            receptor: "Human health - End users",
          },
          {
            pathway: "Dust/soil ingestion/inhalation",
            receptor: "Human health - Ground workers",
          },
          {
            pathway:
              "Leaching of contaminants, and migration into water environment ",
            receptor: "Water bodies",
          },
          {
            pathway:
              "Creation of pathways via piling or other construction activities /development design",
            receptor: "Water bodies (groundwater)",
          },
          {
            pathway: "Mobilisation of contaminated soils into surface water",
            receptor: "Water bodies (surface water)",
          },
          {
            pathway: "Vapour inhalation ",
            receptor: "Human health - End users",
          },
          {
            pathway: "Vapour inhalation ",
            receptor: "Human health - Ground workers",
          },
          {
            pathway: "Ingestion of homegrown produce",
            receptor: "Human health - End users",
          },
          {
            pathway: "Permeation of buried water supply pipes ",
            receptor: "Human health - End users",
          },
        ],
      },
      {
        name: "Explosives",
        key: "22827e1f-ff39-45f8-af9f-ac71a4861ebb",
        other: [
          {
            pathway: "Impact on UXO through below-ground activities",
            receptor: "Human health - End users",
          },
          {
            pathway: "Impact on UXO through below-ground activities",
            receptor: "Human health - Ground workers",
          },
          {
            pathway: "Impact on UXO through below-ground activities",
            receptor: "Buildings and structures",
          },
        ],
      },
    ],
  };

  const fetchAll = async (): Promise<void> => {
    sources.value = [];
    contaminants.value = new Map();

    if (
      rawData === undefined ||
      rawData.contaminants === undefined ||
      rawData.sources === undefined
    ) {
      console.error("error reading data");
      return;
    }

    sources.value = rawData.sources;
    contaminants.value = rawData.contaminants.reduce(
      (
        prev: Map<string, ContaminantGroup>,
        cur: ContaminantGroup
      ): Map<string, ContaminantGroup> => {
        if (cur.key === undefined) {
          console.error("invalid key: '", cur.key, "'");
        } else if (prev.has(cur.key)) {
          console.error("duplicate key: '", cur.key, "'");
        } else {
          prev.set(cur.key, cur);
        }
        return prev;
      },
      new Map()
    );

    isLoaded.value = true;
  };

  return { sources, contaminants, isLoaded, fetchAll };
});
