import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Rodrigo Rodrigues</Text>
          <Text color="gray.300" fontSize="small">
              rodrigorodrigues1807@gmail.com
          </Text>
        </Box>
      ) }

        <Avatar size="md" name="Rodrigo Rodrigues" src="https://github.com/rodrigo-a-rodrigues.png"/>
    </Flex>
  );
}