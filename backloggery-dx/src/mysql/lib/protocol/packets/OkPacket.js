var ER_UPDATE_INFO_REGEXP=/^[^:0-9]+: [0-9]+[^:0-9]+: ([0-9]+)[^:0-9]+: [0-9]+[^:0-9]*$/;function OkPacket(e){e=e||{},this.fieldCount=void 0,this.affectedRows=void 0,this.insertId=void 0,this.serverStatus=void 0,this.warningCount=void 0,this.message=void 0,this.protocol41=e.protocol41}module.exports=OkPacket,OkPacket.prototype.parse=function(e){this.fieldCount=e.parseUnsignedNumber(1),this.affectedRows=e.parseLengthCodedNumber(),this.insertId=e.parseLengthCodedNumber(),this.protocol41&&(this.serverStatus=e.parseUnsignedNumber(2),this.warningCount=e.parseUnsignedNumber(2)),this.message=e.parsePacketTerminatedString(),this.changedRows=0;var t=ER_UPDATE_INFO_REGEXP.exec(this.message);null!==t&&(this.changedRows=parseInt(t[1],10))},OkPacket.prototype.write=function(e){e.writeUnsignedNumber(1,0),e.writeLengthCodedNumber(this.affectedRows||0),e.writeLengthCodedNumber(this.insertId||0),this.protocol41&&(e.writeUnsignedNumber(2,this.serverStatus||0),e.writeUnsignedNumber(2,this.warningCount||0)),e.writeString(this.message)};