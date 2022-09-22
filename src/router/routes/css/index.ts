import { DefaultLayout } from "@/layout/index";
import antdv from "./antdv";

export default {
  path: "/css",
  component: DefaultLayout,
  name: "Css",
  children: [...antdv],
};
