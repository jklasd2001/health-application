export type JwtTokenPayLoad = {
  // readonly id: string
  // readonly email: string
  // readonly token?: string | null
  readonly username: string
  readonly exp: number // 만료시간
  readonly iat: number // 발급시간
}
