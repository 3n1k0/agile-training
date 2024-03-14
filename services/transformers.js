export function transformBlogPosts(data) {
  if (!data || !data.items || !Array.isArray(data.items)) {
    console.error("Invalid or empty data received for transformation:", data);
    return []; // Return an empty array or handle the error situation appropriately
  }

  return data.items.map((item) => {
    const {
      sys: { id },
      fields: { title, body, date, slug, featuredImage },
      metadata: { tags },
    } = item;

    const featuredImageId = featuredImage?.sys?.id;
    const featuredImageData = data.includes.Asset.find(
      (asset) => asset.sys.id === featuredImageId
    );
    const featuredImageURL =
      featuredImageData?.fields.file.url || "img/placeholder.svg";

    const bodyText = body.content
      .filter((node) => node.nodeType === "paragraph")
      .map((paragraph) =>
        paragraph.content.map((content) => content.value).join("")
      )
      .join(" ");

    return {
      id,
      title,
      body: bodyText,
      date,
      tags,
      featuredImageURL,
      slug,
    };
  });
}
