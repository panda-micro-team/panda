import { useQuery, gql } from "@apollo/client";
import { Box, Spinner, Text, VStack, HStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { fetchWeatherWithTemperature } from "./weather";

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      emoji
      capital
    }
  }
`;

const CountriesList = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const [temperatures, setTemperatures] = useState<
    Record<string, number | null>
  >({});

  useEffect(() => {
    const fetchTemperatures = async () => {
      if (data?.countries) {
        const tempData: Record<string, number | null> = {};
        for (const country of data.countries) {
          if (country.capital) {
            tempData[country.code] = await fetchWeatherWithTemperature(
              country.capital,
            );
          } else {
            tempData[country.code] = null;
          }
        }
        setTemperatures(tempData);
      }
    };

    fetchTemperatures();
  }, [data]);

  if (loading) return <Spinner size="xl" />;
  if (error) return <Text color="red.500">Error: {error.message}</Text>;

  return (
    <VStack spacing={4} align="stretch" p={4}>
      {data.countries.map(
        (country: {
          code: string;
          name: string;
          emoji: string;
          capital: string;
        }) => (
          <Box
            key={country.code}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            _hover={{ bg: "gray.100" }}
          >
            <HStack justifyContent="space-between">
              <Text fontSize="lg" fontWeight="bold">
                {country.name} {country.emoji}
              </Text>
              <Text fontSize="sm" color="gray.600">
                Capital: {country.capital || "N/A"}
              </Text>
            </HStack>
            <Text mt={2} color="blue.600">
              Temperature:{" "}
              {temperatures[country.code] !== undefined
                ? `${temperatures[country.code]}°C`
                : "Loading..."}
            </Text>
          </Box>
        ),
      )}
    </VStack>
  );
};

export default CountriesList;
