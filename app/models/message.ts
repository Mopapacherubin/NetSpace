import { MessageSchema } from '#database/schema'
import { belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Chat from './chat.js'
import User from './user.js'

export default class Message extends MessageSchema {
  @belongsTo(() => Chat) declare chat: BelongsTo<typeof Chat>
  @belongsTo(() => User, { foreignKey: 'senderId' }) declare sender: BelongsTo<typeof User>
  @belongsTo(() => Message, { foreignKey: 'replyToId' }) declare replyTo: BelongsTo<typeof Message>
  @hasMany(() => Message, { foreignKey: 'replyToId' }) declare replies: HasMany<typeof Message>
}
