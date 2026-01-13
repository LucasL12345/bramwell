import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";

export function useEquipmentList() {
  return useQuery({
    queryKey: [api.equipment.list.path],
    queryFn: async () => {
      const res = await fetch(api.equipment.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch equipment list");
      return api.equipment.list.responses[200].parse(await res.json());
    },
  });
}

export function useEquipment(id: number) {
  return useQuery({
    queryKey: [api.equipment.get.path, id],
    queryFn: async () => {
      const url = buildUrl(api.equipment.get.path, { id });
      const res = await fetch(url, { credentials: "include" });
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch equipment details");
      return api.equipment.get.responses[200].parse(await res.json());
    },
    enabled: !!id,
  });
}
