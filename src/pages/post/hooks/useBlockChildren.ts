import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";
import useSWR from "swr";

const fetcher = async (blockId: string) => {
  const res = await fetch(`/api/block/${blockId}`);
  return res.json();
};

export const useBlockChildren = (blockId: string) => {
  const { data, error, isLoading } = useSWR<ListBlockChildrenResponse>(
    blockId ? `/api/block/${blockId}` : null,
    () => fetcher(blockId),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 3600000, // 1시간
    }
  );

  return {
    children: data,
    isLoading,
    isError: error,
  };
};
