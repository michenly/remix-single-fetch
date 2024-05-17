import {
  type LoaderFunctionArgs,
  type ActionFunctionArgs,
} from "@remix-run/server-runtime";
import { responseStub } from "app/lib/redirect";

export async function loader({ response }: LoaderFunctionArgs) {
  responseStub(response!);
}

export async function action({ response }: ActionFunctionArgs) {
  responseStub(response!);
}
