import { useEffect, useState } from "react";
import counterClient from "../services/counter-client";

// Define an interface for the expected API response
interface CounterResponse {
  count: number;
}

const useCounter = () => {
  const [visitorsCount, setVisitorsCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    counterClient.get<CounterResponse>('/api/visit') 
      .then((response) => {
        const data: CounterResponse = response.data;
        setVisitorsCount(data.count);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.error('Error fetching visitor count:', error);
      });
  }, []);

  return { visitorsCount, loading, error };
};

export default useCounter;
