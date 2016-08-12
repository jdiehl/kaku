> Control KlikAanKlikUit appliances

Currently only turning applicances On and Off is supported.

# Setup

* Set the environment variable `KAKU_HOST=IP`
* (Optional) set the environment variable `KAKU_PORT=IP`, default `9760` should work in most cases

# Usage

`kaku [ROOM_ID] [DEVICE_ID] [ON|OFF]`

Where `ROOM_ID` and `DEVICE_ID` are integers between 1 and 9, representing the index of the room/device from the KlikAanKlikUit app.

# License

Copyright (c) 2016 by Jonathan Diehl

 Permission is hereby granted, free of charge, to any person
 obtaining a copy of this software and associated documentation
 files (the "Software"), to deal in the Software without
 restriction, including without limitation the rights to use,
 copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the
 Software is furnished to do so, subject to the following
 conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 OTHER DEALINGS IN THE SOFTWARE.
