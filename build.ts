// bun build ./src/index.html --outdir=dist --sourcemap --target=browser --minify --define:process.env.NODE_ENV='\"production\"'

await Bun.build({
    entrypoints: ["./src/index.html"],
    outdir: "./dist",
    sourcemap: true,
    target: "browser",
    minify: true,
    define: {
        'process.env.NODE_ENV': '"production"'
    }
});
