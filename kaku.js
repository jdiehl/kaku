#!/usr/bin/env node

'use strict';

var dgram = require('dgram');

var HOST = process.env.KAKU_HOST;
var PORT = process.env.KAKU_PORT || 9760;

function parseBool(string) {
  switch (string.toLowerCase()) {
  case 'true':
  case 'on':
  case '1':
    return true;
  case 'false':
  case 'off':
  case '0':
    return false;
  default:
    return Boolean(string);
  }
}

function send(room, device, onOff, callback) {
  var message = '001,!R' + room + 'D' + device + 'F' + (onOff ? 1 : 0) + '|kaku|' + (onOff ? 'On' : 'Off');
  var client = dgram.createSocket('udp4');
  client.send(message, 0, message.length, PORT, HOST, function (err) {
    client.close();
    if (callback) callback(err);
  });
}

var room = parseInt(process.argv[2]);
var device = parseInt(process.argv[3]);
var onOff = parseBool(process.argv[4]);

if (!HOST || !PORT) {
  console.log(' Before using kaku you must set the KAKU_HOST environment variable');
  process.exit(-2);
}

if (room === undefined || device === undefined || onOff === undefined) {
  console.log(' Usage: kaku [ROOM_ID] [DEVICE_ID] [ON_OFF]');
  process.exit(-1);
}

send(room, device, onOff, function (err) {
  if (err) console.error(err);
});
