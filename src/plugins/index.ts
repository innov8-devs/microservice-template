import hapiInert from "@hapi/inert";
import * as HapiSwagger from "hapi-swagger";
import Pack from "../../package.json";
import hapiVision from "@hapi/vision";
import Hapi from "@hapi/hapi";

const swaggerOptions: HapiSwagger.RegisterOptions = {
  schemes: ["http", "https"],
  info: { title: "HighTable Service", version: Pack.version },
  documentationPath: "/docs",
};

const plugins: Array<Hapi.ServerRegisterPluginObject<any>> = [
  { plugin: hapiInert },
  { plugin: hapiVision },
  {
    plugin: HapiSwagger,
    options: swaggerOptions,
  },
];

export default plugins;
