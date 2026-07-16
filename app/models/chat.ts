import { ChatSchema } from '#database/schema'
import { column, belongsTo, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import Message from './message.js'
import ChatParticipanta from './chat_participanta.js'

export default class Chat extends ChatSchema {
  @column() declare type: 'private' | 'group'
  @column() declare name: string | null
  @column() declare avatarUrl: string | null
  @column() declare createdBy: number | null

  @belongsTo(() => User, { foreignKey: 'createdBy' }) declare creator: BelongsTo<typeof User>
  @hasMany(() => Message) declare messages: HasMany<typeof Message>
  @hasMany(() => ChatParticipanta) declare participants: HasMany<typeof ChatParticipanta>
  @manyToMany(() => User, { pivotTable: 'chat_participantas' }) declare users: ManyToMany<typeof User>
}
