import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBloodpressures } from "../../services/apiBloodpressures";
import { useSearchParams } from "react-router-dom";
import { PAGING_SIZE } from "../../utils/constants";

export function useBloodpressures() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  const sortByRaw = searchParams.get("sortBy") || "pressureDate-asc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  //console.log("searchParams " + searchParams);

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // console.log("page...... " + page);

  const {
    isLoading,
    data: { data: bloodpressures, count } = {},
    error,
  } = useQuery({
    queryKey: ["bloodpressures", filter, sortBy, page],
    queryFn: () => getBloodpressures({ filter, sortBy, page }),
  });

  const pageCount = Math.ceil(page / PAGING_SIZE);

  //console.log("pageCount...... " + pageCount);

  if (page < pageCount) {
    //console.log("page < pageCount ");
    queryClient.prefetchQuery({
      queryKey: ["bloodpressures", filter, sortBy, page + 1],
      queryFn: () => getBloodpressures({ filter, sortBy, page: page + 1 }),
    });
  }

  if (page > 1) {
    // console.log("page > 1");
    queryClient.prefetchQuery({
      queryKey: ["bloodpressures", filter, sortBy, page - 1],
      queryFn: () => getBloodpressures({ filter, sortBy, page: page - 1 }),
    });
  }

  if (page == 1) {
    //console.log("page == 1");
    queryClient.prefetchQuery({
      queryKey: ["bloodpressures", filter, sortBy, page],
      queryFn: () => getBloodpressures({ filter, sortBy, page: page }),
    });
  }

  //console.log("before bloodpressures.map...... " + page);
  /*
  console.log("before bloodpressures.map...... count " + count);
  bloodpressures.map((item) => {
    console.log("item.id...111" + item.id);
    console.log("item.created_at...111" + item.created_at);
  });
*/
  //console.log("bloodpressures " + { bloodpressures });

  return { isLoading, error, bloodpressures, count };
}
