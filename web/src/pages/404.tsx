import React from 'react'
//import Head from 'next/head'
import { NextSeo } from "next-seo";
import Link from 'next/link'
import BaseLayout from '../components/Layouts/BaseLayout'
import BaseContainer from '../components/Layouts/BaseContainer'
import { Flex, Box, Center, VStack, Heading, Text, Button } from "@chakra-ui/react"
import Icon from '../components/Icon'
//import SawIconAnimation from '../assets/icons/saw-icon-animation.svg'

const SawAnimatedIcon = () => {
  return (
    <>
      <svg className="saw-animated-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 297 328">
        <path fill="none" x="0px" y="0px" d="M0 0h297v328H0z" />
        <g className="serra-lamina" x="0px" y="0px" fill="#03f">
          <path d="M141.749 161.613a31.377 31.377 0 1031.373 31.377 31.418 31.418 0 00-31.373-31.377zm0 47.066a15.689 15.689 0 1115.689-15.689 15.694 15.694 0 01-15.689 15.689zM94.457 184.501h-.146a7.241 7.241 0 000 14.482h.146a7.241 7.241 0 000-14.482zM187.83 184.501h-.146a7.241 7.241 0 000 14.482h.146a7.241 7.241 0 000-14.482z" />
          <path d="M261.974 234.306l-20.561-11.877q1.11-3.873 1.919-7.783a38.391 38.391 0 0031.168-37.6 8.3 8.3 0 00-8.3-8.3h-23.762a115.208 115.208 0 00-2.208-7.7 38.32 38.32 0 008.073-48.34l.1.181a8.3 8.3 0 00-7.18-4.151 8.209 8.209 0 00-4.187 1.134l.036-.024-20.569 11.888q-2.763-2.884-5.78-5.526a37.458 37.458 0 002.148-12.646 38.33 38.33 0 00-18.944-33.074l-.181-.1a8.2 8.2 0 00-4.151-1.11 8.309 8.309 0 00-7.167 4.115l-.024.036-11.87 20.564q-3.873-1.11-7.783-1.919a38.392 38.392 0 00-37.599-31.168 8.3 8.3 0 00-8.3 8.3v23.75q-3.873.965-7.7 2.208a38.279 38.279 0 00-48.349-8.085l.181-.1a8.3 8.3 0 00-4.151 7.18 8.209 8.209 0 001.134 4.187l-.024-.036 11.884 20.577q-2.872 2.763-5.526 5.768a37.652 37.652 0 00-12.67-2.16 38.247 38.247 0 00-33.062 18.98l-.1.181a8.2 8.2 0 00-1.107 4.15 8.309 8.309 0 004.115 7.168l.036.024 20.573 11.873a101.663 101.663 0 00-1.919 7.783 38.4 38.4 0 00-31.164 37.588 8.3 8.3 0 008.3 8.3h23.746c.64 2.594 1.388 5.164 2.208 7.7a38.364 38.364 0 00-8.085 48.35l-.1-.181a8.3 8.3 0 007.18 4.151 8.209 8.209 0 004.187-1.134l-.036.024 20.573-11.886q2.763 2.884 5.78 5.563a37.6 37.6 0 00-2.136 12.609 38.335 38.335 0 0018.944 33.086l.181.1a8.2 8.2 0 004.151 1.11 8.309 8.309 0 007.168-4.115l.024-.036 11.877-20.577c2.558.736 5.164 1.388 7.771 1.931a38.4 38.4 0 0037.587 31.169 8.3 8.3 0 008.3-8.3v-23.748c2.594-.64 5.164-1.388 7.7-2.208a38.364 38.364 0 0048.35 8.085l-.181.1a8.3 8.3 0 004.151-7.18 8.209 8.209 0 00-1.134-4.187l.024.036-11.886-20.561q2.884-2.763 5.526-5.78a37.239 37.239 0 0012.549 2.136h.1a38.245 38.245 0 0033.038-18.944l.1-.181a8.2 8.2 0 001.11-4.151 8.324 8.324 0 00-4.1-7.167l-.036-.024zm-40.93 10.956a8.294 8.294 0 00-10.691 2.051l-.012.012a87.556 87.556 0 01-12.428 12.9l-.133.109a8.338 8.338 0 00-1.677 10.832l-.024-.036 10.088 17.484a21.676 21.676 0 01-21.5-10.546l-.06-.1a8.3 8.3 0 00-7.18-4.151 8.121 8.121 0 00-3.161.627l.06-.024a81.584 81.584 0 01-16.857 4.9l-.519.072a4.94 4.94 0 00-.471.1 8.273 8.273 0 00-6.383 8.41v20.187a21.75 21.75 0 01-13.382-20.018 8.3 8.3 0 00-7.1-8.181h-.048a86.174 86.174 0 01-18.136-4.573l.591.193a6.721 6.721 0 00-.7-.217 7.955 7.955 0 00-2.136-.278 8.321 8.321 0 00-7.336 4.38l-.024.048-10.085 17.473a21.737 21.737 0 01-1.52-24.121l-.06.109a8.294 8.294 0 00-2.057-10.692l-.012-.012a86.375 86.375 0 01-12.9-12.428l-.109-.133a8.323 8.323 0 00-10.812-1.689l-17.467 10.099a20.213 20.213 0 01-.181-2.8 21.672 21.672 0 0110.727-18.715l.1-.06a8.305 8.305 0 004.151-7.192 8.077 8.077 0 00-.627-3.161l.024.06a81.365 81.365 0 01-4.9-16.857l-.072-.519a8.314 8.314 0 00-8.169-6.89H27.341a21.733 21.733 0 0120.018-13.37 8.3 8.3 0 008.181-7.107v-.048a86.474 86.474 0 014.563-18.147l-.193.591c.072-.193.133-.386.193-.591a8.318 8.318 0 00-4.127-9.6l-17.473-10.105a21.723 21.723 0 0124.133-1.508l-.109-.06a8.294 8.294 0 0010.691-2.051l.012-.013a86.379 86.379 0 0112.428-12.9l.133-.109.181-.157a8.369 8.369 0 001.484-10.691l.024.036-10.112-17.5a20.214 20.214 0 012.8-.181 21.708 21.708 0 0118.735 10.745l.06.1a8.305 8.305 0 007.192 4.151 8.077 8.077 0 003.161-.627l-.06.024a81.364 81.364 0 0116.857-4.9l.519-.072a8.3 8.3 0 006.878-8.169V79.139a21.733 21.733 0 0113.37 20.018 8.291 8.291 0 007.1 8.181h.048a85.452 85.452 0 0118.136 4.621l-.591-.193a8.333 8.333 0 0010.208-3.934l10.088-17.484a21.7 21.7 0 011.508 24.121l.06-.109a8.155 8.155 0 00-1.11 4.139 8.3 8.3 0 003.161 6.516l.012.012a86.43 86.43 0 0112.9 12.441l.109.133a4.324 4.324 0 00.314.35 8.332 8.332 0 0010.51 1.339l17.482-10.084a21.922 21.922 0 01.181 2.787 21.677 21.677 0 01-10.727 18.727l-.1.06a8.289 8.289 0 00-4.139 7.18 8.121 8.121 0 00.627 3.161l-.024-.06a82.873 82.873 0 014.9 16.857l.072.519a8.323 8.323 0 008.157 6.878h20.525a21.75 21.75 0 01-20.018 13.382 8.3 8.3 0 00-8.181 7.107v.048A86.473 86.473 0 01223.527 224l.193-.591c-.072.193-.133.4-.193.591a8.333 8.333 0 004.127 9.6l17.484 10.088a21.717 21.717 0 01-24.145 1.52l.109.06z" />
        </g>
        <g stroke="#03f" strokeLinecap="round" strokeLinejoin="round" strokeWidth={15}>
          <path d="M276.152 187.645a133.576 133.576 0 00-267.152 0h66.8a66.794 66.794 0 11133.588 0z" fill="#fff" />
          <path d="M187.712 61.886l42.571-42.569a33.4 33.4 0 1147.222 47.223l-33.767 33.789" fill="none" />
        </g>
      </svg>
      <style jsx>{`
        .saw-animated-icon {
          width: 297px;
          height: 328px;
        }
        @media (max-width: 768px) {
          .saw-animated-icon {
            width: calc(297px/2);
            height: calc(328px/2);
          }
        }
        @keyframes counter-rotation {
            from {
              transform: rotate(359deg);
            }

            to {
              transform: rotate(0deg);
            }
          }
          @keyframes rotation {
            0% {
              transform: rotate(0deg);
            }

            100% {
              transform: rotate(359deg);
            }
          }
          .serra-lamina {
            animation: counter-rotation 1.3s infinite linear;
            transform-origin: 48% 59%;
          }
      `}</style>
    </>
  )
}

const Page404: React.FC = () => {
  return (
    <>
      <NextSeo
        title="404 – Página não encontrada - Fenzo Serralheria"
        canonical="https://fenzoserralheria.com.br/404"
        openGraph={{
          url: "https://fenzoserralheria.com.br/404",
          title: "404 – Página não encontrada - Fenzo Serralheria",
        }}
      />
      <BaseLayout hasNavbar={true}>
        <BaseContainer>
            <Center minH={"calc(100vh - 80px)"} justifyContent="center" alignItems="center">
              <VStack>
                <SawAnimatedIcon />
                <Flex mt="1rem" direction="column" justifyContent="center" alignItems="center">
                  <Heading mt="1.8rem" fontSize={{ base: "1rem", md: "32px", lg: "32px" }}>Ops, página não encontrada</Heading>
                  <Text align="center" mb="1.8rem">Esse conteúdo não existe mais!</Text>
                  <Link href="/">
                    <Button
                      leftIcon={<Icon icon="arrow-left" size={18} color="blue" />}
                      colorScheme="blue"
                      size="lg"
                      variant="ghost"
                      borderRadius="4px"
                      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                      bg="blue.50"
                      _hover={{ bg: "blue.500", color: "blue" }}
                      _focus={{
                        boxShadow: "none",
                      }}
                    >
                      voltar
                </Button>
                  </Link>
                </Flex>
              </VStack>
            </Center>

        </BaseContainer>
      </BaseLayout>
    </>
  )

}

export default Page404;
