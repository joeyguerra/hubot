class SlackMention {
	constructor(id, type, info) {
		this.id = id
		this.type = type
		this.info = (info != null) ? info : undefined
	}
}
module.exports = SlackMention