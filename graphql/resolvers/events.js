const Event = require('../../models/event');
const { dateToString } = require('../../helpers/date');
const { transformEvent } = require('./merge');

module.exports = {
  events: async () => {
    try {
      const events = await Event.find();
      return events.map((event) => {
        return transformEvent(event);
      });
    } catch (err) {
      throw err;
    }
  },
  createEvent: async (args) => {
    //we pass fields in new Event we created in Schema
    const event = new Event({
      title: args.eventInput.title,
      description: args.eventInput.description,
      price: +args.eventInput.price,
      date: dateToString(args.eventInput.date),
      creator: '66133f653f098a0a5f0fb93d',
    });

    let createdEvent;
    try {
      //save method from mongoose will save data.
      const result = await event.save();
      createdEvent = transformEvent(result);
      const creator = await User.findById('66133f653f098a0a5f0fb93d');

      if (!creator) {
        throw new Error('User id not found.');
      }
      //we are pushing event object from const event in createEvent
      creator.createdEvents.push(event);
      await creator.save();
      //save() will update the existing user

      return createdEvent;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
