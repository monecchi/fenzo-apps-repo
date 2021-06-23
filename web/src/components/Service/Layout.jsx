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
        <Box
          display='flex'
          flexDirection="column"
          justifyContent='center'
          w="100%"
          m="0 auto"
          pt={8}
          pb={8}
          className='main_service'
        >
          {children}
        </Box>
      </BaseLayout>
      <FooterFull />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
