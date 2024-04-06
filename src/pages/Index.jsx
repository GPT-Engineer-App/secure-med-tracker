import React, { useState } from "react";
import { Box, Heading, Text, Button, Input, Stack, Image, Grid, GridItem, Badge, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { FaSearch, FaFilter, FaUser, FaPlus } from "react-icons/fa";

const medicines = [
  {
    id: 1,
    name: "Aspirin",
    category: "Pain Relief",
    quantity: 30,
    expiry: "2023-12-31",
    manufacturer: "Bayer",
  },
  {
    id: 2,
    name: "Lipitor",
    category: "Cholesterol",
    quantity: 60,
    expiry: "2024-06-30",
    manufacturer: "Pfizer",
  },
  {
    id: 3,
    name: "Synthroid",
    category: "Thyroid",
    quantity: 90,
    expiry: "2023-03-31",
    manufacturer: "AbbVie",
  },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedMedicine, setSelectedMedicine] = useState(null);

  const filteredMedicines = medicines.filter((medicine) => medicine.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const getExpiryColor = (expiry) => {
    const today = new Date();
    const expiryDate = new Date(expiry);
    const diffTime = Math.abs(expiryDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 180) return "green";
    if (diffDays > 90) return "yellow";
    if (diffDays > 45) return "orange";
    return "red";
  };

  return (
    <Box p={4}>
      <Stack direction="row" justify="space-between" mb={8}>
        <Box>
          <Heading size="lg">My Medicines</Heading>
          <Text>Track and manage your medications</Text>
        </Box>
        <Stack direction="row">
          <Button leftIcon={<FaFilter />}>Filters</Button>
          <Button leftIcon={<FaUser />}>Profile</Button>
        </Stack>
      </Stack>

      <Stack direction="row" mb={8}>
        <Input placeholder="Search medicines..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <Button leftIcon={<FaSearch />}>Search</Button>
      </Stack>

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {filteredMedicines.map((medicine) => (
          <GridItem
            key={medicine.id}
            p={4}
            borderWidth={1}
            borderRadius="lg"
            onClick={() => {
              setSelectedMedicine(medicine);
              onOpen();
            }}
            cursor="pointer"
          >
            <Stack direction="row" align="center" mb={2}>
              <Heading size="md">{medicine.name}</Heading>
              <Badge colorScheme={getExpiryColor(medicine.expiry)}>Exp: {medicine.expiry}</Badge>
            </Stack>
            <Text mb={2}>{medicine.category}</Text>
            <Text>
              Qty: {medicine.quantity} | Mfr: {medicine.manufacturer}
            </Text>
          </GridItem>
        ))}
      </Grid>

      <Button position="fixed" bottom={4} right={4} size="lg" colorScheme="blue" leftIcon={<FaPlus />}>
        Add Medicine
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedMedicine?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZWRpY2luZXxlbnwwfHx8fDE3MTI0MzQ1OTF8MA&ixlib=rb-4.0.3&q=80&w=1080" mb={4} />
            <Text mb={2}>Category: {selectedMedicine?.category}</Text>
            <Text mb={2}>Quantity: {selectedMedicine?.quantity}</Text>
            <Text mb={2}>Expiry: {selectedMedicine?.expiry}</Text>
            <Text mb={2}>Manufacturer: {selectedMedicine?.manufacturer}</Text>
            {/* Add more medicine details */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
