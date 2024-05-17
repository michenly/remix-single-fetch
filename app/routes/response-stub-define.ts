import {
  unstable_defineLoader as defineLoader,
  unstable_defineAction as defineAction,
} from "@remix-run/server-runtime";
import { responseStub } from "app/lib/redirect";

export const loader = defineLoader(async ({ response }) => {
  responseStub(response!);
  return null;
});

export const action = defineAction(async ({ response }) => {
  responseStub(response!);
  return null;
});
