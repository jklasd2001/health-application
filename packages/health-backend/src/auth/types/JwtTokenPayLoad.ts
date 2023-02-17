export type JwtTokenPayLoad = {
  readonly username: string
  readonly sub: number
  readonly exp: number // 만료시간
  readonly iat: number // 발급시간
}
