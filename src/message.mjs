'use strict'

export class Message {
  // Represents an incoming message from the chat.
  //
  // user - A User instance that sent the message.
  constructor (user, adapterContext, done) {
    this.user = user
    this.adapterContext = adapterContext
    this.done = done || false
    this.room = this.user.room
  }

  // Indicates that no other Listener should be called on this object
  //
  // Returns nothing.
  finish () {
    this.done = true
  }
}

export class TextMessage extends Message {
  // Represents an incoming message from the chat.
  //
  // user - A User instance that sent the message.
  // text - A String message.
  // id   - A String of the message ID.
  constructor (user, text, id, adapterContext) {
    super(user, adapterContext)
    this.text = text
    this.id = id
  }

  // Determines if the message matches the given regex.
  //
  // regex - A Regex to check.
  //
  // Returns a Match object or null.
  match (regex) {
    return this.text.match(regex)
  }

  // String representation of a TextMessage
  //
  // Returns the message text
  toString () {
    return this.text
  }
}

// Represents an incoming user entrance notification.
//
// user - A User instance for the user who entered.
// text - Always null.
// id   - A String of the message ID.
export class EnterMessage extends Message {}

// Represents an incoming user exit notification.
//
// user - A User instance for the user who left.
// text - Always null.
// id   - A String of the message ID.
export class LeaveMessage extends Message {}

// Represents an incoming topic change notification.
//
// user - A User instance for the user who changed the topic.
// text - A String of the new topic
// id   - A String of the message ID.
export class TopicMessage extends TextMessage {}

export class CatchAllMessage extends Message {
  // Represents a message that no matchers matched.
  //
  // message - The original message.
  constructor (message, adapterContext) {
    super(message.user, adapterContext)
    this.message = message
  }
}
