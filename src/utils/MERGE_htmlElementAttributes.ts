//
//
//

export default function MERGE_htmlElementAttributes(attributes: string[] = []) {
  const mergedAttributes = attributes.reduce((acc, curr) => {
    const [key, value] = curr.split("="); // Split by "=" to extract key and value
    acc[key.trim()] = value ? value.replace(/"/g, "").trim() : ""; // Remove quotes if value exists
    return acc;
  }, {} as { [key: string]: string });

  return mergedAttributes;
}
