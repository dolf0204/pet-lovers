import ky from "ky";
import { IAdopt } from "../../components/models/IAdopt";

export const useApi = () => {
  const API_URL = "http://localhost:8000";

  async function httpGetPetAdopters() {
    const response = await ky.get(`${API_URL}/petAdopters`);

    if (response) {
      return await response.json();
    }
  }

  async function httpPostPetAdopter(petAdopter: IAdopt<string>) {
    try {
      return await ky.post(`${API_URL}/petAdopters`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(petAdopter),
      });
    } catch (error) {
      return { ok: false };
    }
  }

  return { httpGetPetAdopters, httpPostPetAdopter };
};
