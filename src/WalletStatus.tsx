import { ConnectButton, useCurrentAccount, useDisconnectWallet } from "@mysten/dapp-kit";
import { Container, Flex, Heading, Text, Button } from "@radix-ui/themes";
import { OwnedObjects } from "./OwnedObjects";

export function WalletStatus() {
  const account = useCurrentAccount();
  const { mutate: disconnect } = useDisconnectWallet();

  return (
    <Container my="2">
      <Heading mb="2">Wallet Status</Heading>

      {account ? (
        <Flex direction="column">
          <Text>Wallet connected</Text>
          <Text>Address: {account.address}</Text>
          <Button onClick={() => disconnect()}>Disconnect</Button>
        </Flex>
      ) : (
        <Flex direction="column">
          <Text>Wallet not connected</Text>
          <ConnectButton />
        </Flex>
      )}
      <OwnedObjects />
    </Container>
  );
}
