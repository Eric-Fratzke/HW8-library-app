import Controller from '@ember/controller';
import {match, not, gte, and} from '@ember/object/computed';
export default Controller.extend({

  headerMessage: 'Contact Page',
  emailAddress: '',
  message: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isLongEnough: gte('message.length', 5),
  isBoth: and('isValid', 'isLongEnough'),
  isDisabled: not('isBoth'),

  actions: {
    sendMessage: function() {
      var email = this.get('emailAddress');
      alert('Message sent from: ' + email);

      var responseMessage = 'Thank you for your message: ' + email;
      this.set('responseMessage', responseMessage);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
