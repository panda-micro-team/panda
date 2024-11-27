import axios from "axios";

export type Weather = {
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
};

const WEATHER_API_KEY = "6b5afb1afe4b40608a9182128242211";
const BASE_URL = "https://api.weatherapi.com/v1/current.json";

export const fetchWeather = async (capital: string): Promise<Weather> => {
  if (!capital || capital.trim() === "") {
    console.warn("City name is missing or invalid.");
    throw new Error("Invalid capital name");
  }

  const normalizedCapital = getCityNameForApi(capital);

  try {
    const response = await axios.get<Weather>(BASE_URL, {
      params: {
        key: WEATHER_API_KEY,
        q: encodeURIComponent(normalizedCapital),
      },
    });
    return response.data;
  } catch (error: unknown) {
    handleApiError(error, capital, normalizedCapital);
    throw error;
  }
};

const cityNameMapping: Record<string, string> = {
  Naypyidaw: "Nay Pyi Taw",
  Ngerulmud: "Melekeok",
  Fakaofo: "Tokelau",
  "Nuku'alofa": "Tongatapu",
  Yaoundé: "Yaounde",
  "Sana'a": "Sanaa",
};

const normalizeCityName = (city: string): string =>
  city
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/'/g, "")
    .trim();

const getCityNameForApi = (city: string): string =>
  cityNameMapping[city] || normalizeCityName(city);

export const fetchWeatherWithTemperature = async (
  capital: string,
): Promise<number | null> => {
  if (!capital || capital.trim() === "") {
    console.warn("City name is missing or invalid.");
    return null;
  }

  const normalizedCapital = getCityNameForApi(capital);

  try {
    const response = await axios.get<Weather>(BASE_URL, {
      params: {
        key: WEATHER_API_KEY,
        q: encodeURIComponent(normalizedCapital),
      },
    });
    return response.data?.current?.temp_c || null;
  } catch (error: unknown) {
    handleApiError(error, capital, normalizedCapital);
    return null;
  }
};

const isAxiosError = (
  error: unknown,
): error is Error & { isAxiosError: boolean } => {
  return typeof error === "object" && error !== null && "isAxiosError" in error;
};

const handleApiError = (
  error: unknown,
  original: string,
  normalized: string,
): void => {
  if (isAxiosError(error)) {
    console.error(
      `Failed to fetch weather for "${original}" (normalized: "${normalized}")`,
      (error as any)?.response?.data?.error?.message || error.message,
    );
  } else if (error instanceof Error) {
    console.error("Unexpected Error:", error.message);
  } else {
    console.error("Unexpected error occurred:", error);
  }
};
