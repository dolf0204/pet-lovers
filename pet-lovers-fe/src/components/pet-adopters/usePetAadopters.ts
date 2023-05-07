import { useCallback, useEffect, useState } from "react";
import { IAdopt } from "../models/IAdopt";
import { useApi } from "../../common/hooks/useApiRequest";

export const usePetAdopters = () => {
  const [petAdopters, setPetAdopters] = useState<IAdopt<string>[]>([]);

  const { httpGetPetAdopters } = useApi();

  useEffect(() => {
    getPetAdopters();
  }, []);

  const getPetAdopters = useCallback(async () => {
    const response = await httpGetPetAdopters();
    if (response) {
      setPetAdopters(response as IAdopt<string>[]);
    }
  }, [petAdopters]);

  const columns = [
    {
      title: "Id",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "Name",
      key: "username",
      dataIndex: "username",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Pet",
      key: "pet",
      dataIndex: "pet",
    },
  ];

  return {
    petAdopters,
    columns,
  };
};
