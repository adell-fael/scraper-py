# Web Scraper with Dynamic Product Variants

This project demonstrates a dynamic product variant selection system that works with Firebase products. The system automatically detects and handles product variants without requiring UI modifications.

## Features

### Dynamic Variant Selection

- **Automatic Attribute Detection**: Automatically detects all attributes (color, size, material, etc.) from product variants
- **Dynamic Pricing**: Price updates automatically based on selected variant
- **Smart Availability**: Disables unavailable attribute combinations
- **Flexible Structure**: Works with any attribute structure in your variants

### How It Works

The system uses the `FirebaseProduct` type with variants that have an `attributes` object:

```typescript
interface FirebaseProduct {
  id: string;
  name: string;
  variants: ProductVariant[];
  // ... other fields
}

interface ProductVariant {
  id: string;
  name: string;
  price: number;
  attributes: Record<string, string>; // e.g., { color: "red", size: "M" }
}
```

### Example Product Structure

```json
{
  "name": "Premium T-Shirt",
  "variants": [
    {
      "id": "1",
      "name": "Small Black",
      "price": 25.99,
      "attributes": {
        "color": "black",
        "size": "S"
      }
    },
    {
      "id": "2",
      "name": "Medium Black",
      "price": 25.99,
      "attributes": {
        "color": "black",
        "size": "M"
      }
    },
    {
      "id": "3",
      "name": "Small Red",
      "price": 27.99,
      "attributes": {
        "color": "red",
        "size": "S"
      }
    }
  ]
}
```

### Key Functions

1. **`getUniqueAttributeValues()`**: Extracts unique values for each attribute from variants
2. **`findVariantByAttributes()`**: Finds the specific variant based on selected attributes
3. **`getAvailableVariantsForAttribute()`**: Determines which attribute values are available given current selections

### UI Behavior

- **Color Attributes**: Displayed as circular color swatches
- **Size/Other Attributes**: Displayed as selectable buttons
- **Dynamic Disabling**: Unavailable combinations are automatically disabled
- **Price Updates**: Price changes instantly when variant selection changes
- **Add to Cart**: Button is disabled until a valid variant is selected

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up your Firebase configuration in the environment variables

3. Create products with variants in your Firebase database

4. The component will automatically handle variant selection based on your data structure

## Component Usage

The main component is located at `src/scraped_components/component_1_fr820t.tsx` and demonstrates:

- Dynamic attribute detection
- Real-time price updates
- Smart availability checking
- Responsive UI for different attribute types

## Technical Implementation

The system uses React state management to track:

- `selectedAttributes`: Current attribute selections
- `selectedVariant`: The currently selected variant
- Automatic updates when attributes change

The UI automatically adapts to:

- Number of attributes in your variants
- Attribute types (color vs size vs other)
- Available combinations
- Price variations

## Benefits

1. **No UI Changes Required**: Works with any attribute structure
2. **Automatic Validation**: Prevents invalid selections
3. **Real-time Updates**: Price and availability update instantly
4. **Scalable**: Handles any number of attributes and variants
5. **Type Safe**: Full TypeScript support with Firebase types

## Example Usage

```typescript
// The component automatically handles this product structure
const product = {
  name: "Custom Product",
  variants: [
    { id: "1", price: 10, attributes: { color: "red", size: "S" } },
    { id: "2", price: 12, attributes: { color: "blue", size: "M" } },
    // ... more variants
  ],
};

// UI automatically creates color and size selectors
// Price updates when selections change
// Invalid combinations are disabled
```
