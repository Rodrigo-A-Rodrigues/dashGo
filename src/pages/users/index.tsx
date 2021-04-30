import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import { RiAddLine } from 'react-icons/ri';

import Header from "../../components/Header";
import { Pagination } from '../../components/Pagination';
import SideBar from "../../components/SideBar";

export default function UserList() {
  return(
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} />}>
              Criar Novo
            </Button>
          </Flex>
        
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" w="8">
                  <Checkbox colorScheme="pink"/>
                </Th>
                <Th>
                  Usuários
                </Th>
                <Th>
                  Data de Cadastro
                </Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Rodrigo Rodrigues</Text>
                    <Text fontSize="sm" color="gray.300">rodrigorodrigues1807@gmail.com</Text>
                  </Box>
                </Td>
                <Td>29 de abril, 2021</Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}