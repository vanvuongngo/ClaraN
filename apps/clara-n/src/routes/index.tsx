import type { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = ({ redirect, url }) => {
  // the local en does not matter will be auto detected
  throw redirect(301, `/en/${url.search}`);
};
