'use client'

import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useReducer,
  ReactNode,
} from 'react'

interface AppContextState {
  currentPage: string
  updateCurrentPage: (val: string) => void
  interstitialVisible: boolean
  updateInterstitial: (val: boolean) => void
  btnFleeCount: number
  incrementBtnFleeCount: () => void
  resetBtnFleeCount: () => void
}

const AppContext = createContext<AppContextState | undefined>(undefined)

interface AppWrapperProps {
  children: ReactNode
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  const [currentPage, handleCurrentPage] = useState<string>('')
  const [interstitialVisible, setInterstitialVisible] = useState<boolean>(false)
  const [btnFleeCount, setBtnFleeCount] = useState(0)

  // Handle the current page of the site
  const updateCurrentPage = useCallback((val: string) => {
    handleCurrentPage(val)
  }, [])

  const updateInterstitial = useCallback((val: boolean) => {
    setInterstitialVisible(val)
  }, [])

  const incrementBtnFleeCount = useCallback(() => {
    setBtnFleeCount((prev) => prev + 1)
  }, [])

  const resetBtnFleeCount = useCallback(() => setBtnFleeCount(0), [])

  const sharedState: AppContextState = {
    currentPage,
    updateCurrentPage,
    interstitialVisible,
    updateInterstitial,
    btnFleeCount,
    incrementBtnFleeCount,
    resetBtnFleeCount,
  }

  return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
}

// Custom hook to use the AppContext
const useAppContext = () => {
  const state = useContext(AppContext)
  if (state === undefined) {
    throw new Error('useAppContext must be used within an AppWrapper')
  }
  return state
}

export { AppContext, AppWrapper, useAppContext }
