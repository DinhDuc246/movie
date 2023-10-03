import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

const mediaEndpoints = {
  list: ({ mediaType, mediaCategory, page }) =>
    `${mediaType}/{mediaCategory}?page=${page}`,
  detail: ({ mediaType, mediaId }) => `${mediaType}/detail/${mediaId}`,
  search: ({ mediaType, query, page }) =>
    `${mediaType}/search?query=${query}&page=${page}`,
};
const mediaApi = {
  getList: async ({ mediaType, mediaCategory, page }) => {
    try {
      const reponse = await publicClient.get(
        mediaEndpoints.list({
          mediaType,
          mediaCategory,
          page,
        })
      );
      return { reponse };
    } catch (err) {
      return { err };
    }
  },
  getDetails: async ({ mediaType, mediaId }) => {
    try {
      const reponse = await privateClient.get(
        mediaEndpoints.detail({
          mediaType,
          mediaId,
        })
      );
      return { reponse };
    } catch (err) {
      return { err };
    }
  },
  search: async ({ mediaType, query, page }) => {
    try {
      const reponse = await publicClient.get(
        mediaEndpoints.search({
          mediaType,
          query,
          page,
        })
      );
      return { reponse };
    } catch (err) {
      return { err };
    }
  },
};
