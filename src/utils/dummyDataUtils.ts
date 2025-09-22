
// Utility function to generate dummy drywall data for the comparison tool
export const generateDummyDrywallData = (query: string) => {
  if (query.toLowerCase() === 'drywall') {
    return [
      // Lowes Drywall Items
      {
        id: "drywall-1",
        name: "1/2-in x 4-ft x 8-ft USG Sheetrock Ultralight Drywall Panel",
        category: "Drywall",
        image: "https://mobileimages.lowes.com/productimages/741ebc36-ceef-4db8-b0d8-bca857852ddb/04022408.jpg",
        variations: [
          {
            storeId: "lowes-us",
            storeName: "Lowes",
            price: 12.98,
            discount: 0,
            stock: 82,
            storeItemId: "1000045841",
            productUrl: "https://www.lowes.com/pd/USG-Sheetrock-Brand-1-2-in-x-4-ft-x-8-ft-UltraLight-Drywall-Panel/4031421"
          }
        ]
      },
      {
        id: "drywall-2",
        name: "5/8-in x 4-ft x 8-ft USG Sheetrock Firecode Type X Drywall Panel",
        category: "Drywall",
        image: "https://mobileimages.lowes.com/productimages/5bde97ba-1ceb-4033-a985-d29571dcf765/04022410.jpg",
        variations: [
          {
            storeId: "lowes-us",
            storeName: "Lowes",
            price: 17.38,
            discount: 0,
            stock: 65,
            storeItemId: "1000045845",
            productUrl: "https://www.lowes.com/pd/USG-Sheetrock-Brand-5-8-in-x-4-ft-x-8-ft-Firecode-X-Drywall-Panel/4031425"
          }
        ]
      },
      {
        id: "drywall-3",
        name: "Gold Bond 1/2-in x 4-ft x 8-ft UltraLight Drywall Panel",
        category: "Drywall",
        image: "https://mobileimages.lowes.com/productimages/476809e0-8320-4092-9c74-a9c93e342f03/44321152.jpg",
        variations: [
          {
            storeId: "lowes-us",
            storeName: "Lowes",
            price: 11.98,
            discount: 0,
            stock: 45,
            storeItemId: "1000065458",
            productUrl: "https://www.lowes.com/pd/Gold-Bond-UltraLight-1-2-in-x-4-ft-x-8-ft-Drywall-Panel/5001552343"
          }
        ]
      },
      {
        id: "drywall-4",
        name: "USG Sheetrock Brand 1/4-in x 4-ft x 8-ft Ultralight Drywall Panel",
        category: "Drywall",
        image: "https://mobileimages.lowes.com/productimages/07a53d94-0c47-4cec-bbfc-c8a7869c7f8a/04022404.jpg",
        variations: [
          {
            storeId: "lowes-us",
            storeName: "Lowes",
            price: 14.78,
            discount: 0,
            stock: 30,
            storeItemId: "1000045847",
            productUrl: "https://www.lowes.com/pd/USG-Sheetrock-Brand-1-4-in-x-4-ft-x-8-ft-UltraLight-Drywall-Panel/4031419"
          }
        ]
      },

      // BuildDotCom Drywall Items
      {
        id: "drywall-5",
        name: "GP Building Products ToughRock 1/2\" x 4' x 8' Drywall Panel",
        category: "Drywall",
        image: "https://s3.img-b.com/image/private/c_lpad,f_auto,h_800,t_base,w_800/v3/product/gp/gp-050c-143313531-90.jpg",
        variations: [
          {
            storeId: "build-us",
            storeName: "Build",
            price: 13.49,
            discount: 0.05,
            stock: 120,
            storeItemId: "9046309",
            productUrl: "https://www.build.com/product/summary/9046309"
          }
        ]
      },
      {
        id: "drywall-6",
        name: "CertainTeed 1/2\" x 4' x 8' Regular Drywall Panel",
        category: "Drywall",
        image: "https://s3.img-b.com/image/private/c_lpad,f_auto,h_800,t_base,w_800/v3/product/certainteed/certainteed-190000-309090.jpg",
        variations: [
          {
            storeId: "build-us",
            storeName: "Build",
            price: 11.99,
            discount: 0,
            stock: 65,
            storeItemId: "9086307",
            productUrl: "https://www.build.com/product/summary/9086307"
          }
        ]
      },
      {
        id: "drywall-7",
        name: "USG Sheetrock 1/2\" x 4' x 12' Ultralight Drywall Panel",
        category: "Drywall",
        image: "https://s3.img-b.com/image/private/c_lpad,f_auto,h_800,t_base,w_800/v3/product/usg/usg-14212411408-737594.jpg",
        variations: [
          {
            storeId: "build-us",
            storeName: "Build",
            price: 19.98,
            discount: 0.10,
            stock: 42,
            storeItemId: "8076420",
            productUrl: "https://www.build.com/product/summary/8076420"
          }
        ]
      },
      {
        id: "drywall-8",
        name: "GP Building Products DensShield 1/2\" x 4' x 8' Tile Backer Board",
        category: "Drywall",
        image: "https://s3.img-b.com/image/private/c_lpad,f_auto,h_800,t_base,w_800/v3/product/gp/gp-ds48-5536707-1840246.jpg",
        variations: [
          {
            storeId: "build-us",
            storeName: "Build",
            price: 24.95,
            discount: 0,
            stock: 35,
            storeItemId: "9178756",
            productUrl: "https://www.build.com/product/summary/9178756"
          }
        ]
      },

      // Ace Hardware Drywall Items
      {
        id: "drywall-9",
        name: "USG Sheetrock Brand 1/2\" x 4' x 8' Mold Tough Drywall Panel",
        category: "Drywall",
        image: "https://www.acehardware.com/dw/image/v2/BVYF_PRD/on/demandware.static/-/Sites-ace-product-master-catalog/default/dw44b2c70e/products/5603121/5603121_1.jpg",
        variations: [
          {
            storeId: "acehardware-us",
            storeName: "acehardware",
            price: 13.99,
            discount: 0,
            stock: 28,
            storeItemId: "5603121",
            productUrl: "https://www.acehardware.com/departments/building-supplies/drywall/drywall/5603121"
          }
        ]
      },
      {
        id: "drywall-10",
        name: "USG Sheetrock 1/2\" x 4' x 8' Flex Drywall Panel",
        category: "Drywall",
        image: "https://www.acehardware.com/dw/image/v2/BVYF_PRD/on/demandware.static/-/Sites-ace-product-master-catalog/default/dw99d2e2da/products/5603188/5603188_1.jpg",
        variations: [
          {
            storeId: "acehardware-us",
            storeName: "acehardware",
            price: 22.99,
            discount: 0,
            stock: 15,
            storeItemId: "5603188",
            productUrl: "https://www.acehardware.com/departments/building-supplies/drywall/drywall/5603188"
          }
        ]
      },
      {
        id: "drywall-11",
        name: "USG Sheetrock 5/8\" x 4' x 8' Fire-Rated Type X Drywall Panel",
        category: "Drywall",
        image: "https://www.acehardware.com/dw/image/v2/BVYF_PRD/on/demandware.static/-/Sites-ace-product-master-catalog/default/dw0f8fb67e/products/5603139/5603139_1.jpg",
        variations: [
          {
            storeId: "acehardware-us",
            storeName: "acehardware",
            price: 18.49,
            discount: 0.05,
            stock: 32,
            storeItemId: "5603139",
            productUrl: "https://www.acehardware.com/departments/building-supplies/drywall/drywall/5603139"
          }
        ]
      },
      {
        id: "drywall-12",
        name: "CertainTeed 1/2\" x 4' x 8' Moisture Resistant Drywall Panel",
        category: "Drywall",
        image: "https://www.acehardware.com/dw/image/v2/BVYF_PRD/on/demandware.static/-/Sites-ace-product-master-catalog/default/dw24c53b7d/products/5603113/5603113_1.jpg",
        variations: [
          {
            storeId: "acehardware-us",
            storeName: "acehardware",
            price: 15.89,
            discount: 0,
            stock: 22,
            storeItemId: "5603113",
            productUrl: "https://www.acehardware.com/departments/building-supplies/drywall/drywall/5603113"
          }
        ]
      }
    ];
  }
  return [];
};
