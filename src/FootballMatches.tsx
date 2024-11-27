import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Spinner, Text, VStack } from "@chakra-ui/react";

const FOOTBALL_API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;
const FOOTBALL_URL = process.env.REACT_APP_FOOTBALL_URL;

if (!FOOTBALL_API_KEY || !FOOTBALL_URL) {
  throw new Error(
    "API_KEY or FOOTBALL_URL is not defined in the environment variables",
  );
}

type Match = {
  fixture: {
    id: number;
    date: string;
  };
  teams: {
    home: { name: string; logo: string };
    away: { name: string; logo: string };
  };
  goals: {
    home: number | null;
    away: number | null;
  };
};

const FootballMatches = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get<{ response: Match[] }>(
          `${FOOTBALL_URL}/fixtures`,
          {
            headers: {
              "x-rapidapi-key": FOOTBALL_API_KEY,
              "x-rapidapi-host": "v3.football.api-sports.io",
            },
            params: { date: new Date().toISOString().split("T")[0] },
          },
        );
        setMatches(response.data.response);
      } catch (error) {
        console.error("Failed to fetch matches:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) return <Spinner size="xl" />;

  return (
    <VStack spacing={4} align="stretch" p={4}>
      {matches.map((match) => (
        <Box key={match.fixture.id} p={4} borderWidth="1px" borderRadius="lg">
          <Text fontWeight="bold">
            {match.teams.home.name} vs {match.teams.away.name}
          </Text>
          <Text>
            Score:{" "}
            {match.goals.home !== null && match.goals.away !== null
              ? `${match.goals.home} - ${match.goals.away}`
              : "Not available"}
          </Text>
          <Text>Date: {new Date(match.fixture.date).toLocaleString()}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default FootballMatches;
