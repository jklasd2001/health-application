export type JwtTokenPayLoad = {
  readonly id: string
  readonly username: string
  readonly email: string
  readonly token?: string | null
  readonly exp: number // 만료시간
  readonly iat: number // 발급시간
}
