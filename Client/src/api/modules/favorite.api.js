import privateClient from "../client/public.client";

const favoriteEndpoints = {
  list: "user/favorites",
  add: "user/favorites",
  remove: ({ favoritedId }) => `user/favorites/${favoritedId}`,
};

const favoritedApi = {
  getList: async () => {
    try {
      const reponse = await privateClient.get(favoriteEndpoints.list);
      return { reponse };
    } catch (err) {
      return { err };
    }
  },
  add: async ({ mediaId, mediaType, mediaTitle, mediaPoster, mediaRate }) => {
    try {
      const reponse = await privateClient.get(
        favoriteEndpoints.add({
          mediaId,
          mediaType,
          mediaTitle,
          mediaPoster,
          mediaRate,
        })
      );
      return { reponse };
    } catch (err) {
      return { err };
    }
  },
  remove: async ({ favoritedId }) => {
    try {
      const reponse = await privateClient.delete(
        favoriteEndpoints.delete({ favoritedId })
      );
      return { reponse };
    } catch (err) {
      return { err };
    }
  },
};
export default favoritedApi;
