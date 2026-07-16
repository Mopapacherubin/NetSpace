import { ChatParticipantaSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Chat from './chat.js'
import User from './user.js'

export default class ChatParticipanta extends ChatParticipantaSchema {
  @belongsTo(() => Chat) declare chat: BelongsTo<typeof Chat>
  @belongsTo(() => User) declare user: BelongsTo<typeof User>
}
