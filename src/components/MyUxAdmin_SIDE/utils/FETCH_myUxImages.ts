//
//
//

import { supabase } from "@/supabase";

export default async function FETCH_myUxImages(
  imageNames: string[],
  uxId: string
) {
  try {
    const fetchedImages: File[] = [];
    for (const imageName of imageNames) {
      const { data } = supabase.storage
        .from("my-ux-images")
        .getPublicUrl(`${uxId}/${imageName}`);
      const imageUrl = data?.publicUrl;

      if (imageUrl) {
        const response = await fetch(imageUrl);
        if (!response.ok)
          throw new Error(`Failed to fetch image: ${imageName}`);
        const blob = await response.blob();
        fetchedImages.push(new File([blob], imageName, { type: blob.type }));
      }
    }
    return fetchedImages;
  } catch (error) {
    console.error("Error fetching images", error);
    return [];
  }
}
