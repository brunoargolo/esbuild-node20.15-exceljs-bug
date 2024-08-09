import esbuild from 'esbuild';
import _fs from 'fs';

const REQUIRE_SHIM = `
// Shim require if needed.
import module from 'module';
if (typeof globalThis.require === "undefined") {
  globalThis.require = module.createRequire(import.meta.url);
}
`;

// const outfile = 'dist/index.js';
export const build = async () => {
  
  try {
    const params = {
      entryPoints: ['index.js'],
      outdir: 'dist',
      bundle: true,
      minify: false,
      platform: 'node',
      target: 'node20',
      format: 'esm',
      sourcemap: true,
      banner: {
        js: REQUIRE_SHIM,
      }
    };
    
    await esbuild.build(params);
    console.log(`Finished building @${process.cwd()} -> ${params.entryPoints}`);
  } catch (e) {
    console.error(`Error building @${process.cwd()} -> ${entryPoints}`, e);
  }
};

build().catch((e) => {
  console.error(`Error building @${process.cwd()} -> ${entryPoints}`, e);
});
