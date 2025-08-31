import { storesByCountry, getStoreById } from './storeService';

// Mock response formatting function to simulate the Unwrangle API structure
const formatMockResponse = (materials, query) => {
  return materials.map(material => {
    // Add product URL to each variation
    const updatedVariations = material.variations.map(variation => {
      const store = getStoreById(variation.storeId);
      return {
        ...variation,
        storeName: store?.name || variation.storeId,
        productUrl: `https://${variation.storeId}.com/product/${material.id}`
      };
    });
    
    return {
      ...material,
      variations: updatedVariations
    };
  });
};

// Mock drywall product data
const drywallData = [
  {
    id: '1',
    name: '1/2-in x 4-ft x 8-ft Drywall Panel',
    variations: [
      { 
        storeId: 'lowes-us', 
        price: 19.97, 
        discount: 0, 
        stock: 42, 
        storeItemId: '5678' 
      },
      { 
        storeId: 'build-us', 
        price: 21.49, 
        discount: 0, 
        stock: 18, 
        storeItemId: '3456' 
      },
      { 
        storeId: 'acehardware-us', 
        price: 20.49, 
        discount: 2, 
        stock: 30, 
        storeItemId: '7890' 
      },
      { 
        storeId: 'homedepot-us', 
        price: 18.28, 
        discount: 6, 
        stock: 24, 
        storeItemId: '1234' 
      },
      { 
        storeId: 'amazon-us', 
        price: 22.99, 
        discount: 0, 
        stock: 65, 
        storeItemId: '1357' 
      },
      { 
        storeId: 'homedepot-ca', 
        price: 24.99, 
        discount: 0, 
        stock: 16, 
        storeItemId: '7890' 
      },
      { 
        storeId: 'lowes-ca', 
        price: 25.49, 
        discount: 5, 
        stock: 28, 
        storeItemId: '3690' 
      },
    ],
    category: 'drywall',
    image: 'https://images.thdstatic.com/productImages/e9589d6f-6175-4625-8f70-01be5feb212a/svn/gold-bond-drywall-sheets-50043-64_1000.jpg'
  },
  {
    id: '2',
    name: '5/8-in x 4-ft x 8-ft Fire-Resistant Drywall Panel',
    variations: [
      { 
        storeId: 'lowes-us', 
        price: 21.97, 
        discount: 0, 
        stock: 28, 
        storeItemId: '6789' 
      },
      { 
        storeId: 'build-us', 
        price: 23.49, 
        discount: 5, 
        stock: 22, 
        storeItemId: '2468' 
      },
      { 
        storeId: 'acehardware-us', 
        price: 22.95, 
        discount: 0, 
        stock: 18, 
        storeItemId: '8901' 
      },
      { 
        storeId: 'homedepot-us', 
        price: 22.48, 
        discount: 0, 
        stock: 32, 
        storeItemId: '2345' 
      },
      { 
        storeId: 'amazon-us', 
        price: 24.99, 
        discount: 8, 
        stock: 42, 
        storeItemId: '4680' 
      },
      { 
        storeId: 'homedepot-ca', 
        price: 27.99, 
        discount: 0, 
        stock: 24, 
        storeItemId: '1579' 
      },
      { 
        storeId: 'lowes-ca', 
        price: 28.49, 
        discount: 0, 
        stock: 18, 
        storeItemId: '3698' 
      },
    ],
    category: 'drywall',
    image: 'https://images.thdstatic.com/productImages/c1f21c9d-81aa-4864-aaac-0c9e1ce96be5/svn/gold-bond-drywall-sheets-50046-e1.jpg'
  },
  {
    id: '3',
    name: '1/4-in x 4-ft x 8-ft Lightweight Drywall Panel',
    variations: [
      { 
        storeId: 'lowes-us', 
        price: 17.45, 
        discount: 5, 
        stock: 22, 
        storeItemId: '7890' 
      },
      { 
        storeId: 'build-us', 
        price: 18.99, 
        discount: 0, 
        stock: 15, 
        storeItemId: '5678' 
      },
      { 
        storeId: 'acehardware-us', 
        price: 17.95, 
        discount: 3, 
        stock: 25, 
        storeItemId: '9012' 
      },
      { 
        storeId: 'homedepot-us', 
        price: 16.98, 
        discount: 0, 
        stock: 19, 
        storeItemId: '3456' 
      },
      { 
        storeId: 'amazon-us', 
        price: 19.99, 
        discount: 7, 
        stock: 30, 
        storeItemId: '2580' 
      },
      { 
        storeId: 'homedepot-ca', 
        price: 21.99, 
        discount: 0, 
        stock: 16, 
        storeItemId: '3697' 
      },
      { 
        storeId: 'lowes-ca', 
        price: 22.49, 
        discount: 4, 
        stock: 20, 
        storeItemId: '1478' 
      },
    ],
    category: 'drywall',
    image: 'https://images.thdstatic.com/productImages/d499c2da-f4fd-4322-a8be-96363f1ed955/svn/gold-bond-drywall-sheets-05014-64_1000.jpg'
  },
  {
    id: '4',
    name: 'USG Sheetrock UltraLight 1/2-in x 4-ft x 8-ft Drywall Panel',
    variations: [
      { 
        storeId: 'lowes-us', 
        price: 22.48, 
        discount: 0, 
        stock: 36, 
        storeItemId: '8901' 
      },
      { 
        storeId: 'build-us', 
        price: 23.99, 
        discount: 0, 
        stock: 28, 
        storeItemId: '9876' 
      },
      { 
        storeId: 'acehardware-us', 
        price: 23.45, 
        discount: 5, 
        stock: 22, 
        storeItemId: '5432' 
      },
      { 
        storeId: 'homedepot-us', 
        price: 21.98, 
        discount: 0, 
        stock: 31, 
        storeItemId: '4567' 
      },
      { 
        storeId: 'amazon-us', 
        price: 24.99, 
        discount: 10, 
        stock: 45, 
        storeItemId: '8520' 
      },
      { 
        storeId: 'homedepot-ca', 
        price: 28.99, 
        discount: 0, 
        stock: 24, 
        storeItemId: '3692' 
      },
      { 
        storeId: 'lowes-ca', 
        price: 29.49, 
        discount: 6, 
        stock: 18, 
        storeItemId: '7531' 
      },
    ],
    category: 'drywall',
    image: 'https://images.thdstatic.com/productImages/7e075f92-3440-4cfb-a6e1-48c3fbe7d988/svn/sheetrock-drywall-sheets-14113411708-64_1000.jpg'
  },
  {
    id: '5',
    name: 'Mold-Resistant 1/2-in x 4-ft x 8-ft Drywall Panel',
    variations: [
      { 
        storeId: 'lowes-us', 
        price: 24.99, 
        discount: 8, 
        stock: 18, 
        storeItemId: '9012' 
      },
      { 
        storeId: 'build-us', 
        price: 26.99, 
        discount: 5, 
        stock: 9, 
        storeItemId: '7890' 
      },
      { 
        storeId: 'acehardware-us', 
        price: 25.95, 
        discount: 0, 
        stock: 12, 
        storeItemId: '4567' 
      },
      { 
        storeId: 'homedepot-us', 
        price: 24.48, 
        discount: 0, 
        stock: 22, 
        storeItemId: '8901' 
      },
      { 
        storeId: 'amazon-us', 
        price: 27.99, 
        discount: 12, 
        stock: 32, 
        storeItemId: '1597' 
      },
      { 
        storeId: 'homedepot-ca', 
        price: 32.99, 
        discount: 0, 
        stock: 14, 
        storeItemId: '2587' 
      },
      { 
        storeId: 'lowes-ca', 
        price: 33.49, 
        discount: 7, 
        stock: 10, 
        storeItemId: '9517' 
      },
    ],
    category: 'drywall',
    image: 'https://images.thdstatic.com/productImages/92cebd43-c634-4786-b905-fa67b7e10d3c/svn/gold-bond-drywall-sheets-gb50004800-64_1000.jpg'
  },
  {
    id: '6',
    name: 'High-Impact 5/8-in x 4-ft x 8-ft Drywall Panel',
    variations: [
      { 
        storeId: 'lowes-us', 
        price: 29.99, 
        discount: 0, 
        stock: 16, 
        storeItemId: '2345' 
      },
      { 
        storeId: 'build-us', 
        price: 31.49, 
        discount: 7, 
        stock: 8, 
        storeItemId: '0123' 
      },
      { 
        storeId: 'acehardware-us', 
        price: 30.95, 
        discount: 0, 
        stock: 10, 
        storeItemId: '6789' 
      },
      { 
        storeId: 'homedepot-us', 
        price: 29.48, 
        discount: 0, 
        stock: 14, 
        storeItemId: '6789' 
      },
      { 
        storeId: 'amazon-us', 
        price: 32.99, 
        discount: 5, 
        stock: 22, 
        storeItemId: '3698' 
      },
      { 
        storeId: 'homedepot-ca', 
        price: 36.99, 
        discount: 0, 
        stock: 12, 
        storeItemId: '7539' 
      },
      { 
        storeId: 'lowes-ca', 
        price: 37.49, 
        discount: 8, 
        stock: 8, 
        storeItemId: '9514' 
      },
    ],
    category: 'drywall',
    image: 'https://images.thdstatic.com/productImages/13344ebb-aa11-4cc7-9d2e-d4a87bf91553/svn/certainteed-drywall-sheets-60048-11000-e1.jpg'
  }
];

// Mock material data
const materialData = [
  {
    id: '1',
    name: '1/2-in x 4-ft x 8-ft Drywall Panel',
    variations: [
      { 
        storeId: 'homedepot', 
        price: 19.97, 
        discount: 0, 
        stock: 12, 
        storeItemId: '5678' 
      },
      { 
        storeId: 'lowes', 
        price: 19.97, 
        discount: 0, 
        stock: 0,
        storeItemId: '9012' 
      },
      { 
        storeId: 'menards', 
        price: 17.99, 
        discount: 0, 
        stock: 8,
        storeItemId: '3456' 
      },
      { 
        storeId: 'ace', 
        price: 20.49, 
        discount: 2, 
        stock: 8,
        storeItemId: '7890' 
      },
      { 
        storeId: 'homedepot_ca', 
        price: 24.99, 
        discount: 0, 
        stock: 16,
        storeItemId: '7890' 
      },
      { 
        storeId: 'rona', 
        price: 23.49, 
        discount: 5, 
        stock: 10,
        storeItemId: '1357' 
      },
      { 
        storeId: 'bunnings', 
        price: 32.95, 
        discount: 0, 
        stock: 22,
        storeItemId: '2468' 
      },
      { 
        storeId: 'diy', 
        price: 16.99, 
        discount: 0, 
        stock: 30,
        storeItemId: '3690' 
      },
    ],
    category: 'gc',
    image: 'https://images.thdstatic.com/productImages/e9589d6f-6175-4625-8f70-01be5feb212a/svn/gold-bond-drywall-sheets-50043-64_1000.jpg'
  },
  {
    id: '2',
    name: '5/8-in x 4-ft x 8-ft Fire-Resistant Drywall Panel',
    variations: [
      { 
        storeId: 'homedepot', 
        price: 21.48, 
        discount: 0, 
        stock: 18, 
        storeItemId: '6789' 
      },
      { 
        storeId: 'lowes', 
        price: 21.48, 
        discount: 0, 
        stock: 18, 
        storeItemId: '0123' 
      },
      { 
        storeId: 'menards', 
        price: 21.48, 
        discount: 0, 
        stock: 18, 
        storeItemId: '2345' 
      },
    ],
    category: 'gc',
    image: 'https://images.thdstatic.com/productImages/c1f21c9d-81aa-4864-aaac-0c9e1ce96be5/svn/gold-bond-drywall-sheets-50046-e1.jpg'
  },
  {
    id: '3',
    name: '1/4-in x 4-ft x 8-ft Lightweight Drywall Panel',
    variations: [
      { 
        storeId: 'homedepot', 
        price: 16.98, 
        discount: 0, 
        stock: 15, 
        storeItemId: '3456' 
      },
      { 
        storeId: 'lowes', 
        price: 17.45, 
        discount: 5, 
        stock: 8, 
        storeItemId: '7890' 
      },
      { 
        storeId: 'menards', 
        price: 16.49, 
        discount: 0, 
        stock: 22, 
        storeItemId: '1234' 
      },
    ],
    category: 'gc',
    image: 'https://images.thdstatic.com/productImages/d499c2da-f4fd-4322-a8be-96363f1ed955/svn/gold-bond-drywall-sheets-05014-64_1000.jpg'
  },
  {
    id: '4',
    name: 'PVC Pipe 1-in x 10-ft',
    variations: [
      { 
        storeId: 'homedepot', 
        price: 6.98, 
        discount: 0, 
        stock: 42, 
        storeItemId: '4567' 
      },
      { 
        storeId: 'lowes', 
        price: 7.24, 
        discount: 0, 
        stock: 36, 
        storeItemId: '8901' 
      },
      { 
        storeId: 'menards', 
        price: 6.89, 
        discount: 3, 
        stock: 28, 
        storeItemId: '2345' 
      },
    ],
    category: 'plumbing',
    image: 'https://images.thdstatic.com/productImages/b22f5de7-378e-4c92-a7e9-7a0eaa4ecf9c/svn/charlotte-pipe-pvc-pipe-pvc-04010-0600-64_1000.jpg'
  },
  {
    id: '5',
    name: 'Wire Romex 12-2 (250-ft)',
    variations: [
      { 
        storeId: 'homedepot', 
        price: 114.95, 
        discount: 0, 
        stock: 6, 
        storeItemId: '5678' 
      },
      { 
        storeId: 'lowes', 
        price: 119.99, 
        discount: 8, 
        stock: 4, 
        storeItemId: '9012' 
      },
      { 
        storeId: 'menards', 
        price: 110.99, 
        discount: 0, 
        stock: 0, 
        storeItemId: '3456' 
      },
    ],
    category: 'electrical',
    image: 'https://images.thdstatic.com/productImages/2037cb85-d935-4ade-a572-65f573c8e0a9/svn/southwire-electrical-wire-28828221-64_1000.jpg'
  },
  {
    id: '6',
    name: 'Lumber 2x4x8 Stud SPF',
    variations: [
      { 
        storeId: 'homedepot', 
        price: 3.88, 
        discount: 0, 
        stock: 184, 
        storeItemId: '6789' 
      },
      { 
        storeId: 'lowes', 
        price: 3.98, 
        discount: 0, 
        stock: 156, 
        storeItemId: '0123' 
      },
      { 
        storeId: 'menards', 
        price: 3.79, 
        discount: 0, 
        stock: 204, 
        storeItemId: '4567' 
      },
    ],
    category: 'gc',
    image: 'https://images.thdstatic.com/productImages/ff21db19-d1ab-4f4c-b2f1-3c0c89ed70f6/svn/dimensional-lumber-161640-64_1000.jpg'
  },
];

// Mock search functionality
export const searchMaterials = async (query: string, options: any) => {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      // Use drywall data if searching for drywall
      const dataSource = query.toLowerCase().includes('drywall') ? drywallData : materialData;
      
      // Simple search logic
      const results = dataSource.filter(material => 
        material.name.toLowerCase().includes(query.toLowerCase())
      );
      
      // Format the results to include product URLs and match Unwrangle API structure better
      const formattedResults = formatMockResponse(results, query);
      
      // Filter and sort the variations
      const filteredResults = formattedResults.map(material => {
        // First, get variations that match the filters
        const filteredVariations = material.variations.filter(variation => {
          // Filter out of stock items if needed
          if (!options.includeOutOfStock && variation.stock === 0) {
            return false;
          }
          
          // Filter by selected stores
          return options.storeIds.includes(variation.storeId);
        });
        
        // Sort variations by price (lowest to highest)
        const sortedVariations = [...filteredVariations].sort((a, b) => {
          // Calculate effective price (after discount)
          const priceA = a.discount > 0 ? a.price * (1 - a.discount / 100) : a.price;
          const priceB = b.discount > 0 ? b.price * (1 - b.discount / 100) : b.price;
          return priceA - priceB;
        });
        
        return {
          ...material,
          variations: sortedVariations
        };
      });
      
      resolve(filteredResults);
    }, 800);
  });
};

// Mock export functionality
export const exportMaterialList = async (items: any[], format: 'pdf' | 'excel' | 'csv') => {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      console.log(`Exporting material list in ${format} format`, items);
      
      // Mock response
      resolve({
        success: true,
        url: `https://example.com/exports/materials.${format}`,
      });
    }, 800);
  });
};

// Mock save functionality
export const saveMaterialList = async (items: any[]) => {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      console.log('Saving material list to account', items);
      
      // Mock response
      resolve({
        success: true,
        listId: Math.floor(Math.random() * 1000000).toString(),
      });
    }, 800);
  });
};
