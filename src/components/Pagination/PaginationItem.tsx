import { Button } from "@chakra-ui/react";
import React from "react";

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({isCurrent = false, onPageChange, number}: PaginationItemProps) {
  if(isCurrent) {
    return (
      <Button 
        size="sm" 
        fontSize="xs" 
        w="4" 
        colorScheme="pink" 
        disabled 
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default',
        }}
      >
        {number}
      </Button>
    )
  }

  return (
    <Button 
      size="sm" 
      fontSize="xs" 
      w="4" 
      bg="gray.700" 
      _hover={{
        bgColor: 'gray.500',
        cursor: 'default',
      }}
      onClick={ () => onPageChange(number)}
    >
      {number}
    </Button>
  )
}