#!/usr/bin/env /usr/bin/node

require('dotenv').config({path: __dirname+'/.env'});
const argv = require('yargs').argv;

const log = require(process.env.PROJECT_ROOT+'/libs/log');

const SpeedTask = require(process.env.PROJECT_ROOT+'/libs/speedTest');
const EmailTask = require(process.env.PROJECT_ROOT+'/libs/email');
 
log('Cron executing');
if (argv.email) {
	new EmailTask();
} else {
	new SpeedTask();
}