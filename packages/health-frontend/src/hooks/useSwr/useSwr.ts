import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export const useSwr = () => {
  const a = useSWR('/api/exercise', fetcher)

  return a
}
