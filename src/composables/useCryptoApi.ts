import type { Cryptocurrency, GlobalDataResponse } from '@/types/crypto'

const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3'

export function useCryptoApi() {
  const fetchCryptos = async (perPage: number = 12): Promise<Cryptocurrency[]> => {
    try {
      const url = `${COINGECKO_BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=1&sparkline=false`
      console.log('Fetching from:', url)

      const response = await fetch(url)

      console.log('Response status:', response.status)
      console.log('Response ok:', response.ok)

      if (!response.ok) {
        const errorText = await response.text()
        console.error('API Error Response:', errorText)
        throw new Error(`API returned ${response.status}: ${errorText}`)
      }

      const data = await response.json()
      console.log('Received data length:', data.length)

      if (!Array.isArray(data)) {
        console.error('Unexpected response format:', data)
        throw new Error('API returned unexpected format')
      }

      return data
    } catch (error) {
      console.error('Error in fetchCryptos:', error)
      throw error
    }
  }

  const fetchGlobalData = async (): Promise<GlobalDataResponse> => {
    try {
      const url = `${COINGECKO_BASE_URL}/global`
      console.log('Fetching global data from:', url)

      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`Failed to fetch global data: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error in fetchGlobalData:', error)
      throw error
    }
  }

  return {
    fetchCryptos,
    fetchGlobalData
  }
}
