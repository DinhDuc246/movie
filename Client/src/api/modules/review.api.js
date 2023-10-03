import privateClient from "../client/private.client";

const reviewEndpoints = {
  list: "reviews",
  add: "reviews",
  remove: ({ reviewId }) => `review/${reviewId}`,
};

const reviewApi = {
  add: async ({ mediaId, mediaType, mediaTitle, mediaPoster, content }) => {
    try {
      const reponse = await privateClient.post(reviewEndpoints.add, {
        mediaId,
        mediaType,
        mediaTitle,
        mediaPoster,
        content,
      });
      return { reponse };
    } catch (err) {
      return { err };
    }
  },
  remove: async ({ reviewId }) => {
    try {
      const reponse = await privateClient.post(reviewEndpoints.remove, {
        reviewId,
      });
      return { reponse };
    } catch (err) {
      return { err };
    }
  },
  getList: async () => {
    try {
      const reponse = await privateClient.get(reviewEndpoints.list);
      return { reponse };
    } catch (err) {
      return { err };
    }
  },
};
export default reviewApi;
