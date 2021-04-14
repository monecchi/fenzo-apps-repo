import { Center } from '@chakra-ui/react'
import Container from '../Layouts/Container';
//import BaseContainer from '../../components/Layouts/BaseContainer'

const Section = (props) => {
  const { full, hasImage, children, ...rest } = props;
  return (
    <Center as="section" w="100%" position="relative" {...rest}>
      {full ? children : <Container>{children}</Container>}
    </Center>
  );
};

export default Section;
