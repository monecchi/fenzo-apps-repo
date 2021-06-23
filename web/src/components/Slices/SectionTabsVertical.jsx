import React from 'react'
import { RichText } from 'prismic-reactjs'
import { nextPrismicLoader } from '../../constants'
import Image from 'next/image'
import {
  Box,
  Heading,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from "@chakra-ui/react"
import Section from '../../components/Section'

const SectionTabsVertical = ({ data: { primary, items } }) => {

  // const tabsIcons = items.map(({ image }) => {
  //   return {
  //     caption: image.alt,
  //     alt: image.alt,
  //     source: image.url,
  //   }
  // })

  return (
    <Section
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      w="100%"
      maxW="100%"
      my="4rem"
      px="20px"
      bg="gray.100"
    >
      {/* Section Headings */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        w="100%"
        maxW="1140px"
        m="0 auto"
        pt="6rem"
        pb="6rem"
        className="section_heading__wrapper"
      >
        <Heading as="h6" fontSize="h6" textAlign="center">{RichText.asText(primary.section_subtitle)}</Heading>
        <Heading as="h2" fontSize="h2" textAlign="center" mb="2rem">{RichText.asText(primary.section_title)}</Heading>
        <Text fontSize="1.2rem" textAlign="center" maxW="80%">{RichText.asText(primary.section_excerpt)}</Text>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        w="100%"
        maxW="1140px"
        m="0 auto"
        pb="6rem"
      >
        <Tabs
          width="100%"
          variant="colored"
          orientation="vertical"
          isFitted={false}
        >
          <TabList align="start">
            {items.map((tab, index) => (
              <Tab
                key={index}
                w="200px"
                justifyContent="flex-start"
                p=".75rem"
                mb="1.25rem"
                borderRadius=".35rem"
                bg="transparent"
                color="gray.800"
                opacity={.89}
                _hover={{  background: "transparent", color: "blue.500", boxShadow: "none", opacity: 1 }}
                _focus={{  background: "white", color: "blue.500", boxShadow: "none", opacity: 1 }}
                _active={{ background: "white", color: "blue.500", opacity: 1 }}
                transition="all .2s linear"
              >
                {RichText.asText(tab.tab_title)}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {items.map((tab, index) => (
              <TabPanel p={4} key={index}>
                {RichText.asText(tab.tab_content_text)}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    </Section>

  )
}

export default SectionTabsVertical
