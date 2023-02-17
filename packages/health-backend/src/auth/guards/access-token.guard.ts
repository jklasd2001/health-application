import { ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { AuthGuard } from '@nestjs/passport'

import { IS_PUBLIC_KEY } from 'src/commons/decorators/public.decorator'

@Injectable()
export class AccessTokenGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super()
  }

  // TODO: rxjs 관련 타입 에러 발생. 추후 라이브러리 업데이트로 해결되면 any 리턴 타입을 없앨 예정
  canActivate(context: ExecutionContext): any {
    const isPublic = this.reflector.getAllAndOverride(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ])

    if (isPublic) {
      return true
    }

    return super.canActivate(context)
  }
}
