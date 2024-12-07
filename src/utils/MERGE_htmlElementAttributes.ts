//
//
//

// export type ExtraAttributes =
//   | { [key: string]: string | number | boolean }[]
//   | string[];

// export default function MERGE_htmlElementAttributes(
//   attributes:extraAttributes
// ) {
//   const mergedAttributes = attributes.reduce((acc, curr) => {
//     if (typeof curr === "string") {
//       acc[curr] = ""; // Handle strings as keys with value `true`
//     } else if (typeof curr === "object" && curr !== null) {
//       Object.entries(curr).forEach(([key, value]) => {
//         acc[key] =
//           value === undefined || value === null || value === "" ? "" : value;
//       });
//     }
//     return acc;
//   }, {} as { [key: string]: string | number | boolean | null | undefined });

//   return mergedAttributes;
// }

// input examples: ["data-arrow", `data-open="${IS_open}"`]
export default function MERGE_htmlElementAttributes(attributes: string[] = []) {
  const mergedAttributes = attributes.reduce((acc, curr) => {
    const [key, value] = curr.split("="); // Split by "=" to extract key and value
    acc[key.trim()] = value ? value.replace(/"/g, "").trim() : ""; // Remove quotes if value exists
    return acc;
  }, {} as { [key: string]: string });

  return mergedAttributes;
}
