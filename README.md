Assuming volta is your node version manager, please adjust accordingly

This works fine with up to node 20.14:
volta pin node@20.14.0 && node esbuild.js && node test.js
```
Success!!!
```

But breaks starting node 20.15:
volta pin node@20.15.0 && node esbuild.js && node test.js
```
node:internal/util:508
        filename[0] !== '/' &&
                ^

TypeError: Cannot read properties of null (reading '0')
    at isInsideNodeModules (node:internal/util:508:17)
    at showFlaggedDeprecation (node:buffer:178:8)
    at new Buffer (node:buffer:266:3)
    at utils.normalizeInputSource (file:///Users/boliveira/dev/waterfall/utilities/cloudformation/lambdas/exceljsbug/dist/index.js:44519:16)
    at Archiver.append (file:///Users/boliveira/dev/waterfall/utilities/cloudformation/lambdas/exceljsbug/dist/index.js:44932:21)
    at file:///Users/boliveira/dev/waterfall/utilities/cloudformation/lambdas/exceljsbug/dist/index.js:49153:20
    at new Promise (<anonymous>)
    at WorkbookWriter.addThemes (file:///Users/boliveira/dev/waterfall/utilities/cloudformation/lambdas/exceljsbug/dist/index.js:49152:16)
    at new WorkbookWriter (file:///Users/boliveira/dev/waterfall/utilities/cloudformation/lambdas/exceljsbug/dist/index.js:49040:42)
    at handler (file:///Users/boliveira/dev/waterfall/utilities/cloudformation/lambdas/exceljsbug/dist/index.js:64169:20)
    at file:///Users/boliveira/dev/waterfall/utilities/cloudformation/lambdas/exceljsbug/test.js:2:7
    at ModuleJob.run (node:internal/modules/esm/module_job:222:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:316:24)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:123:5)
```

Runnig straight without esbuild:
volta pin node@20.15.0 && node test-straight.js
```
Success!!!
```
