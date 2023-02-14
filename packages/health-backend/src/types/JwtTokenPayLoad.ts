export type JwtTokenPayLoad = {
  readonly username: string
  readonly token?: string | null
  readonly exp: number // 만료시간
  readonly iat: number // 발급시간
}
