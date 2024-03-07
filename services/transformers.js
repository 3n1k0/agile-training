export function transformBlogPosts(data) {
  return data.items.map((item) => {
    const {
      sys: { id },
      fields: { title, body, date, featuredImage },
      metadata: { tags },
    } = item;

    const featuredImageId = featuredImage.sys.id;
    const featuredImageData = data.includes.Asset.find(
      (asset) => asset.sys.id === featuredImageId
    );
    const featuredImageURL = featuredImageData.fields.file.url;

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
    };
  });
}
