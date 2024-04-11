import {
  useQuery
} from "/build/_shared/chunk-FJ3DN6QI.js";
import {
  useOutletContext
} from "/build/_shared/chunk-GLJGHDPE.js";
import {
  createHotContext
} from "/build/_shared/chunk-462RK7JO.js";

// app/hooks/useUserMetadata.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useUserMetadata.ts"
  );
  import.meta.hot.lastModified = "1712808153530.0757";
}
function useUserMetadata(email) {
  const { userDirectoryUrl } = useOutletContext();
  const search = new URLSearchParams({ email });
  const key = `${userDirectoryUrl}?${search}`;
  const initialData = {
    displayName: email
  };
  return useQuery({
    initialData,
    queryKey: [key],
    queryFn: async ({ queryKey: [key2] }) => {
      var _a;
      if (userDirectoryUrl === void 0)
        return Promise.resolve(initialData);
      const response = await fetch(key2, { credentials: "include" });
      if ((_a = response.headers.get("Content-Type")) == null ? void 0 : _a.startsWith("application/json")) {
        const parsedData = await response.json();
        return {
          ...parsedData,
          displayName: `${parsedData.firstName} ${parsedData.lastName}`
        };
      }
      return initialData;
    }
  });
}

export {
  useUserMetadata
};
//# sourceMappingURL=/build/_shared/chunk-E6WYMPWQ.js.map
