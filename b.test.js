var createGL = require("gl");

test("foo", () => {
  var gl = createGL(1, 1, { preserveDrawingBuffer: true });
  gl.clearColor(1, 0, 0, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);
  var pixels = new Uint8Array(4);
  gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
  expect(pixels).toEqual(new Uint8Array([ 255, 0, 0, 255 ]));
});
