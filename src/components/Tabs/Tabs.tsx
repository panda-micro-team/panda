import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useState, type SetStateAction } from "react";

export const ControlledTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleSliderChange = (event: { target: { value: string } }) => {
    setTabIndex(parseInt(event.target.value, 10));
  };

  const handleTabsChange = (index: SetStateAction<number>) => {
    setTabIndex(index);
  };

  return (
    <Box>
      <input
        type="range"
        min="0"
        max="2"
        value={tabIndex}
        onChange={handleSliderChange}
      />
      <Text>{tabIndex}</Text>
      <Tabs index={tabIndex} onChange={handleTabsChange}>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Click the tabs or pull the slider around</p>
          </TabPanel>
          <TabPanel>
            <p>Yeah yeah. What's up?</p>
          </TabPanel>
          <TabPanel>
            <p>Oh, hello there.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
