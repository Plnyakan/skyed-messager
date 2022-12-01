import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { ChatIcon } from "@chakra-ui/icons";
import {
  Circle,
  Divider,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { Tab, TabList } from "@chakra-ui/tabs";
import { useContext } from "react";
import AddFriendModal from "./AddFriendModal";
import { FriendContext } from "./Home";
import { AccountContext } from "../AccountContext";
import { Avatar, AvatarBadge } from "@chakra-ui/react";

const Sidebar = () => {
  const { user } = useContext(AccountContext);
  const { friendList } = useContext(FriendContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <VStack py="1.4rem">
        <HStack justify="space-evenly" w="100%">
          <VStack>
            <Avatar name={user.username} >
              <AvatarBadge boxSize='1em' bg={ "green.700"}/>
            </Avatar>
            <Text>{user.username}</Text>
          </VStack>
          <Heading size="md">Add Friend</Heading>
          <Button onClick={onOpen}>
            <ChatIcon />
          </Button>
        </HStack>
        <Divider />
        <VStack as={TabList}  w="100%">
          {friendList.map((friend) => (
            <HStack  w="100%"  as={Tab} key={`friend:${friend}`}>

              <Text>{friend.username}</Text>
              <Circle
                bg={friend.connected ? "green.700" : "red.500"}
                w="10px"
                h="10px"
              />
            </HStack>
          ))}
        </VStack>
      </VStack>
      <AddFriendModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Sidebar;
