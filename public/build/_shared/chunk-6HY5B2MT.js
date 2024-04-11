import {
  createHotContext
} from "/build/_shared/chunk-462RK7JO.js";

// app/utils/keepTrying.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/keepTrying.ts"
  );
  import.meta.hot.lastModified = "1712808153535.0098";
}
function keepTrying(fn) {
  let keepTrying2 = true;
  const execute = (retryTime = 1e3) => {
    fn().catch((error) => {
      console.debug(error);
      setTimeout(() => {
        if (keepTrying2) {
          execute(retryTime * 1.5);
        }
      }, retryTime);
    });
  };
  execute();
  return () => {
    keepTrying2 = false;
  };
}

export {
  keepTrying
};
//# sourceMappingURL=/build/_shared/chunk-6HY5B2MT.js.map
