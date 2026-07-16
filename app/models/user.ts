import { UserSchema } from '#database/schema'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { hasMany, hasOne, manyToMany } from '@adonisjs/lucid/orm'
import type { HasMany, HasOne, ManyToMany } from '@adonisjs/lucid/types/relations'
import Profile from './profile.js'
import Post from './post.js'
import Like from './like.js'
import Repost from './repost.js'
import Bookmark from './bookmark.js'
import Comment from './comment.js'
import PasswordReset from './password_reset.js'
import Message from './message.js'
import ChatParticipanta from './chat_participanta.js'
import Chat from './chat.js'
import Follow from './follow.js'
import Block from './block.js'

export default class User extends compose(UserSchema, withAuthFinder(hash)) {
  get initials() {
    const [first, last] = this.fullName ? this.fullName.split(' ') : this.email.split('@')
    return last ? `${first.charAt(0)}${last.charAt(0)}`.toUpperCase() : first.slice(0, 2).toUpperCase()
  }

  @hasOne(() => Profile)
  declare profile: HasOne<typeof Profile>

  @hasMany(() => Post)
  declare posts: HasMany<typeof Post>

  @hasMany(() => Like)
  declare likes: HasMany<typeof Like>

  @hasMany(() => Repost)
  declare reposts: HasMany<typeof Repost>

  @hasMany(() => Bookmark)
  declare bookmarks: HasMany<typeof Bookmark>

  @hasMany(() => Comment)
  declare comments: HasMany<typeof Comment>

  @hasMany(() => PasswordReset)
  declare passwordResets: HasMany<typeof PasswordReset>

  @hasMany(() => Message, { foreignKey: 'senderId' })
  declare sentMessages: HasMany<typeof Message>

  @hasMany(() => ChatParticipanta)
  declare chatParticipations: HasMany<typeof ChatParticipanta>

  @manyToMany(() => Chat, { pivotTable: 'chat_participantas' })
  declare chats: ManyToMany<typeof Chat>

  @hasMany(() => Chat, { foreignKey: 'createdBy' })
  declare createdChats: HasMany<typeof Chat>

  @hasMany(() => Follow, { foreignKey: 'followerId' })
  declare followings: HasMany<typeof Follow>

  @hasMany(() => Follow, { foreignKey: 'followingId' })
  declare followerLinks: HasMany<typeof Follow>

  @hasMany(() => Block, { foreignKey: 'blockerId' })
  declare blocks: HasMany<typeof Block>

  @hasMany(() => Block, { foreignKey: 'blockedId' })
  declare blockLinks: HasMany<typeof Block>

  @manyToMany(() => User, { pivotTable: 'follows', pivotForeignKey: 'follower_id', pivotRelatedForeignKey: 'following_id' })
  declare following: ManyToMany<typeof User>

  @manyToMany(() => User, { pivotTable: 'follows', pivotForeignKey: 'following_id', pivotRelatedForeignKey: 'follower_id' })
  declare followers: ManyToMany<typeof User>

  @manyToMany(() => User, { pivotTable: 'blocks', pivotForeignKey: 'blocker_id', pivotRelatedForeignKey: 'blocked_id' })
  declare blockedUsers: ManyToMany<typeof User>

  @manyToMany(() => User, { pivotTable: 'blocks', pivotForeignKey: 'blocked_id', pivotRelatedForeignKey: 'blocker_id' })
  declare blockedBy: ManyToMany<typeof User>
}
