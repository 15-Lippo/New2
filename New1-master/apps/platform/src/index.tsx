import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import '@solana/wallet-adapter-react-ui/styles.css'
import { BackpackWalletAdapter, BraveWalletAdapter, PhantomWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } from '@solana/wallet-adapter-wallets'
import { GambaPlatformProvider, TokenMetaProvider } from 'gamba-react-ui-v2'
import { GambaProvider, SendTransactionProvider } from 'gamba-react-v2'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { DEFAULT_POOL, PLATFORM_CREATOR_ADDRESS, PLATFORM_CREATOR_FEE, PLATFORM_JACKPOT_FEE, PLATFORM_REFERRAL_FEE, RPC_ENDPOINT, TOKEN_METADATA, TOKEN_METADATA_FETCHER } from './constants'
import './styles.css'

const root = ReactDOM.createRoot(document.getElementById('root')!)

function Root() {
  const wallets = React.useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new BackpackWalletAdapter(),
      new BraveWalletAdapter(),
      new TorusWalletAdapter(),
    ],
    [],
  )

  // Aggiungi un effetto per inizializzare il wallet quando la pagina si carica
  React.useEffect(() => {
    // Crea un piccolo ritardo prima di tentare la connessione automatica
    const timer = setTimeout(() => {
      console.log("Tentativo di connessione automatica al wallet...")
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <ConnectionProvider
        endpoint={RPC_ENDPOINT}
        config={{ commitment: 'confirmed', confirmTransactionInitialTimeout: 60000 }}
      >
        <WalletProvider autoConnect wallets={wallets}>
          <WalletModalProvider>
            <TokenMetaProvider
              tokens={TOKEN_METADATA}
              fetcher={TOKEN_METADATA_FETCHER}
            >
              <SendTransactionProvider priorityFee={400_201}>
                <GambaProvider>
                  <GambaPlatformProvider
                    creator={PLATFORM_CREATOR_ADDRESS}
                    defaultCreatorFee={PLATFORM_CREATOR_FEE}
                    defaultJackpotFee={PLATFORM_JACKPOT_FEE}
                    defaultPool={DEFAULT_POOL}
                    referral={{
                      fee: PLATFORM_REFERRAL_FEE,
                      prefix: 'code',
                    }}
                  >
                    <App />
                  </GambaPlatformProvider>
                </GambaProvider>
              </SendTransactionProvider>
            </TokenMetaProvider>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </BrowserRouter>
  )
}

root.render(<Root />)
