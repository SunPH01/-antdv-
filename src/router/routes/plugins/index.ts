import { DefaultLayout } from "@/layout/index";
import files from "./files";

export default {
  path: "/plugins",
  component: DefaultLayout,
  name: "Plugins",
  children: [...files],
};
