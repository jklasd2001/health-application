import { Repository } from 'typeorm'

import { CustomRepository } from 'src/typeorm'

import { ExerciseRegistration } from './entities'

@CustomRepository(ExerciseRegistration)
export class ExerciseRegistrationRepository extends Repository<ExerciseRegistration> {}
