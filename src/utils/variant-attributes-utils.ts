import { FirebaseProduct } from "@merittdev/sdk";

// Helper function to extract unique attribute values from variants
export const getUniqueAttributeValues = (
  variants: FirebaseProduct["variants"],
  attribute: string
) => {
  const values = new Set<string>();
  variants.forEach((variant) => {
    if (variant.attributes[attribute]) {
      values.add(variant.attributes[attribute]);
    }
  });
  return Array.from(values);
};

// Helper function to find variant by attributes
export const findVariantByAttributes = (
  variants: FirebaseProduct["variants"],
  selectedAttributes: Record<string, string>
) => {
  return variants.find((variant) => {
    return Object.entries(selectedAttributes).every(([key, value]) => {
      return variant.attributes[key] === value;
    });
  });
};

// Helper function to get available variants for a specific attribute value
export const getAvailableVariantsForAttribute = (
  variants: FirebaseProduct["variants"],
  attribute: string,
  value: string,
  selectedAttributes: Record<string, string>
) => {
  const otherAttributes = { ...selectedAttributes };
  delete otherAttributes[attribute];

  const availableVariants = variants.filter((variant) => {
    // Check if this variant has the specific attribute value
    if (variant.attributes[attribute] !== value) return false;

    // If no other attributes are selected, this variant is available
    if (Object.keys(otherAttributes).length === 0) {
      return true;
    }

    // Check if this variant matches other selected attributes
    return Object.entries(otherAttributes).every(([key, val]) => {
      return variant.attributes[key] === val;
    });
  });

  return availableVariants;
};


// Simple attribute type detection
export const isColorAttribute = (attribute: string): boolean => {
  const attributeLower = attribute.toLowerCase();
  return attributeLower.includes("color") || attributeLower.includes("colour");
};

// Simple color style function - directly uses the color value
export const getColorStyle = (color: string): React.CSSProperties => {
  return {
    backgroundColor: color,
    // Add border for white/light colors to make them visible
    ...(color.toLowerCase() === "white" && { border: "1px solid #d1d5db" }),
  };
};
