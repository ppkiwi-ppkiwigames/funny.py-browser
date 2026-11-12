
self.__uv$config = {
  prefix: "/funny.py-browser/service/",
  bare: "https://tomp.app",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/funny.py-browser/uv/uv.handler.js",
  client: "/funny.py-browser/uv/uv.client.js",
  bundle: "/funny.py-browser/uv/uv.bundle.js",
  config: "/funny.py-browser/uv/uv.config.js",
  sw: "/funny.py-browser/uv/uv.sw.js"
};
