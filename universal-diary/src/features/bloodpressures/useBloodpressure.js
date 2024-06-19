import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBloodpressure } from "../../services/apiBloodpressures";

export function useBloodpressure() {
  const { bloodpressureId } = useParams();

  //console.log("useBloodpressure.... " + bloodpressureId);

  const {
    isLoading,
    data: bloodpressure,
    error,
  } = useQuery({
    queryKey: ["bloodpressure", bloodpressureId],
    queryFn: () => getBloodpressure(bloodpressureId),
    retry: false,
  });

  /*
  const {
    isLoading,
    data: bloodpressure,
    error,
  } = useQuery({
    queryKey: ["bloodpressure"],
    queryFn: async () => await getBloodpressure(bloodpressureId),
  });
  */

  //if (isLoading) return "Loading...";
  //if (error) return "An error has occurred: " + error.message;

  //console.log("useBloodpressure second " + bloodpressure);

  return { bloodpressure, isLoading, error };
}
