import React, { createContext, useContext, useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { clusterApiUrl } from "@solana/web3.js";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { postData } from "../helper";
const WalletContext = createContext();

export const useWalletContext = () => useContext(WalletContext);

export const WalletProviderWrapper = ({ children }) => {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = clusterApiUrl(network);
  const wallets = [new PhantomWalletAdapter()];

  const [walletId, setWalletId] = useState(null);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <InnerWalletProvider>{children}</InnerWalletProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

const InnerWalletProvider = ({ children }) => {
  const wallet = useWallet();
  const { setVisible } = useWalletModal();
  const {
    autoConnect,
    connect,
    connected,
    connecting,
    disconnect,
    disconnecting,
    publicKey,
    select,
    sendTransaction,
    signAllTransactions,
    signIn,
    signMessage,
    signTransaction,
  } = wallet;
  const [walletId, setWalletId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (wallet.connected && wallet.publicKey) {
        setWalletId(wallet.publicKey.toBase58());

        const data = {
          walletId: {
            stringValue: wallet.publicKey.toBase58(),
          },
          buttonClickedOn: {
            timestampValue: new Date().toISOString(),
          },
        };

        await postData(data);
      } else {
        setWalletId(null);
      }
    };

    fetchData();
  }, [wallet.connected, wallet.publicKey]);

  const connectWallet = async () => {
    if (connected) {
      await disconnect();
    } else {
      try {
        // First, try to connect
        await connect();
      } catch (error) {
        // If connection fails, it might be because no wallet is selected
        // In this case, open the wallet selection modal
        console.log("Opening wallet modal for selection");
        setVisible(true);
      }
    }
  };
  const contextValue = {
    ...wallet,
    setVisible,
    walletId,
    setWalletId,
    connectWallet,
  };

  return (
    <WalletContext.Provider value={contextValue}>
      {children}
    </WalletContext.Provider>
  );
};
