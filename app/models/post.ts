import { PostSchema } from '#database/schema'
import { belongsTo, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import Media from './media.js'
import Comment from './comment.js'
import Like from './like.js'
import Repost from './repost.js'
import Bookmark from './bookmark.js'
import PostHashtag from './post_hashtag.js'
import Hashtag from './hashtag.js'

export default class Post extends PostSchema {
  @belongsTo(() => User) declare user: BelongsTo<typeof User>
  @belongsTo(() => Post, { foreignKey: 'postParent' }) declare parent: BelongsTo<typeof Post>
  @hasMany(() => Post, { foreignKey: 'postParent' }) declare replies: HasMany<typeof Post>
  @hasMany(() => Media) declare media: HasMany<typeof Media>
  @hasMany(() => Comment) declare comments: HasMany<typeof Comment>
  @hasMany(() => Like) declare likes: HasMany<typeof Like>
  @hasMany(() => Repost) declare reposts: HasMany<typeof Repost>
  @hasMany(() => Bookmark) declare bookmarks: HasMany<typeof Bookmark>
  @hasMany(() => PostHashtag) declare postHashtags: HasMany<typeof PostHashtag>
  @manyToMany(() => Hashtag, { pivotTable: 'post_hashtags' }) declare hashtags: ManyToMany<typeof Hashtag>
}
