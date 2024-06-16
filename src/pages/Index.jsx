import { Box, Container, Text, VStack, Heading, Button, Image, Flex } from "@chakra-ui/react";
import { FaBrain, FaInfoCircle, FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      <Box
        bgImage="url('/images/hero-bg.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color="white"
        textAlign="center"
      >
        <Heading as="h1" size="2xl" mb={4}>
          Dépistage Précoce de l'Autisme
        </Heading>
        <Text fontSize="xl" mb={6}>
          Utilisant l'Intelligence Artificielle pour un avenir meilleur
        </Text>
        <Button colorScheme="teal" size="lg">
          Commencer
        </Button>
      </Box>

      <Container maxW="container.md" py={10}>
        <VStack spacing={8}>
          <Flex align="center" justify="space-between" width="100%">
            <Link to="/about">
              <Button leftIcon={<FaInfoCircle />} colorScheme="teal" variant="outline">
                À propos de nous
              </Button>
            </Link>
            <Link to="/general">
              <Button leftIcon={<FaClipboardList />} colorScheme="teal" variant="outline">
                Généralités
              </Button>
            </Link>
          </Flex>

          <Box textAlign="center">
            <Heading as="h2" size="xl" mb={4}>
              Pourquoi nous choisir ?
            </Heading>
            <Text fontSize="lg">
              Nous utilisons des technologies de pointe pour fournir des résultats précis et rapides, aidant ainsi à un dépistage précoce et efficace de l'autisme.
            </Text>
          </Box>

          <Box>
            <Image src="/images/ai-brain.jpg" alt="AI Brain" borderRadius="md" />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;