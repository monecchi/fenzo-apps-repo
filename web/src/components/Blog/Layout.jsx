import PropTypes from 'prop-types'
import { Box, Flex, IconButton } from '@chakra-ui/react'
import BaseLayout from '../../components/Layouts/BaseLayout'
import Section from '../../components/Section'
import SectionHeading from '../../components/Section/SectionHeading'
import { PageHeaderDefault } from '../../components/Layouts/PageHeader'
import { ArrowCircleUp } from 'phosphor-react'
import siteUrl from '../../utils/siteUrl'
import routeURL from '../../utils/routeURL'
import FooterFull from '../../components/Footer/FooterFull'

const Layout = ({ pathUrl, image, children }) => {
  const URL = siteUrl(pathUrl || routeURL())
  const siteImage = image || siteUrl('/site_image.png')
  return (
    <>
      <BaseLayout>
        <Section
          full
          w="100%"
          maxW="1366px"
          m='0 auto'
        >
          <Box
            display='flex'
            justifyContent='center'
            pt={8}
            pb={8}
            px='20px'
            w="100%"
            maxW="780px"
            className='main-blog'
          >
            <Box as='article' display='block' w='100%' className='article'>{children}</Box>
          </Box>
        </Section>
      </BaseLayout>
      <FooterFull />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
