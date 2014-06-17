/**
 * Event
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	/* e.g.
  	nickname: 'string'
  	*/

  	date: {
  		type: 'DATE',
  		required: true
  	},
  	title: {
  		type: 'STRING',
  		required: true
  	},
  	description: {
  		type: 'TEXT'
  	},
  	imageURL: 'STRING'
    
  }

};
