import { PasswordResetSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'

export default class PasswordReset extends PasswordResetSchema {
  @belongsTo(() => User) declare user: BelongsTo<typeof User>
}
