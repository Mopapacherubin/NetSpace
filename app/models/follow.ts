import { FollowSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'

export default class Follow extends FollowSchema {
  @belongsTo(() => User, { foreignKey: 'followerId' }) declare follower: BelongsTo<typeof User>
  @belongsTo(() => User, { foreignKey: 'followingId' }) declare following: BelongsTo<typeof User>
}
